# שיעור 15: מסדי נתונים — SQLite ו-MongoDB 🗄️

עד עכשיו שמרנו נתונים ב**זיכרון** — הם נמחקים כשמפסיקים את השרת!  
בשיעור זה נלמד לשמור נתונים **לצמיתות** במסד נתונים.

---

## 🎯 מה נלמד היום?

✅ מה זה מסד נתונים ומה ההבדל בין SQL ל-NoSQL  
✅ SQLite — מסד נתונים בקובץ אחד (פשוט ומעולה לתחילת דרך)  
✅ MongoDB — מסד נתונים NoSQL מודרני  
✅ CRUD עם שני המסדים  
✅ חיבור לשרת Express  

---

## 🤔 SQL vs NoSQL

```
SQL (כמו SQLite, MySQL, PostgreSQL):
┌─────────────────────────────────┐
│  טבלה: users                   │
│  id │ name        │ email       │
│  ───┼─────────────┼─────────── │
│   1 │ ישראל כהן  │ i@mail.com │
│   2 │ משה לוי    │ m@mail.com │
└─────────────────────────────────┘
• נתונים מסודרים בטבלאות
• שפת שאילתות: SQL
• מתאים לנתונים מובנים ויחסים בין טבלאות

NoSQL (כמו MongoDB):
[
  { "_id": "abc123", "name": "ישראל כהן", "email": "i@mail.com" },
  { "_id": "def456", "name": "משה לוי", "email": "m@mail.com" }
]
• נתונים כ"מסמכים" (JSON)
• גמיש — כל מסמך יכול להיות שונה
• מתאים לנתונים דינמיים ולאפליקציות מודרניות
```

---

## 📦 חלק א': SQLite

SQLite הוא מסד נתונים **קל ופשוט** — כל המסד הוא **קובץ אחד**.  
מושלם לפרויקטים קטנים ולימוד!

### התקנה:
```bash
npm install better-sqlite3
```

### קובץ: `sqlite_demo.js`

```javascript
const Database = require('better-sqlite3')

// פתח (או צור) מסד נתונים
const db = new Database('school.db')

// יצירת טבלה (אם לא קיימת)
db.exec(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        grade INTEGER,
        email TEXT UNIQUE
    )
`)

console.log('✅ טבלת students נוצרה!')

// ─── INSERT ─── הוספת רשומות
const insert = db.prepare(`
    INSERT INTO students (name, grade, email) VALUES (?, ?, ?)
`)

insert.run('ישראל כהן', 10, 'israel@school.com')
insert.run('משה לוי', 11, 'moshe@school.com')
insert.run('דוד ישראלי', 9, 'david@school.com')

console.log('✅ תלמידים נוספו!')

// ─── SELECT ─── קריאת נתונים
const allStudents = db.prepare('SELECT * FROM students').all()
console.log('\n👥 כל התלמידים:')
console.table(allStudents)

// SELECT עם WHERE
const gradeFilter = db.prepare('SELECT * FROM students WHERE grade = ?')
const tenthGrade = gradeFilter.all(10)
console.log('\n📚 כיתה י:')
console.table(tenthGrade)

// ─── UPDATE ─── עדכון
const update = db.prepare('UPDATE students SET grade = ? WHERE id = ?')
update.run(11, 1)
console.log('\n✏️ עודכן!')

// ─── DELETE ─── מחיקה
const deleteStmt = db.prepare('DELETE FROM students WHERE id = ?')
deleteStmt.run(3)
console.log('🗑️ נמחק!')

// סגירת מסד הנתונים
db.close()
```

### הרצה:
```bash
node sqlite_demo.js
ls *.db   # תראה: school.db 
```

---

## 📦 SQLite עם Express (שרת מלא)

```javascript
const express = require('express')
const Database = require('better-sqlite3')

const app = express()
app.use(express.json())

// פתיחת מסד הנתונים
const db = new Database('students.db')

// יצירת טבלה
db.exec(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        grade INTEGER,
        email TEXT
    )
