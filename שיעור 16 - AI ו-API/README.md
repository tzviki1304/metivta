# שיעור 16: חיבור AI — עבודה עם APIs של בינה מלאכותית 🤖

ב-2024 יודעים לכתוב קוד — זה חשוב.  
אבל מי שיודע **לחבר AI לאפליקציות** — זה השלב הבא!  
בשיעור זה נלמד לעבוד עם **ChatGPT API** ו-**Gemini API**.

---

## 🎯 מה נלמד היום?

✅ מה זה LLM ואיך AI APIs עובדים  
✅ קבלת API Key מOpenAI / Google  
✅ שליחת בקשות לGPT-4 מ-Node.js  
✅ בניית צ'אטבוט פשוט  
✅ Gemini API — חינמי לגמרי!  
✅ טיפים מעשיים — Prompt Engineering  

---

## 🤔 איך AI API עובד?

```
אפליקציה שלנו                      שרתי OpenAI/Google
     │                                      │
     │  POST /v1/chat/completions           │
     │  { "messages": [                     │
     │      { "role": "user",               │
     │        "content": "מה מזג האוויר?" } │
     │  ]}                                  │
     │ ─────────────────────────────────> │
     │                                      │
     │  { "choices": [{                     │
     │      "message": {                    │
     │        "content": "אני מודל שפה..." }│
     │  }]}                                 │
     │ <───────────────────────────────── │
     │                                      │
 מציג תשובה                         מעבד + מחזיר
```

---

## 🔑 חלק א': OpenAI (ChatGPT)

### קבלת API Key:
1. גש ל-[https://platform.openai.com](https://platform.openai.com)
2. צור חשבון → **API Keys** → **Create new secret key**
3. שמור את ה-Key (מוצג פעם אחת בלבד!)
4. הוסף אמצעי תשלום (יש $5 חינמי לחשבון חדש)

> ⚠️ **לעולם אל תכניס API Key ישירות בקוד!**  
> השתמש בקובץ `.env`

### התקנה:
```bash
npm install openai dotenv
```

### קובץ: `.env`
```
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxx
```

### קובץ: `.gitignore`
```
.env
node_modules/
```

### קובץ: `openai_basic.js`

```javascript
require('dotenv').config()
const OpenAI = require('openai')

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

async function askGPT(question) {
    console.log(`\n❓ שאלה: ${question}`)
    
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',  // זול ומהיר!
        messages: [
            {
                role: 'system',
                content: 'אתה עוזר ידידותי שעונה בעברית.'
            },
            {
                role: 'user',
                content: question
            }
        ],
        max_tokens: 500
    })
    
    const answer = response.choices[0].message.content
    console.log(`💬 תשובה: ${answer}`)
    return answer
}

// בדיקה
askGPT('הסבר מה זה JavaScript במשפט אחד')
```

```bash
node openai_basic.js
```

---

## 🤖 צ'אטבוט אינטראקטיבי

```javascript
require('dotenv').config()
const OpenAI = require('openai')
const readline = require('readline')

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// שמירת היסטוריית השיחה
const conversationHistory = [
    {
        role: 'system',
        content: `אתה עוזר מתכנת מומחה. 
        אתה עונה בעברית, בצורה קצרה וברורה.
        אתה מסביר קוד ועוזר לפתור בעיות.`
    }
]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function chat(userMessage) {
    // הוסף הודעת המשתמש להיסטוריה
    conversationHistory.push({ role: 'user', content: userMessage })
    
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: conversationHistory,
        max_tokens: 1000
    })
    
    const assistantMessage = response.choices[0].message.content
    
    // הוסף תשובת ה-AI להיסטוריה
    conversationHistory.push({ role: 'assistant', content: assistantMessage })
    
    return assistantMessage
}

function askQuestion() {
    rl.question('\n👤 אתה: ', async (input) => {
        if (input.toLowerCase() === 'exit' || input === 'יציאה') {
            console.log('להתראות! 👋')
            rl.close()
            return
        }
        
        try {
            const response = await chat(input)
            console.log(`\n🤖 AI: ${response}`)
        } catch (error) {
            console.error('❌ שגיאה:', error.message)
        }
        
        askQuestion() // המשך הצ'אט
    })
}

console.log('🤖 צ\'אטבוט AI')
console.log('כתוב "יציאה" לסיום\n')
askQuestion()
```

---

## 🌟 חלק ב': Gemini API (חינמי!)

Google's Gemini נותן **1,500 בקשות חינמיות ביום** — מושלם ללמידה!

### קבלת API Key (חינמי):
1. גש ל-[https://aistudio.google.com](https://aistudio.google.com)
2. לחץ **Get API key** → **Create API key**
3. שמור את ה-Key

### התקנה:
```bash
npm install @google/generative-ai dotenv
```

### קובץ: `.env`
```
GEMINI_API_KEY=AIzaSy-xxxxxxxxxxxxxxxxxxxxxx
```

### קובץ: `gemini_basic.js`

```javascript
require('dotenv').config()
const { GoogleGenerativeAI } = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function askGemini(prompt) {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    const result = await model.generateContent(prompt)
    const response = result.response
    return response.text()
}

// שאלה פשוטה
async function main() {
    const answer = await askGemini('הסבר מה זה React.js בעברית, 3 נקודות')
    console.log('תשובת Gemini:\n', answer)
}

main()
```

---

## 🌐 שרת Express עם AI

```javascript
require('dotenv').config()
const express = require('express')
const { GoogleGenerativeAI } = require('@google/generative-ai')

const app = express()
app.use(express.json())

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

// Endpoint לשאלות AI
app.post('/api/ask', async (req, res) => {
    const { question } = req.body
    
    if (!question) {
        return res.status(400).json({ error: 'חסרה שאלה' })
    }
    
    try {
        const result = await model.generateContent(question)
        const answer = result.response.text()
        
        res.json({
            question,
            answer,
            model: 'gemini-1.5-flash'
        })
    } catch (error) {
        res.status(500).json({ error: 'שגיאה בAI', details: error.message })
    }
})

// דף בדיקה פשוט
app.get('/', (req, res) => {
    res.send(`
        <h1>🤖 שרת AI</h1>
        <p>שלח POST ל /api/ask עם { "question": "השאלה שלך" }</p>
        <br>
        <form onsubmit="ask(event)">
            <input id="q" placeholder="שאל אותי משהו..." style="width:300px;padding:8px">
            <button type="submit">שאל</button>
        </form>
        <div id="answer" style="margin-top:20px;padding:10px;background:#f0f0f0;white-space:pre-wrap"></div>
        <script>
        async function ask(e) {
            e.preventDefault()
            const q = document.getElementById('q').value
            document.getElementById('answer').textContent = 'חושב...'
            const r = await fetch('/api/ask', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ question: q })
            })
            const data = await r.json()
            document.getElementById('answer').textContent = data.answer
        }
        </script>
    `)
})

app.listen(3000, () => {
    console.log('🤖 שרת AI פועל על http://localhost:3000')
})
```

