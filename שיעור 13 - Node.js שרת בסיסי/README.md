# שיעור 13: Node.js — שרת בסיסי 🖥️

ברוכים הבאים לעולם ה-Back-End!  
עד עכשיו כל הקוד שלנו רץ **בדפדפן** (Front-End).  
עכשיו נלמד לכתוב קוד שרץ **על השרת** (Back-End).

---

## 🎯 מה נלמד היום?

✅ מה זה Node.js ולמה הוא חשוב  
✅ יצירת שרת HTTP פשוט עם המודול המובנה  
✅ שליחה וקבלה של בקשות  
✅ ניתוב (Routing) בסיסי  
✅ קריאה וכתיבה לקבצים  

---

## 🤔 מה זה Node.js?

Node.js הוא **סביבת הרצה** לJavaScript מחוץ לדפדפן.  
כלומר — אפשר להריץ JavaScript ישירות על המחשב / שרת!

```
דפדפן:                    Node.js:
JavaScript → Chrome    JavaScript → מחשב / שרת
```

**למה Node.js?**
- 🚀 מהיר מאוד (מבוסס על מנוע V8 של Chrome)
- 📦 npm — מיליוני חבילות מוכנות
- 🔄 אותה שפה (JS) ב-Front וב-Back
- 💼 מאוד נדרש בשוק העבודה

---

## 📋 שלב 1: בדיקה שNode.js מותקן

פתח Terminal ורשום:

```bash
node --version    # v20.x.x
npm --version     # 10.x.x
```

> אם לא מותקן — ראה [שיעור 12](../שיעור%2012%20-%20React%20התקנה%20וראשית/README.md) להוראות התקנה

---

## 📋 שלב 2: שרת HTTP ראשון — המודול המובנה

### קובץ: `server.js`

```javascript
// ייבוא מודול http מובנה (לא צריך npm install!)
const http = require('http')

// יצירת השרת
const server = http.createServer((req, res) => {
    // req = הבקשה שהגיעה
    // res = התשובה שנחזיר

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('שלום עולם מהשרת! 🎉')
})

// הפעלת השרת על פורט 3000
server.listen(3000, () => {
    console.log('השרת פועל על http://localhost:3000')
})
```

### הרצה:
```bash
node server.js
```
פתח דפדפן על **http://localhost:3000** ✅

---

## 📋 שלב 3: ניתוב (Routing)

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url        // הנתיב המבוקש (/about, /contact וכו')
    const method = req.method  // GET, POST, PUT, DELETE

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    if (url === '/') {
        res.end('<h1>🏠 דף הבית</h1>')
    } else if (url === '/about') {
        res.end('<h1>📖 אודות</h1><p>אנחנו לומדים Node.js!</p>')
    } else if (url === '/users') {
        res.end('<h1>👥 משתמשים</h1>')
    } else {
        // 404 - דף לא נמצא
        res.writeHead(404)
        res.end('<h1>❌ 404 - הדף לא נמצא</h1>')
    }
})

server.listen(3000, () => {
    console.log('שרת פועל על http://localhost:3000')
})
```

---

## 📋 שלב 4: החזרת JSON

רוב ה-APIs מחזירים נתונים בפורמט **JSON**:

```javascript
const http = require('http')

const users = [
    { id: 1, name: 'ישראל כהן', age: 25 },
    { id: 2, name: 'משה לוי', age: 30 },
    { id: 3, name: 'דוד ישראלי', age: 22 }
]

const server = http.createServer((req, res) => {
    if (req.url === '/api/users') {
        // החזרת JSON
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    } else {
        res.writeHead(404)
        res.end(JSON.stringify({ error: 'לא נמצא' }))
    }
})

server.listen(3000)
```

פתח: **http://localhost:3000/api/users** — תראה JSON! ✅

---

## 📋 שלב 5: קריאה וכתיבה לקבצים (fs)

```javascript
const http = require('http')
const fs = require('fs')        // File System — מובנה ב-Node

// קריאה מ-קובץ (sync — עוצר עד שמסיים)
const content = fs.readFileSync('data.txt', 'utf-8')
console.log(content)

// כתיבה לקובץ
fs.writeFileSync('output.txt', 'שלום מNode.js!')

// קריאה async (לא עוצר!)
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('שגיאה:', err)
        return
    }
    console.log('תוכן הקובץ:', data)
})
```

---

## 🔑 קודי סטטוס HTTP חשובים

| קוד | משמעות |
|-----|--------|
| 200 | OK — הכל תקין ✅ |
| 201 | Created — נוצר בהצלחה |
| 400 | Bad Request — בקשה שגויה ❌ |
| 401 | Unauthorized — לא מורשה 🔒 |
| 404 | Not Found — לא נמצא 🔍 |
| 500 | Internal Server Error — שגיאה בשרת 💥 |

---

## 📁 קבצי התרגול בשיעור זה

| קובץ | תיאור |
|------|-------|
| [server_basic.js](server_basic.js) | שרת בסיסי — Hello World |
| [server_routing.js](server_routing.js) | שרת עם ניתוב |
| [server_json.js](server_json.js) | שרת שמחזיר JSON |
| [server_files.js](server_files.js) | קריאה/כתיבה לקבצים |

### הרצה:
```bash
node server_basic.js
```

---

## 🔗 קישור לשיעור הבא

בשיעור הבא נלמד **Express** — ספרייה שהופכת את כתיבת השרתים להרבה יותר נוח!
