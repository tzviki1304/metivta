// ===== Task Manager — app.js =====
// TODO: מלא את הפונקציות החסרות!

// ===== מצב האפליקציה =====
let tasks = []
let currentFilter = "all"

// ===== אתחול =====
document.addEventListener("DOMContentLoaded", () => {
  load()
  render()
  setupEvents()
})

// ===== אירועים =====
function setupEvents() {
  document.getElementById("addBtn").addEventListener("click", addTask)

  document.getElementById("taskInput").addEventListener("keydown", e => {
    if (e.key === "Enter") addTask()
  })

  document.getElementById("clearDoneBtn").addEventListener("click", () => {
    tasks = tasks.filter(t => !t.done)
    save()
    render()
  })

  document.getElementById("darkModeBtn").addEventListener("click", () => {
    document.body.classList.toggle("light")
    let btn = document.getElementById("darkModeBtn")
    btn.textContent = document.body.classList.contains("light") ? "🌙 Dark Mode" : "☀️ Light Mode"
  })

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"))
      btn.classList.add("active")
      currentFilter = btn.dataset.filter
      render()
    })
  })
}

// ===== פונקציות עיקריות =====

function addTask() {
  let input = document.getElementById("taskInput")
  let text = input.value.trim()
  if (!text) {
    input.focus()
    return
  }

  let priority = document.getElementById("prioritySelect").value
  let category = document.getElementById("categorySelect").value

  // TODO: הוסף אובייקט ל-tasks
  tasks.push({
    id: Date.now(),
    text,
    done: false,
    priority,
    category,
    createdAt: new Date().toLocaleDateString("he-IL") + " " + new Date().toLocaleTimeString("he-IL")
  })

  input.value = ""
  input.focus()
  save()
  render()
}

function toggleTask(id) {
  // TODO: מצא את המשימה לפי id ושנה done
  let task = tasks.find(t => t.id === id)
  if (task) task.done = !task.done
  save()
  render()
}

function deleteTask(id) {
  // TODO: השתמש ב-filter
  tasks = tasks.filter(t => t.id !== id)
  save()
  render()
}

// ===== רנדור =====

function render() {
  let filtered = tasks.filter(t => {
    if (currentFilter === "active") return !t.done
    if (currentFilter === "done") return t.done
    if (currentFilter === "high") return t.priority === "high"
    return true
  })

  let list = document.getElementById("taskList")
  list.innerHTML = ""

  if (filtered.length === 0) {
    let empty = document.createElement("div")
    empty.className = "empty-state"
    empty.textContent = currentFilter === "all" ? "אין משימות 🎉 הוסף אחת!" : "אין משימות בסינון זה"
    list.appendChild(empty)
    updateStats()
    return
  }

  // TODO: מיון — דחוף למעלה
  let sorted = [...filtered].sort((a, b) => {
    let priorityOrder = { high: 0, medium: 1, low: 2 }
    return priorityOrder[a.priority] - priorityOrder[b.priority]
  })

  sorted.forEach(task => {
    let card = document.createElement("div")
    card.className = `task-card priority-${task.priority}${task.done ? " done" : ""}`

    // צ'קבוקס
    let cb = document.createElement("div")
    cb.className = "task-checkbox" + (task.done ? " checked" : "")
    cb.textContent = task.done ? "✓" : ""
    cb.addEventListener("click", () => toggleTask(task.id))

    // תוכן
    let content = document.createElement("div")
    content.style.flex = "1"

    let textEl = document.createElement("div")
    textEl.className = "task-text"
    textEl.textContent = task.text   // ← textContent בטוח!

    let meta = document.createElement("div")
    meta.className = "task-meta"
    meta.textContent = `${task.category} | ${task.createdAt}`

    content.appendChild(textEl)
    content.appendChild(meta)

    // מחיקה
    let del = document.createElement("button")
    del.className = "task-del"
    del.textContent = "✕"
    del.addEventListener("click", () => deleteTask(task.id))

    card.append(cb, content, del)
    list.appendChild(card)
  })

  updateStats()
}

function updateStats() {
  let total = tasks.length
  let done = tasks.filter(t => t.done).length
  let active = total - done
  let percent = total > 0 ? Math.round((done / total) * 100) : 0

  document.getElementById("totalCount").textContent = `${total} משימות`
  document.getElementById("doneCount").textContent = `${done} הושלמו`
  document.getElementById("activeCount").textContent = `${active} נשאר`
  document.getElementById("progressFill").style.width = percent + "%"
}

// ===== LocalStorage =====

function save() {
  localStorage.setItem("tasks_v2", JSON.stringify(tasks))
}

function load() {
  let saved = localStorage.getItem("tasks_v2")
  if (saved) {
    try {
      tasks = JSON.parse(saved)
    } catch {
      tasks = []
    }
  }
}
