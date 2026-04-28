// שיעור 14 - Express בסיסי — Hello World + Routes
const express = require('express')
const app = express()

app.use(express.json())

// Route ראשון
app.get('/', (req, res) => {
    res.send('<h1>שלום מ-Express! 👋</h1>')
})

// Route שמחזיר JSON
app.get('/about', (req, res) => {
    res.json({
        app: 'שרת Express',
        version: '1.0',
        lesson: 14
    })
})

// Route עם פרמטר (:name)
app.get('/hello/:name', (req, res) => {
    const name = req.params.name
    res.send(`<h1>שלום, ${name}! 👋</h1>`)
})

// Route עם Query Params (?age=25)
app.get('/greet', (req, res) => {
    const { name = 'אורח', age } = req.query
    const ageText = age ? `, בן ${age}` : ''
    res.send(`שלום ${name}${ageText}!`)
})

app.listen(3000, () => {
    console.log('✅ שרת Express בסיסי פועל על http://localhost:3000')
    console.log('נסה: http://localhost:3000/hello/ישראל')
    console.log('נסה: http://localhost:3000/greet?name=משה&age=25')
})
