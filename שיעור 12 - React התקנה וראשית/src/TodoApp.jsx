// TodoApp.jsx — TODO List ב-React
// דוגמה מלאה: useState, map, filter, events

import { useState } from "react"

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "ללמוד React", done: false },
    { id: 2, text: "לבנות פרויקט ראשון", done: false }
  ])
  const [input, setInput] = useState("")
  const [filter, setFilter] = useState("all")

  // הוסף משימה
  function addTodo() {
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }])
    setInput("")
  }

  // סמן כהושלם / לא הושלם
  function toggleTodo(id) {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ))
  }

  // מחק משימה
  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id))
  }

  // סינון לפי מצב
  const filtered = todos.filter(t => {
    if (filter === "active") return !t.done
    if (filter === "done") return t.done
    return true
  })

  const activeCount = todos.filter(t => !t.done).length

  return (
    <div style={{
      maxWidth: 500,
      margin: "30px auto",
      background: "#1a1a2e",
      borderRadius: 15,
      padding: 25,
      color: "white",
      fontFamily: "Arial",
      direction: "rtl"
    }}>
      <h2 style={{ textAlign: "center", color: "#e94560" }}>✅ TODO List ב-React</h2>

      {/* שדה קלט */}
      <div style={{ display: "flex", gap: 8, marginBottom: 15 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTodo()}
          placeholder="משימה חדשה..."
          style={{
            flex: 1, padding: "10px 14px", borderRadius: 8,
            border: "2px solid #0f3460", background: "#0f3460",
            color: "white", fontSize: 15
          }}
        />
        <button
          onClick={addTodo}
          style={{ background: "#e94560", color: "white", border: "none",
                   padding: "10px 18px", borderRadius: 8, cursor: "pointer", fontSize: 18 }}
        >
          ➕
        </button>
      </div>

      {/* פילטרים */}
      <div style={{ display: "flex", gap: 8, marginBottom: 15 }}>
        {["all", "active", "done"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              background: filter === f ? "#e94560" : "#0f3460",
              color: filter === f ? "white" : "#aaa",
              border: "none", padding: "6px 14px",
              borderRadius: 20, cursor: "pointer", fontSize: 13
            }}
          >
            {f === "all" ? "הכל" : f === "active" ? "פעיל" : "הושלם"}
          </button>
        ))}
      </div>

      {/* רשימת משימות */}
      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#555" }}>אין משימות 🎉</p>
      )}

      {filtered.map(todo => (
        <div
          key={todo.id}
          style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "#0f3460", borderRadius: 8, padding: 12, marginBottom: 8,
            opacity: todo.done ? 0.6 : 1
          }}
        >
          {/* צ'קבוקס */}
          <div
            onClick={() => toggleTodo(todo.id)}
            style={{
              width: 22, height: 22, borderRadius: "50%",
              border: "2px solid #e94560",
              background: todo.done ? "#e94560" : "transparent",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0
            }}
          >
            {todo.done && "✓"}
          </div>

          {/* טקסט */}
          <span style={{
            flex: 1, fontSize: 15,
            textDecoration: todo.done ? "line-through" : "none",
            color: todo.done ? "#888" : "white"
          }}>
            {todo.text}
          </span>

          {/* מחיקה */}
          <button
            onClick={() => deleteTodo(todo.id)}
            style={{ background: "none", border: "none", color: "#555",
                     cursor: "pointer", fontSize: 18 }}
          >
            ✕
          </button>
        </div>
      ))}

      {/* תחתית */}
      <div style={{ textAlign: "center", color: "#666", fontSize: 13, marginTop: 10 }}>
        {activeCount} משימות נשארו
      </div>
    </div>
  )
}

export default TodoApp
