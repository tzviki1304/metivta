# שיעור 12: React — הכרות, Node.js ו-NPM ⚛️

ברוכים הבאים לעולם ה-React!

---

## 🎯 מה זה React?

React היא **ספריית JavaScript** שפותחה על ידי **Meta (פייסבוק)**.
היא מאפשרת לבנות ממשקי משתמש (UI) מ**קומפוננטות** — בלוקים קטנים שאפשר לשלב יחד.

**למה React?**
- 🌍 הכי פופולרי בעולם (LinkedIn, Airbnb, Netflix, Instagram משתמשים בה)
- 🔄 מעדכן את הדף אוטומטית כשהמידע משתנה
- 📦 ספריית עצומה של תוספות
- 💼 דרישה מספר 1 בקורות חיים של Front-End

---

## 📋 שלב 1: התקנת Node.js

React צריכה **Node.js** כדי לרוץ בסביבת פיתוח.

### מה זה Node.js?
- מנוע JavaScript שרץ מחוץ לדפדפן (על המחשב שלך)
- מגיע עם **npm** — מנהל חבילות (כמו App Store לקוד)

### הורדה והתקנה:
1. גש ל-**[https://nodejs.org](https://nodejs.org)**
2. לחץ על **"LTS"** (הגרסה היציבה — מומלצת)
3. הורד והתקן (Next → Next → Install)
4. **בדיקה** — פתח Terminal/CMD וכתוב:

```bash
node --version    # אמור להציג: v20.x.x
npm --version     # אמור להציג: 10.x.x
```

---

## 📋 שלב 2: יצירת פרויקט React חדש

יש שתי דרכים פופולריות:

### אפשרות A — Vite (מומלץ! מהיר יותר)
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### אפשרות B — Create React App (הקלאסי)
```bash
npx create-react-app my-app
cd my-app
npm start
```

לאחר הרצה — פתח דפדפן על **http://localhost:5173** (Vite) או **:3000** (CRA)

---

## 📋 שלב 3: מבנה הפרויקט

```
my-app/
├── node_modules/     ← כל הספריות (לא לגעת!)
├── public/           ← קבצים סטטיים
├── src/              ← הקוד שלך כאן!
│   ├── App.jsx       ← הקומפוננטה הראשית
│   ├── main.jsx      ← נקודת הכניסה
│   └── App.css       ← עיצוב
├── index.html        ← הדף הבסיסי
├── package.json      ← הגדרות הפרויקט
└── vite.config.js    ← הגדרות Vite
```

---

## 📋 שלב 4: מושגי יסוד ב-React

### קומפוננטה = פונקציה שמחזירה JSX
```jsx
function Greeting() {
    return <h1>שלום עולם! 👋</h1>
}
```

### JSX — HTML בתוך JavaScript
```jsx
function UserCard({ name, age }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>גיל: {age}</p>
        </div>
    )
}
```

### useState — מצב שמשתנה
```jsx
import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)  // [ערך, פונקציית-שינוי]

    return (
        <div>
            <p>ספירה: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
```

### props — העברת נתונים לקומפוננטה
```jsx
// הגדרה
function Button({ text, color }) {
    return <button style={{ background: color }}>{text}</button>
}

// שימוש
<Button text="לחץ כאן" color="blue" />
<Button text="מחק" color="red" />
```

---

## 📋 פקודות npm חשובות

```bash
npm install           # התקן את כל הספריות מ-package.json
npm install axios     # הוסף ספרייה חדשה (לדוגמה axios)
npm run dev           # הפעל שרת פיתוח (Vite)
npm start             # הפעל שרת פיתוח (CRA)
npm run build         # בנה גרסת production
```

---

## 📁 קבצי ה‍תרגול בשיעור זה

| קובץ | תיאור |
|------|-------|
| [App.jsx](src/App.jsx) | קומפוננטה ראשית |
| [Counter.jsx](src/Counter.jsx) | דוגמת useState |
| [UserCard.jsx](src/UserCard.jsx) | דוגמת props |
| [TodoApp.jsx](src/TodoApp.jsx) | TODO List ב-React |

> **הוראות:** צור פרויקט Vite, החלף את הקבצים ב-`src/` בקבצים שמהשיעור.

---

## 🔗 משאבים נוספים

- 📖 [React Docs (עברית)](https://he.react.dev)
- 🎥 [React Tutorial — freeCodeCamp](https://www.youtube.com/watch?v=bMknfKXIFA8)
- 🎮 [React Playground — CodeSandbox](https://codesandbox.io/s/new)
