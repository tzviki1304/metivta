# שיעור 11: DOM מתקדם + LocalStorage 🌐

ברוכים הבאים לשיעור האחד-עשר!
זה השיעור האחרון ב-JavaScript טהור — אחרי זה נעבור ל-React!

---

## 📁 קבצי התרגול

### 🎬 דוגמאות להתנסות:
1. **[דוגמה1_createElement.html](דוגמה1_createElement.html)** - יצירת אלמנטים דינמית
2. **[דוגמה2_todo_list.html](דוגמה2_todo_list.html)** - TODO List שלם
3. **[דוגמה3_LocalStorage.html](דוגמה3_LocalStorage.html)** - שמירת נתונים בדפדפן

### ✏️ תרגילים לפתרון:
- **[תרגיל1_גלריה_דינמית.html](תרגיל1_גלריה_דינמית.html)** - גלריה עם חיפוש וסינון
- **[תרגיל2_חיפוש_חי.html](תרגיל2_חיפוש_חי.html)** - חיפוש שמסנן בזמן אמת

### 🏠 משימת בית:
- **[משימת_בית_יומן_אישי.html](משימת_בית_יומן_אישי.html)** - יומן שנשמר ב-LocalStorage

---

## 🎯 מה נלמד היום?

✅ **createElement + appendChild** — יצירת אלמנטים ב-JS  
✅ **innerHTML** — הכנסת HTML דינמי  
✅ **classList** — הוספה/הסרת class  
✅ **querySelector / querySelectorAll** — בחירת אלמנטים  
✅ **LocalStorage** — שמירת נתונים שנשארים בדפדפן  
✅ **JSON.stringify / JSON.parse** — שמירת אובייקטים  

---

## 🔑 מושגי מפתח

### יצירת אלמנטים ב-JS
```javascript
// שיטה 1 — innerHTML (קל אבל פחות בטוח)
container.innerHTML = `<p>שלום ${name}!</p>`

// שיטה 2 — createElement (מומלץ)
let p = document.createElement("p")
p.textContent = `שלום ${name}!`
container.appendChild(p)
```

### classList — שינוי classes
```javascript
element.classList.add("active")      // הוסף class
element.classList.remove("hidden")   // הסר class
element.classList.toggle("dark")     // הפוך (הוסף/הסר)
element.classList.contains("active") // האם קיים?
```

### querySelector
```javascript
document.querySelector("#myId")          // לפי id
document.querySelector(".myClass")       // לפי class
document.querySelectorAll(".card")       // כל .card → NodeList
```

### LocalStorage — זיכרון הדפדפן
```javascript
// שמור
localStorage.setItem("username", "ישראל")

// קרא
let name = localStorage.getItem("username")  // "ישראל"

// מחק
localStorage.removeItem("username")

// שמור אובייקט (צריך JSON!)
let data = { name: "ישראל", age: 25 }
localStorage.setItem("user", JSON.stringify(data))

// קרא אובייקט
let user = JSON.parse(localStorage.getItem("user"))
```

---

## ⚠️ אבטחה — innerHTML

> **לעולם אל תשתמש ב-innerHTML עם קלט של משתמש ישירות!**
> זה פותח דלת ל-XSS (Cross-Site Scripting).
>
> ✅ **בטוח:** `element.textContent = userInput`  
> ❌ **מסוכן:** `element.innerHTML = userInput`

---

## 🔗 קישור לשיעור הבא
לאחר שיעור זה — אנו עוברים לעולם ה-React!
כל מה שלמדנו (JS, מערכים, אובייקטים, DOM) הוא הבסיס ל-React.
