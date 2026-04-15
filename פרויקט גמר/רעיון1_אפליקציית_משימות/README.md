# 💡 רעיון 1: אפליקציית ניהול משימות חכמה

## 🎯 המטרה
לבנות אפליקציית Task Manager שנראית ועובדת כמו אפליקציה אמיתית — עם שמירה ב-LocalStorage.

---

## 📁 קבצים שתיצור
```
task-manager/
├── index.html
├── style.css
└── app.js
```

---

## 📋 משימות לביצוע — שלב אחר שלב

### ✅ שלב 1: מבנה HTML (שיעור אחד)
- [ ] צור `index.html` עם מבנה בסיסי
- [ ] Header עם כותרת ושדה הוספת משימה
- [ ] אזור הצגת המשימות (`<div id="taskList">`)
- [ ] אזור סינון (כפתורי כולם / פעיל / הושלם)
- [ ] קשר את `style.css` ו-`app.js`

### ✅ שלב 2: עיצוב CSS
- [ ] עיצוב כללי: רקע כהה, גופן, RTL
- [ ] עיצוב שדה הקלט + כפתור הוספה
- [ ] עיצוב כרטיסיית משימה (רקע, פינות עגולות, צל)
- [ ] סמן "הושלם" — צ'קבוקס מעוצב
- [ ] צבעים שונים לפי עדיפות (אדום/צהוב/ירוק)
- [ ] אנימציית כניסה לכרטיסיה (fadeIn)

### ✅ שלב 3: JavaScript — מבנה נתונים
- [ ] הגדר מערך `tasks = []`
- [ ] כל משימה היא אובייקט: `{ id, text, done, priority, category, createdAt }`
- [ ] פונקציה `addTask(text, priority, category)`
- [ ] פונקציה `deleteTask(id)`
- [ ] פונקציה `toggleTask(id)` — הפיכת done/לא done
- [ ] פונקציה `render()` — מרנדר את כל המשימות ל-DOM

### ✅ שלב 4: חיבור ל-DOM
- [ ] לחיצה על "הוסף" → קרא ל-`addTask()`
- [ ] Enter בשדה הקלט → קרא ל-`addTask()`
- [ ] לחיצה על כרטיסיה → `toggleTask(id)`
- [ ] לחיצה על X → `deleteTask(id)`
- [ ] כפתורי סינון → `setFilter()` + `render()`

### ✅ שלב 5: LocalStorage
- [ ] פונקציה `save()` — `localStorage.setItem("tasks", JSON.stringify(tasks))`
- [ ] פונקציה `load()` — `JSON.parse(localStorage.getItem("tasks"))`
- [ ] קרא ל-`load()` בפתיחת הדף
- [ ] קרא ל-`save()` בכל שינוי

### ⭐ בונוס א: עדיפויות
- [ ] הוסף select לבחירת עדיפות: גבוה / בינוני / נמוך
- [ ] הצג תג צבעוני על כל משימה לפי עדיפות
- [ ] מיין לפי עדיפות (גבוה למעלה)

### ⭐ בונוס ב: תאריך יעד
- [ ] הוסף `<input type="date">` לתאריך יעד
- [ ] אם התאריך עבר — הצג הודעת "באיחור! ⚠️" בצבע אדום
- [ ] `new Date() > dueDate` לבדיקה

### ⭐ בונוס ג: סטטיסטיקות
- [ ] הצג בראש הדף: כמה סה"כ, כמה הושלמו, כמה נשאר
- [ ] Progress bar שמתמלא לפי % הושלמו

### ⭐ בונוס ד: Dark Mode
- [ ] כפתור 🌙/☀️ שמחליף class על ה-body
- [ ] שמור את ה-mode ב-localStorage

---

## 💡 רמזים מפתח

### מבנה אובייקט משימה:
```javascript
{
  id: Date.now(),          // מזהה ייחודי
  text: "ללמוד React",
  done: false,
  priority: "high",        // "high" | "medium" | "low"
  category: "לימודים",
  createdAt: new Date().toISOString()
}
```

### רנדור משימה ל-DOM:
```javascript
function renderTask(task) {
  let card = document.createElement("div")
  card.className = `task-card priority-${task.priority} ${task.done ? "done" : ""}`
  card.dataset.id = task.id

  // שים לב: textContent בטוח, innerHTML עלול להיות מסוכן עם קלט משתמש
  let textEl = document.createElement("span")
  textEl.textContent = task.text
  card.appendChild(textEl)

  // ... שאר האלמנטים
  return card
}
```

### שמירה וטעינה:
```javascript
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function load() {
  let saved = localStorage.getItem("tasks")
  if (saved) tasks = JSON.parse(saved)
}
```

---

## 🎨 מקורות עיצוב
- [Coolors.co](https://coolors.co) — פלטות צבעים
- [Google Fonts](https://fonts.google.com) — גופנים: Heebo לעברית
- [CSS Box Shadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)
