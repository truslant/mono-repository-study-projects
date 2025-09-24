const Butter = require('../butter');

const SESSIONS = [];

const USERS = [
    { id: 1, name: 'Liam Broen', username: 'liam23', password: 'string' },
    { id: 2, name: 'Meredith Green', username: 'marit.sky', password: 'string' },
    { id: 3, name: 'Ben Adams', username: 'ben.poet', password: 'string' }
];

const POSTS = [
    {
        id: 1,
        title: 'This is a post title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus id ante accumsan consequat. Nunc pulvinar lectus vitae nisl condimentum maximus.',
        userId: 1
    },
    {
        id: 2,
        title: 'This is a post title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus id ante accumsan consequat. Nunc pulvinar lectus vitae nisl condimentum maximus.',
        userId: 2
    },
];

const PORT = 8000;

const server = new Butter()

server.beforeEach((req, res, next) => {

    const routesToAuthenticate = [
        'GET /api/user',
        "PUT /api/user",
        'POST /api/posts',
        'DELETE /api/logout'
    ];

    if (routesToAuthenticate.indexOf(`${req.method} ${req.url}`) > -1) {

        if (req.headers.cookie) {
            const token = req.headers.cookie?.split('=')[1];
            const session = SESSIONS.find(session => token === session.token)
            if (session) {
                req.userId = session.userId;
                return next();
            }
        }
        return res.status(401).json({ error: 'Unauthorized' })

    } else {
        next();
    }

});

server.beforeEach((req, res, next) => {
    if (req.headers["content-type"] === 'application/json') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString('utf-8')
        })
        req.on('end', () => {
            req.body = JSON.parse(body)
            return next()
        })
    } else {
        next()
    }
});

server.beforeEach((req, res, next) => {

    const routes = ['/', '/login', '/profile', '/new-post'];
    if (routes.indexOf(req.url) !== -1 && req.method === 'GET') {
        return res.status(200).sendFile('/public/index.html', 'text/html')
    } else {
        next();
    }
});




// ---------- File Routes ---------- //
// server.route('GET', '/', (req, res) => {
//     console.log('This is  /  route');
//     res.sendFile('./public/index.html', 'text/html')
// })
// server.route('GET', '/login', (req, res) => {
//     res.sendFile('./public/index.html', 'text/html')
// })
server.route('GET', '/styles.css', (req, res) => {
    res.sendFile('./public/styles.css', 'text/css')
})
server.route('GET', '/scripts.js', (req, res) => {
    res.sendFile('./public/scripts.js', 'text/javascript')
})


// ---------- JSON Routes ---------- //
server.route('GET', '/api/posts', (req, res) => {

    const authoredPosts = POSTS.map(post => {
        let newObject = {}
        Object.keys(post).forEach(key => {
            if (key !== 'userId') {
                newObject[key] = post[key]
            } else {
                newObject.author = USERS.find(user => post.userId === user.id).name
            }
        })
        return newObject
    })
    res.status(200).json(authoredPosts)
})

server.route('POST', '/api/login', async (req, res) => {
    // const { username, password } = await req.parseBody();

    const username = req.body.username;
    const password = req.body.password;

    const user = USERS.find(user => ((username === user.username) && (password === user.password)))

    if (user) {
        const token = Math.floor(Math.random() * 1e10).toString()
        SESSIONS.push({
            userId: user.id,
            token
        })
        res.setHeader('set-cookie', `token=${token}; Path='/';`);
        res.status(200).json({ message: 'Logged in Successfully' });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
})

server.route('GET', '/api/user', (req, res) => {
    const user = USERS.find(user => user.id === req.userId);
    res.json({ username: user.username, name: user.name });
})

server.route('DELETE', '/api/logout', (req, res) => {
    SESSIONS = SESSIONS.filter(session => req.userId !== session.userId)
    res.setHeader("Set-Cookie", `token=deleted; Path=/;`);
    res.status(200).json({ message: 'Logged out successfully!' })
});


server.route('PUT', '/api/user', (req, res) => {
    const { name, password, username } = req.body;

    const user = USERS.find(user => req.userId === user.id)

    user.username = username ? username : user.username;
    user.password = password ? password : user.password;
    user.name = name ? name : user.name;

    res.status(200).json({
        username: user.username,
        name: user.name,
        password_status: password ? 'Updated' : 'Not updated',
    })
})

server.route('POST', '/api/posts', (req, res) => {
    const { title, body } = req.body;
    const post = {
        id: POSTS.length + 1,
        title,
        body,
        userId: req.userId,
    }
    POSTS.unshift(post);
    res.status(201).json(post)
})


server.listen(PORT, () => {
    console.log(`Server has started at port: ${PORT}`, server.server.address())
})