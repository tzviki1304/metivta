require('dotenv').config()
const OpenAI = require('openai')
const readline = require('readline')

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const conversationHistory = [
    {
        role: 'system',
        content: 'אתה עוזר מתכנת מומחה. ענה בעברית, בצורה קצרה וברורה, עם דוגמאות קוד כשצריך.'
    }
]

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

async function chat(userMessage) {
    conversationHistory.push({ role: 'user', content: userMessage })
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: conversationHistory,
        max_tokens: 1000
    })
    const assistantMessage = response.choices[0].message.content
    conversationHistory.push({ role: 'assistant', content: assistantMessage })
    return assistantMessage
}

function loop() {
    rl.question('\n👤 אתה: ', async (input) => {
        if (!input.trim() || input === 'יציאה' || input.toLowerCase() === 'exit') {
            console.log('להתראות! 👋')
            rl.close()
            return
        }
        try {
            const response = await chat(input)
            console.log(`\n🤖 AI: ${response}`)
        } catch (err) {
            console.error('❌ שגיאה:', err.message)
        }
        loop()
    })
}

console.log('🤖 צ\'אטבוט AI | כתוב "יציאה" לסיום\n')
loop()
