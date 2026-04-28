// שיעור 14 - Express בסיסי
const express = require('express')
const app = express()

app.use(express.json())

// אחסון זמני בזיכרון (בשיעור 15 נחליף למסד נתונים!)
let users = [
    { id: 1, name: 'ישראל כהן', email: 'israel@example.com', age: 25 },
    { id: 2, name: 'משה לוי', email: 'moshe@example.com', age: 30 },
    { id: 3, name: 'דוד ישראלי', email: 'david@example.com', age: 22 }
]
let nextId = 4

// לוגר
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString('he-IL')}] ${req.method} ${req.url}`)
    next()
})

// דף הבית
app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 REST API — שיעור 14</h1>
        <p>נסה את ה-Routes הבאים:</p>
        <ul>
            <li>GET /users — כל המשתמשים</li>
            <li>GET /users/1 — משתמש #1</li>
            <li>POST /users — צור משתמש</li>
            <li>PUT /users/1 — עדכן משתמש #1</li>
            <li>DELETE /users/1 — מחק משתמש #1</li>
        </ul>
    `)
})

// GET כל המשתמשים (תמיכה בחיפוש: /users?name=ישראל)
app.get('/users', (req, res) => {
    const { name } = req.query
    let result = users
    if (name) {
        result = users.filter(u => u.name.includes(name))
    }
    res.json({ count: result.length, users: result })
})

// GET משתמש לפי ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    if (!user) return res.status(404).json({ error: 'משתמש לא נמצא' })
    res.json(user)
})

// POST — צור משתמש חדש
app.post('/users', (req, res) => {
    const { name, email, age } = req.body
    if (!name || !email) {
        return res.status(400).json({ error: 'שם ואימייל הם שדות חובה' })
    }
    const newUser = { id: nextId++, name, email, age: age || 0 }
    users.push(newUser)
    res.status(201).json({ message: 'משתמש נוצר!', user: newUser })
})

// PUT — עדכן משתמש
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = users.findIndex(u => u.id === id)
    if (index === -1) return res.status(404).json({ error: 'משתמש לא נמצא' })
    users[index] = { ...users[index], ...req.body }
    res.json({ message: 'משתמש עודכן!', user: users[index] })
})

// DELETE — מחק משתמש
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = users.findIndex(u => u.id === id)
    if (index === -1) return res.status(404).json({ error: 'משתמש לא נמצא' })
    users.splice(index, 1)
    res.json({ message: 'משתמש נמחק בהצלחה' })
})

app.listen(3000, () => {
    console.log('✅ שרת Express פועל על http://localhost:3000')
    console.log('📌 בדוק את http://localhost:3000/users')
})
