# שיעור 14: Express.js ו-REST API 🚀

בשיעור הקודם למדנו לכתוב שרת עם המודול המובנה של Node.  
היום נלמד את **Express** — הדרך המקצועית לכתוב שרתים!

---

## 🎯 מה נלמד היום?

✅ מה זה Express ולמה משתמשים בו  
✅ יצירת שרת Express בסיסי  
✅ Routing מתקדם (GET, POST, PUT, DELETE)  
✅ Middleware — מה זה ולמה זה חשוב  
✅ בניית REST API מלא  
✅ בדיקה עם Postman / Thunder Client  

---

## 🤔 מה זה Express?

Express היא **ספריית Node.js** הפופולרית ביותר לבניית שרתים.  
במקום לכתוב 20 שורות לשרת פשוט — כותבים 5!

```javascript
// בלי Express (Node בסיסי):
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    }
    // ...עוד הרבה בדיקות...
})

// עם Express — הרבה יותר נקי! 🎉
const express = require('express')
const app = express()
app.get('/users', (req, res) => {
    res.json(users)
})
```

---

## 📋 שלב 1: התקנת Express

```bash
# צור תיקייה חדשה לפרויקט
mkdir my-server
cd my-server

# אתחל npm
npm init -y

# התקן express
npm install express
```

קובץ `package.json` נוצר אוטומטית ✅

---

## 📋 שלב 2: שרת Express ראשון

### קובץ: `app.js`

```javascript
const express = require('express')
const app = express()

// Middleware לקריאת JSON בגוף הבקשה
app.use(express.json())

// Route בסיסי
app.get('/', (req, res) => {
    res.send('שלום עולם מExpress! 🎉')
})

// הפעלת השרת
app.listen(3000, () => {
    console.log('שרת Express פועל על http://localhost:3000')
})
```

```bash
node app.js
```

---

## 📋 שלב 3: REST API מלא — CRUD

**CRUD** = Create, Read, Update, Delete  
(יצירה, קריאה, עדכון, מחיקה)

```javascript
const express = require('express')
const app = express()
app.use(express.json())

// "מסד נתונים" זמני בזיכרון
let users = [
    { id: 1, name: 'ישראל כהן', email: 'israel@example.com' },
    { id: 2, name: 'משה לוי', email: 'moshe@example.com' }
]
let nextId = 3

// ─── GET /users ─── קבל את כל המשתמשים
app.get('/users', (req, res) => {
    res.json(users)
})

// ─── GET /users/:id ─── קבל משתמש ספציפי
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    
    if (!user) {
        return res.status(404).json({ error: 'משתמש לא נמצא' })
    }
    res.json(user)
})

// ─── POST /users ─── צור משתמש חדש
app.post('/users', (req, res) => {
    const { name, email } = req.body
    
    if (!name || !email) {
        return res.status(400).json({ error: 'שם ואימייל הם שדות חובה' })
    }
    
    const newUser = { id: nextId++, name, email }
    users.push(newUser)
    res.status(201).json(newUser)
})

// ─── PUT /users/:id ─── עדכן משתמש
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = users.findIndex(u => u.id === id)
    
    if (index === -1) {
        return res.status(404).json({ error: 'משתמש לא נמצא' })
    }
    
    users[index] = { ...users[index], ...req.body }
    res.json(users[index])
})

// ─── DELETE /users/:id ─── מחק משתמש
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = users.findIndex(u => u.id === id)
    
    if (index === -1) {
        return res.status(404).json({ error: 'משתמש לא נמצא' })
    }
    
    users.splice(index, 1)
    res.json({ message: 'המשתמש נמחק בהצלחה' })
})

app.listen(3000, () => console.log('שרת פועל על http://localhost:3000'))
```

---

## 📋 שלב 4: Middleware

**Middleware** = פונקציה שרצה **לפני** שהבקשה מגיעה ל-Route.

```javascript
const express = require('express')
const app = express()
app.use(express.json())

// ─── Middleware מותאם אישית: לוגר ───
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString('he-IL')
    console.log(`[${time}] ${req.method} ${req.url}`)
    next() // חייב לקרוא ל-next() כדי להמשיך!
})

// ─── Middleware: בדיקת הרשאה ───
function checkAuth(req, res, next) {
    const token = req.headers['authorization']
    
    if (!token || token !== 'Bearer my-secret-token') {
        return res.status(401).json({ error: 'לא מורשה' })
    }
    next()
}

// Route פרוטקטד — רק עם authorization
app.get('/admin', checkAuth, (req, res) => {
    res.json({ message: 'ברוך הבא לאזור הניהול!' })
})

app.listen(3000)
```

---

## 📋 שלב 5: Query Parameters וחיפוש

```javascript
// GET /users?name=ישראל&minAge=20
app.get('/users', (req, res) => {
    const { name, minAge } = req.query  // query params
    
    let result = users
    
    if (name) {
        result = result.filter(u => u.name.includes(name))
    }
    if (minAge) {
        result = result.filter(u => u.age >= parseInt(minAge))
    }
    
    res.json(result)
})
```

---

## 🗺️ טבלת REST API

| Method | URL | פעולה |
|--------|-----|-------|
| GET | `/users` | קבל את כל המשתמשים |
| GET | `/users/5` | קבל משתמש #5 |
| POST | `/users` | צור משתמש חדש |
| PUT | `/users/5` | עדכן משתמש #5 |
| DELETE | `/users/5` | מחק משתמש #5 |

---

## 🔧 בדיקה עם כלים

### Thunder Client (VS Code Extension):
1. התקן מ-Marketplace: **Thunder Client**
2. פתח את הכלי בסרגל הצד
3. שלח בקשות GET/POST/PUT/DELETE

### Postman (חינמי, מומלץ):
1. הורד מ-[postman.com](https://www.postman.com/downloads/)
2. צור **New Request**
3. בחר Method (GET/POST וכו')
4. הכנס URL: `http://localhost:3000/users`
5. לחץ **Send**

---

## 📁 קבצי התרגול בשיעור זה

| קובץ | תיאור |
|------|-------|
| [app_basic.js](app_basic.js) | Express בסיסי |
| [app_crud.js](app_crud.js) | REST API מלא עם CRUD |
| [app_middleware.js](app_middleware.js) | דוגמאות Middleware |

### הרצה:
```bash
npm install express
node app_crud.js
```

---

## 🔗 משאבים נוספים

- 📖 [Express.js Docs](https://expressjs.com/)
- 🔧 [Postman](https://www.postman.com/)
- 📺 [Express.js Crash Course — Traversy Media](https://www.youtube.com/watch?v=SccSCuHhOw0)

---

## 🔗 קישור לשיעור הבא

בשיעור הבא נחבר את השרת שלנו ל**מסד נתונים** — SQLite ו-MongoDB!
