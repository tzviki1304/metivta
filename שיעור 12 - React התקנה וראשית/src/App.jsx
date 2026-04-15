// App.jsx — קומפוננטה ראשית
// קובץ זה מחליף את src/App.jsx בפרויקט Vite שלך

import { useState } from "react"
import Counter from "./Counter"
import UserCard from "./UserCard"

function App() {
  return (
    <div style={{ fontFamily: "Arial", direction: "rtl", maxWidth: 700, margin: "30px auto", padding: 20 }}>
      <h1 style={{ color: "#61dafb", textAlign: "center" }}>⚛️ ברוכים הבאים ל-React!</h1>

      {/* קומפוננטת מונה */}
      <Counter />

      {/* קומפוננטות כרטיסי משתמש עם props */}
      <h2>כרטיסי משתמשים:</h2>
      <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
        <UserCard name="ישראל כהן" age={25} city="תל אביב" emoji="👨" />
        <UserCard name="שרה לוי" age={32} city="ירושלים" emoji="👩" />
        <UserCard name="דן ברון" age={19} city="חיפה" emoji="🧑" />
      </div>
    </div>
  )
}

export default App