`)

// GET — כל התלמידים
app.get('/students', (req, res) => {
    const students = db.prepare('SELECT * FROM students').all()
    res.json(students)
})

// GET — תלמיד לפי ID
app.get('/students/:id', (req, res) => {
    const student = db.prepare('SELECT * FROM students WHERE id = ?').get(req.params.id)
    if (!student) return res.status(404).json({ error: 'לא נמצא' })
    res.json(student)
})

// POST — הוסף תלמיד
app.post('/students', (req, res) => {
    const { name, grade, email } = req.body
    const result = db.prepare(
        'INSERT INTO students (name, grade, email) VALUES (?, ?, ?)'
    ).run(name, grade, email)
    
    const newStudent = db.prepare('SELECT * FROM students WHERE id = ?').get(result.lastInsertRowid)
    res.status(201).json(newStudent)
})

// DELETE — מחק תלמיד
app.delete('/students/:id', (req, res) => {
    db.prepare('DELETE FROM students WHERE id = ?').run(req.params.id)
    res.json({ message: 'תלמיד נמחק!' })
})

app.listen(3000, () => console.log('שרת + SQLite פועל על http://localhost:3000'))
```

---

## 📦 חלק ב': MongoDB

MongoDB שומר נתונים כ**"מסמכים"** בפורמט JSON.  
מתאים מאוד לאפליקציות מודרניות!

### הגדרת MongoDB Atlas (ענן — חינמי!):
1. גש ל-[https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
2. צור חשבון חינמי
3. צור **Cluster חינמי (M0)**
4. צור **Database User** עם שם משתמש וסיסמה
5. קבל את **Connection String**

### התקנה:
```bash
npm install mongoose
```

### קובץ: `mongodb_demo.js`

```javascript
const mongoose = require('mongoose')

// חיבור ל-MongoDB (החלף בConnection String שלך!)
const MONGO_URI = 'mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/school'

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ מחובר ל-MongoDB!'))
    .catch(err => console.error('❌ שגיאת חיבור:', err))

// ─── Schema ─── הגדרת מבנה המסמך
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    grade: { type: Number, min: 1, max: 12 },
    email: { type: String, unique: true },
    subjects: [String],  // מערך של מחרוזות!
    createdAt: { type: Date, default: Date.now }
})

// ─── Model ─── טבלה / Collection
const Student = mongoose.model('Student', studentSchema)

// פונקציה ראשית
async function main() {
    // ─── CREATE ─── יצירת מסמך
    const student = await Student.create({
        name: 'ישראל כהן',
        grade: 10,
        email: 'israel@school.com',
        subjects: ['מתמטיקה', 'פיזיקה', 'JavaScript']
    })
    console.log('✅ נוצר:', student)

    // ─── READ ─── קריאה
    const allStudents = await Student.find()
    console.log('👥 כל התלמידים:', allStudents)

    const tenthGrade = await Student.find({ grade: 10 })
    console.log('📚 כיתה י:', tenthGrade)

    // ─── UPDATE ─── עדכון
    await Student.updateOne(
        { email: 'israel@school.com' },
        { $set: { grade: 11 }, $push: { subjects: 'כימיה' } }
    )
    console.log('✏️ עודכן!')

    // ─── DELETE ─── מחיקה
    await Student.deleteOne({ email: 'israel@school.com' })
    console.log('🗑️ נמחק!')

    mongoose.connection.close()
}

main()
```

---

## ⚖️ מתי להשתמש בכל מסד?

| | SQLite | MongoDB |
|---|--------|---------|
| **קלות לימוד** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **פרויקטים קטנים** | ✅ מושלם | ✅ טוב |
| **פרויקטים גדולים** | ⚠️ מוגבל | ✅ מצוין |
| **נתונים גמישים** | ❌ | ✅ |
| **שאילתות מורכבות** | ✅ SQL | ✅ Aggregation |
| **ענן / Scale** | ❌ | ✅ Atlas |

> **המלצה:** התחל עם SQLite, למד MongoDB לפרויקטים מתקדמים.

---

## 📁 קבצי התרגול בשיעור זה

| קובץ | תיאור |
|------|-------|
| [sqlite_demo.js](sqlite_demo.js) | CRUD בסיסי עם SQLite |
| [sqlite_express.js](sqlite_express.js) | SQLite + Express שרת מלא |
| [mongodb_demo.js](mongodb_demo.js) | CRUD עם MongoDB/Mongoose |

### הרצה — SQLite:
```bash
npm install better-sqlite3
node sqlite_demo.js
```

### הרצה — MongoDB:
```bash
npm install mongoose
# ערוך את MONGO_URI בקובץ!
node mongodb_demo.js
```

---

## 🔗 משאבים נוספים

- 📖 [better-sqlite3 Docs](https://github.com/WiseLibs/better-sqlite3)
- 📖 [Mongoose Docs](https://mongoosejs.com/docs/)
- 🌐 [MongoDB Atlas](https://www.mongodb.com/atlas)
- 🎮 [MongoDB Playground](https://mongoplayground.net/)
