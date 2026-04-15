// UserCard.jsx — קומפוננטה שמקבלת props
// props = נתונים שמועברים מבחוץ לקומפוננטה

function UserCard({ name, age, city, emoji }) {
  // props מפוצלים בסוגריים מסולסלים — זה Destructuring!
  return (
    <div style={{
      background: "white",
      borderRadius: 12,
      padding: 20,
      minWidth: 180,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      {/* אמוג'י גדול */}
      <div style={{ fontSize: 50 }}>{emoji}</div>

      {/* שם */}
      <h3 style={{ margin: "8px 0 4px", color: "#333" }}>{name}</h3>

      {/* גיל */}
      <p style={{ margin: "4px 0", color: "#666", fontSize: 14 }}>
        🎂 גיל: {age}
      </p>

      {/* עיר */}
      <p style={{ margin: "4px 0", color: "#666", fontSize: 14 }}>
        📍 {city}
      </p>

      {/* בז' גיל */}
      <div style={{
        marginTop: 10,
        background: age >= 18 ? "#e8f5e9" : "#fff3cd",
        color: age >= 18 ? "#2e7d32" : "#f57f17",
        padding: "4px 10px",
        borderRadius: 20,
        fontSize: 13,
        display: "inline-block"
      }}>
        {age >= 18 ? "✅ בוגר" : "🔞 קטין"}
      </div>
    </div>
  )
}

export default UserCard
