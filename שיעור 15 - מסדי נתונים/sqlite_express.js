const express = require('express')
const Database = require('better-sqlite3')

const app = express()
app.use(express.json())

const db = new Database('students.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        grade INTEGER,
        email TEXT
    )
`)

// GET כל התלמידים
app.get('/students', (req, res) => {
    const students = db.prepare('SELECT * FROM students').all()
    res.json({ count: students.length, students })
})

// GET לפי ID
app.get('/students/:id', (req, res) => {
    const student = db.prepare('SELECT * FROM students WHERE id = ?').get(req.params.id)
    if (!student) return res.status(404).json({ error: 'לא נמצא' })
    res.json(student)
})

// POST — הוסף תלמיד
app.post('/students', (req, res) => {
    const { name, grade, email } = req.body
    if (!name) return res.status(400).json({ error: 'שם הוא שדה חובה' })
    const result = db.prepare(
        'INSERT INTO students (name, grade, email) VALUES (?, ?, ?)'
    ).run(name, grade, email)
    const newStudent = db.prepare('SELECT * FROM students WHERE id = ?').get(result.lastInsertRowid)
    res.status(201).json(newStudent)
})

// PUT — עדכן תלמיד
app.put('/students/:id', (req, res) => {
    const { name, grade, email } = req.body
    db.prepare(
        'UPDATE students SET name=COALESCE(?,name), grade=COALESCE(?,grade), email=COALESCE(?,email) WHERE id=?'
    ).run(name, grade, email, req.params.id)
    const updated = db.prepare('SELECT * FROM students WHERE id = ?').get(req.params.id)
    if (!updated) return res.status(404).json({ error: 'לא נמצא' })
    res.json(updated)
})

// DELETE — מחק תלמיד
app.delete('/students/:id', (req, res) => {
    db.prepare('DELETE FROM students WHERE id = ?').run(req.params.id)
    res.json({ message: 'תלמיד נמחק!' })
})

app.listen(3000, () => console.log('✅ שרת SQLite פועל על http://localhost:3000/students'))
