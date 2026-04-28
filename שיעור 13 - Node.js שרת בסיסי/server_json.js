// שיעור 13 - שרת שמחזיר JSON
const http = require('http')

const products = [
    { id: 1, name: 'ספר JavaScript', price: 89, category: 'ספרים' },
    { id: 2, name: 'מחשב נייד', price: 3500, category: 'אלקטרוניקה' },
    { id: 3, name: 'עכבר USB', price: 45, category: 'אלקטרוניקה' }
]

const server = http.createServer((req, res) => {
    // CORS headers — מאפשר לדפדפן לגשת ל-API
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')

    if (req.url === '/api/products') {
        res.writeHead(200)
        res.end(JSON.stringify({ success: true, data: products }))
    } else if (req.url === '/api/products/1') {
        res.writeHead(200)
        res.end(JSON.stringify({ success: true, data: products[0] }))
    } else {
        res.writeHead(404)
        res.end(JSON.stringify({ success: false, error: 'לא נמצא' }))
    }
})

server.listen(3000, () => {
    console.log('API Server פועל על http://localhost:3000')
    console.log('נסה: http://localhost:3000/api/products')
})
