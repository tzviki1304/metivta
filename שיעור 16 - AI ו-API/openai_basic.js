require('dotenv').config()
const OpenAI = require('openai')

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function askGPT(question) {
    console.log(`\n❓ שאלה: ${question}`)
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { role: 'system', content: 'אתה עוזר מתכנת ידידותי שעונה בעברית.' },
            { role: 'user', content: question }
        ],
        max_tokens: 500
    })
    const answer = response.choices[0].message.content
    console.log(`\n💬 GPT: ${answer}`)
    return answer
}

async function main() {
    await askGPT('הסבר מה זה Express.js ב-3 נקודות')
    await askGPT('מה ההבדל בין SQL ל-NoSQL?')
}

main().catch(err => {
    console.error('❌ שגיאה:', err.message)
    console.log('ודא שהגדרת OPENAI_API_KEY ב-.env')
})
