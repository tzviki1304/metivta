// Counter.jsx — קומפוננטת מונה עם useState
import { useState } from "react"

function Counter() {
  // useState מחזיר: [הערך הנוכחי, פונקציה לשינוי]
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const increment = () => setCount(count + step)
  const decrement = () => setCount(count - step)
  const reset = () => setCount(0)

  // צבע תלוי בערך
  const color = count > 0 ? "#4caf50" : count < 0 ? "#f44336" : "#888"

  return (
    <div style={{
      background: "#1e1e2e",
      borderRadius: 15,
      padding: 25,
      marginBottom: 25,
      color: "white",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#61dafb" }}>🔢 מונה</h2>

      {/* הערך */}
      <div style={{ fontSize: 64, fontWeight: "bold", color, margin: "10px 0" }}>
        {count}
      </div>

      {/* כפתורים */}
      <div style={{ marginBottom: 15 }}>
        <button onClick={decrement} style={btnStyle("#f44336")}>−</button>
        <button onClick={reset} style={btnStyle("#888")}>↺</button>
        <button onClick={increment} style={btnStyle("#4caf50")}>+</button>
      </div>

      {/* צעד */}
      <div>
        <label style={{ fontSize: 14, color: "#aaa" }}>צעד: </label>
        <input
          type="number"
          value={step}
          min={1}
          onChange={e => setStep(Number(e.target.value))}
          style={{ width: 60, padding: 5, borderRadius: 6, border: "none",
                   background: "#2a2a3e", color: "white", textAlign: "center" }}
        />
      </div>
    </div>
  )
}

function btnStyle(bg) {
  return {
    background: bg,
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: 10,
    fontSize: 20,
    cursor: "pointer",
    margin: "0 8px"
  }
}

export default Counter
