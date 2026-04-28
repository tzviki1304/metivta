// שיעור 14 - Middleware ב-Express
const express = require('express')
const app = express()

app.use(express.json())

// ── Middleware גלובלי (רץ על כל בקשה) ──

// לוגר — מדפיס כל בקשה
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString('he-IL')
    console.log(`[${time}] ${req.method} ${req.url}`)
    next() // חייב לקרוא next() להמשיך!
})

// הוספת header לכל תשובה
app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'מתיבתא שרת')
    next()
})

// ── Middleware ספציפי לRoute ──

// בדיקת אימות פשוטה
function requireAuth(req, res, next) {
    const token = req.headers['authorization']
    if (token === 'secret-token-123') {
        next() // מורשה — המשך
    } else {
        res.status(401).json({ error: 'לא מורשה! שלח Authorization header' })
    }
}

// Middleware לטיפול בשגיאות
function errorHandler(err, req, res, next) {
    console.error('שגיאה:', err.message)
    res.status(500).json({ error: 'שגיאה פנימית בשרת' })
}

// ── Routes ──

app.get('/', (req, res) => {
    res.json({ message: 'דף הבית — ציבורי לכולם' })
})

// Route ציבורי
app.get('/public', (req, res) => {
    res.json({ message: 'מידע ציבורי — כולם רואים' })
})

// Route מוגן — דורש אימות
app.get('/private', requireAuth, (req, res) => {
    res.json({ 
        message: 'מידע סודי! 🔐',
        secret: '12345' 
    })
})

// Route שזורק שגיאה (לדוגמה)
app.get('/crash', (req, res, next) => {
    try {
        throw new Error('קרסנו בכוונה!')
    } catch (err) {
        next(err) // שלח לerror handler
    }
})

// Error Handler — חייב להיות אחרון!
app.use(errorHandler)

app.listen(3000, () => {
    console.log('✅ שרת עם Middleware פועל על http://localhost:3000')
    console.log('\nנסה:')
    console.log('  GET /public')
    console.log('  GET /private  (ללא Authorization header — יכשל)')
    console.log('  GET /private  (עם: Authorization: secret-token-123)')
})
