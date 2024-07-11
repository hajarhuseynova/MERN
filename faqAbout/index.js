const http = require('http')
const routes = require('./routes')

const server = http.createServer((req,res) => {
    const route = routes[req.url]

    if (route === undefined) {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h1>404 Not Found</h1>')
        res.end()
    }

    const handler = route[req.method]
    handler(res)
})

server.listen(3000, () => {
    console.log('Listen 3000');
})