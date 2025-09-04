const fs = require('fs/promises');

(async () => {
    let lastProcessed = 0;
    const DEBOUNCE_TIME = 500
    const CREATE_FILE = "create a file"
    const DELETE_FILE = "delete the file"
    const RENAME_FILE = "rename a file"
    const ADD_TO_FILE = "add to the file"

    const createFile = async (path) => {
        try {
            const existingFileHandle = await fs.open(path, "r");
            existingFileHandle.close()
            return console.log(`File "${path}" already exists`)
        } catch (error) {
            const newFileHandle = await fs.open(path, "w")
            console.log('New file was created')
            newFileHandle.close()
        }
    }

    const deleteFile = async (filePath) => {
        // console.log(`Deleting the file ${filePath}...`)

        try {
            const existingFile = await fs.open(filePath, "r")
            existingFile.close()
            const result = await fs.unlink(filePath)
            if (result === undefined) {
                console.log(`File ${path} was deleted successfully!`)
            } else {
                console.log(`Issue occured during deletion of file ${path}...`)
            }

        } catch (error) {
            console.log(`File does not exist: ${filePath}`);
        }
    }

    const renameFile = async (oldPath, newPath) => {
        // console.log(`Renaming ${oldPath} to ${newPath}`)
        try {
            const existingFile = await fs.open(oldPath, "r")
            existingFile.close();
            const result = await fs.rename(oldPath, newPath);
            if (result === undefined) {
                console.log(`File successfully renamed from ${oldPath} to ${newPath}!`)
            } else {
                console.log(`Issure occured while renaming the file from ${oldPath} to ${newPath}`)
            }

        } catch (error) {
            console.log(`File does not exist: ${oldPath}`)
        }
    }

    const addToFile = async (path, content) => {
        console.log(`Adding to ${path}`)
        console.log(`Content: ${content}`)
        try {
            const existingFile = await fs.open(path, "r");
            existingFile.close();
            const result = await fs.appendFile(path, content)
            if (result === undefined) {
                console.log(`File ${path} was updated successfully with data: ${content}`)
            } else {
                console.log(`Issue occured while updateing file ${path} with content: ${content}`)
            }
        } catch (error) {
            console.log(`File does not exist: ${path}`)
        }
    }

    const commandFileHandler = await fs.open("./command.txt");

    const watcher = fs.watch("./command.txt");

    commandFileHandler.on("change", async () => {

        const curDate = Date.now()
        if (curDate - lastProcessed < DEBOUNCE_TIME) {
            console.log("Dublicated event")
            return
        }
        lastProcessed = curDate;

        //get the size of file
        const { size } = await commandFileHandler.stat();

        //allocate Buffer instance for file reading
        const buff = Buffer.alloc(size)

        //the starting location at which the buffer needs to be filled
        const offset = 0;
        // how many bytes to be read
        const length = buff.byteLength;
        //the position that we want to start reading the file from
        const position = 0;

        // setting up to read whole file content from beginning to the end of file
        await commandFileHandler.read(
            buff,
            offset,
            length,
            position
        );

        // console.log(buff);
        const command = buff.toString("utf-8");

        //create a file:
        //create a file <path>
        if (command.includes(CREATE_FILE)) {
            const filePath = command.substring(CREATE_FILE.length + 1);
            createFile(filePath)
        }

        //delete a file
        //delete a file <path>
        if (command.includes(DELETE_FILE)) {
            const filePath = command.substring(DELETE_FILE.length + 1);
            deleteFile(filePath);
        }

        //rename a file:
        //rename the file <oldPath> to <newPath>
        if (command.includes(RENAME_FILE)) {
            const _idx = command.indexOf(' to ');
            const oldFilePath = command.substring(RENAME_FILE.length + 1, _idx)
            const newFilePath = command.substring(_idx + 4);
            renameFile(oldFilePath, newFilePath);
        }

        //add to file:
        // add to the file <path> this content: <content>
        if (command.includes(ADD_TO_FILE)) {
            const _idx = command.indexOf(' this content: ')
            const filePath = command.substring(ADD_TO_FILE.length + 1, _idx);
            const content = command.substring(_idx + 15);
            addToFile(filePath, content)
        }

    })

    for await (const event of watcher) {
        if (event.eventType === 'change') {
            commandFileHandler.emit("change")
        }
    }

})()