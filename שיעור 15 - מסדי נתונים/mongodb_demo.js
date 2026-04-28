require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/school'

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ מחובר ל-MongoDB!'))
    .catch(err => {
        console.error('❌ שגיאת חיבור — ודא שה-MONGO_URI ב-.env נכון')
        console.error(err.message)
        process.exit(1)
    })

// Schema — מבנה המסמך
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    grade: { type: Number, min: 1, max: 12 },
    email: { type: String, unique: true },
    subjects: [String],
    createdAt: { type: Date, default: Date.now }
})

const Student = mongoose.model('Student', studentSchema)

async function main() {
    // נקה מסמכים קיימים (לצורך הדגמה)
    await Student.deleteMany({})
    console.log('🧹 נקה מסמכים ישנים\n')

    // ─── CREATE ───
    const students = await Student.insertMany([
        { name: 'ישראל כהן', grade: 10, email: 'israel@school.com', subjects: ['מתמטיקה', 'JavaScript'] },
        { name: 'משה לוי', grade: 11, email: 'moshe@school.com', subjects: ['פיזיקה', 'Python'] },
        { name: 'שרה ברגמן', grade: 10, email: 'sara@school.com', subjects: ['כימיה', 'React'] }
    ])
    console.log('✅ נוצרו תלמידים:')
    students.forEach(s => console.log(`  - ${s.name} (כיתה ${s.grade})`))

    // ─── READ ALL ───
    const all = await Student.find().select('name grade -_id')
    console.log('\n👥 כל התלמידים:')
    console.table(all.map(s => ({ name: s.name, grade: s.grade })))

    // ─── FILTER ───
    const tenthGrade = await Student.find({ grade: 10 })
    console.log(`\n📚 כיתה י (${tenthGrade.length} תלמידים):`)
    tenthGrade.forEach(s => console.log(`  ${s.name} — ${s.subjects.join(', ')}`))

    // ─── UPDATE ───
    await Student.updateOne(
        { email: 'israel@school.com' },
        { $set: { grade: 11 }, $push: { subjects: 'Node.js' } }
    )
    const updated = await Student.findOne({ email: 'israel@school.com' })
    console.log(`\n✏️ עדכון ישראל: כיתה ${updated.grade}, מקצועות: ${updated.subjects.join(', ')}`)

    // ─── DELETE ───
    await Student.deleteOne({ email: 'moshe@school.com' })
    const remaining = await Student.countDocuments()
    console.log(`\n🗑️ נמחק משה לוי. נותרו: ${remaining} תלמידים`)

    mongoose.connection.close()
    console.log('\n✅ חיבור נסגר.')
}

main()
