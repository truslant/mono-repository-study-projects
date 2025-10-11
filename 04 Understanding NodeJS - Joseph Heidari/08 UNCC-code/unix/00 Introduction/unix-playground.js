const { spawn, exec } = require('node:child_process');

//echo "some text" | tr ' ' '\n'

const subprocess = spawn('echo', ["some text", "|", "tr", " ", "\n"]);

subprocess.stdout.on('data', (data) => {
    console.log(data.toString('utf-8'));
})

// exec("echo 'some text' | tr ' ' '\n'", (error, stdout, stderr) => {
//     if (error) {
//         console.error(error);
//         return
//     }
//     console.log(stdout)
//     console.log(`stderr:${stderr}`);
// })