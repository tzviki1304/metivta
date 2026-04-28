require('dotenv').config()
const { GoogleGenerativeAI } = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

async function askGemini(prompt) {
    console.log(`\n❓ שאלה: ${prompt}`)
    const result = await model.generateContent(prompt)
    const answer = result.response.text()
    console.log(`\n🤖 Gemini: ${answer}`)
    return answer
}

async function main() {
    // שאלות שונות
    await askGemini('הסבר מה זה Node.js ב-3 משפטים קצרים בעברית')
    await askGemini('כתוב פונקציה JavaScript שמחשבת פיבונאצ\'י')
}

main().catch(err => {
    console.error('❌ שגיאה:', err.message)
    console.log('ודא שהגדרת GEMINI_API_KEY ב-.env')
})
