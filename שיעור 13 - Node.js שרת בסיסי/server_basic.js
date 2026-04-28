// שיעור 13 - שרת HTTP בסיסי
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('שלום עולם מהשרת! 🎉')
})

server.listen(3000, () => {
    console.log('השרת פועל על http://localhost:3000')
})