---

## 💡 Prompt Engineering — טיפים

```javascript
// ❌ Prompt גרוע — תשובה כללית
"ספר לי על JavaScript"

// ✅ Prompt טוב — מוגדר ומדויק
"הסבר מה זה JavaScript ב-3 נקודות קצרות, ברמת מתחיל, בעברית"

// ✅ System Prompt — מגדיר אופי/תפקיד
{
  role: 'system',
  content: 'אתה מורה לתכנות. ענה בעברית, בצורה פשוטה, עם דוגמאות קוד.'
}

// ✅ Few-Shot — דוגמאות למה אתה רוצה
"המר לעברית, שמור על הפורמט:
Input: Hello world
Output: שלום עולם

Input: Good morning
Output: ?"
```

---

## 📁 קבצי התרגול בשיעור זה

| קובץ | תיאור |
|------|-------|
| [openai_basic.js](openai_basic.js) | שאלה/תשובה עם GPT |
| [chatbot_terminal.js](chatbot_terminal.js) | צ'אטבוט בטרמינל |
| [gemini_basic.js](gemini_basic.js) | Gemini API |
| [ai_server.js](ai_server.js) | שרת Express + AI |
| [.env.example](.env.example) | תבנית משתני סביבה |

### הרצה:
```bash
npm install @google/generative-ai dotenv
cp .env.example .env
# ערוך .env והכנס את ה-API Key שלך
node gemini_basic.js
```

---

## 🔗 משאבים נוספים

- 📖 [OpenAI API Docs](https://platform.openai.com/docs)
- 📖 [Google AI Studio](https://aistudio.google.com)
- 📖 [Gemini API Docs](https://ai.google.dev/docs)
- 💰 [OpenAI Pricing](https://openai.com/pricing)
- 🆓 Gemini Flash — **חינמי!** (1500 req/day)
