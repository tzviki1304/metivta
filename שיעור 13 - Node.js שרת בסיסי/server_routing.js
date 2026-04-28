// שיעור 13 - שרת עם ניתוב
const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    if (url === '/') {
        res.end('<h1>🏠 דף הבית</h1><a href="/about">אודות</a>')
    } else if (url === '/about') {
        res.end('<h1>📖 אודות</h1><p>אנחנו לומדים Node.js!</p>')
    } else if (url === '/api/users') {
        const users = [
            { id: 1, name: 'ישראל כהן' },
            { id: 2, name: 'משה לוי' }
        ]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    } else {
        res.writeHead(404)
        res.end('<h1>❌ 404 - הדף לא נמצא</h1>')
    }
})

server.listen(3000, () => {
    console.log('שרת פועל על http://localhost:3000')
})
