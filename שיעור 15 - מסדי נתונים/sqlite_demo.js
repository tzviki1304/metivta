const Database = require('better-sqlite3')

// יצירת / פתיחת מסד הנתונים
const db = new Database('school.db')

// יצירת טבלה
db.exec(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        grade INTEGER,
        email TEXT UNIQUE
    )
`)

console.log('✅ מסד נתונים פתוח!\n')

// ─── INSERT ───
const insert = db.prepare(`
    INSERT OR IGNORE INTO students (name, grade, email) VALUES (?, ?, ?)
`)

insert.run('ישראל כהן', 10, 'israel@school.com')
insert.run('משה לוי', 11, 'moshe@school.com')
insert.run('דוד ישראלי', 9, 'david@school.com')
insert.run('שרה ברגמן', 10, 'sara@school.com')

console.log('✅ תלמידים נוספו!\n')

// ─── SELECT ALL ───
const all = db.prepare('SELECT * FROM students').all()
console.log('👥 כל התלמידים:')
console.table(all)

// ─── SELECT WHERE ───
const byGrade = db.prepare('SELECT * FROM students WHERE grade = ?')
console.log('\n📚 תלמידי כיתה י (10):')
console.table(byGrade.all(10))

// ─── UPDATE ───
db.prepare('UPDATE students SET grade = ? WHERE name = ?').run(11, 'ישראל כהן')
console.log('✏️ ישראל כהן עלה לכיתה יא!\n')

// ─── מדפיס אחרי עדכון ───
console.log('👥 לאחר עדכון:')
console.table(db.prepare('SELECT * FROM students').all())

// ─── DELETE ───
db.prepare('DELETE FROM students WHERE name = ?').run('דוד ישראלי')
console.log('\n🗑️ דוד ישראלי נמחק')

// ─── COUNT ───
const count = db.prepare('SELECT COUNT(*) as total FROM students').get()
console.log(`\n📊 סה"כ תלמידים: ${count.total}`)

db.close()
console.log('\n✅ מסד הנתונים נסגר.')
