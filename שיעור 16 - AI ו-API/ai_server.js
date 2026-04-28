require('dotenv').config()
const express = require('express')
const { GoogleGenerativeAI } = require('@google/generative-ai')

const app = express()
app.use(express.json())

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

app.post('/api/ask', async (req, res) => {
    const { question } = req.body
    if (!question) return res.status(400).json({ error: 'חסרה שאלה' })
    try {
        const result = await model.generateContent(question)
        res.json({ question, answer: result.response.text(), model: 'gemini-1.5-flash' })
    } catch (err) {
        res.status(500).json({ error: 'שגיאה ב-AI', details: err.message })
    }
})

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html><html dir="rtl"><head><meta charset="UTF-8"><title>שרת AI</title>
        <style>body{font-family:Arial;max-width:600px;margin:40px auto;padding:20px}
        input{width:100%;padding:10px;font-size:16px;margin:10px 0}
        button{padding:10px 20px;font-size:16px;background:#4285f4;color:white;border:none;cursor:pointer;border-radius:4px}
        #answer{margin-top:20px;padding:15px;background:#f5f5f5;border-radius:8px;white-space:pre-wrap;min-height:60px}</style></head>
        <body>
        <h1>🤖 שרת AI</h1>
        <input id="q" placeholder="שאל אותי משהו..." />
        <button onclick="ask()">שאל</button>
        <div id="answer">התשובה תופיע כאן...</div>
        <script>
        async function ask() {
            const q = document.getElementById('q').value
            if (!q) return
            document.getElementById('answer').textContent = '⏳ חושב...'
            const r = await fetch('/api/ask', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({question:q}) })
            const data = await r.json()
            document.getElementById('answer').textContent = data.answer || data.error
        }
        document.getElementById('q').addEventListener('keypress', e => e.key==='Enter' && ask())
        </script></body></html>
    `)
})

app.listen(3000, () => console.log('🤖 שרת AI פועל על http://localhost:3000'))
