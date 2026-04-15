# 💡 רעיון 2: אתר פורטפוליו אישי

## 🎯 המטרה
לבנות אתר אישי שמציג **אותך** ואת הפרויקטים שלך — אתר שאפשר לשלוח למעסיקים!

---

## 📁 קבצים שתיצור
```
portfolio/
├── index.html      ← דף ראשי (about + skills)
├── projects.html   ← גלריית פרויקטים
├── contact.html    ← טופס יצירת קשר
└── style.css       ← עיצוב משותף לכל הדפים
```

---

## 📋 משימות לביצוע — שלב אחר שלב

### ✅ שלב 1: תכנון (30 דקות)
- [ ] כתוב 3-5 משפטים "אודות עצמך" בעברית/אנגלית
- [ ] אסוף קישורים לפרויקטים שבנית בקורס (שיעור 2, 4, 5, 6, 7)
- [ ] בחר 2-3 צבעים לפלטה (ראה [coolors.co](https://coolors.co))
- [ ] בחר גופן מ-Google Fonts

### ✅ שלב 2: index.html — עמוד ראשי
- [ ] Navigation bar עם קישורים לכל הדפים
- [ ] Hero Section: שמך + תפקיד + כפתור "ראה פרויקטים"
- [ ] About Section: קצת עלייך עם תמונה (אפשר emoji)
- [ ] Skills Section: כרטיסיות עם כל מה שלמדת (HTML, CSS, JS, React)
- [ ] Footer עם copyright

### ✅ שלב 3: projects.html — גלריית פרויקטים
- [ ] Grid של כרטיסיות (3 בשורה)
- [ ] כל כרטיסיה: תמונה/צבע + שם הפרויקט + תיאור קצר + כפתור "הצג"
- [ ] לפחות 5 פרויקטים מהקורס
- [ ] Hover effect על הכרטיסיות (scale, shadow)

### ✅ שלב 4: contact.html — טופס קשר
- [ ] שדות: שם, אימייל, נושא, הודעה
- [ ] אימות: כל שדה חובה, אימייל תקין
- [ ] הודעת הצלחה אחרי שליחה
- [ ] קישורים ל-GitHub / LinkedIn / Email

### ✅ שלב 5: עיצוב CSS מלא
- [ ] צבעים עקביים בכל הדפים (`--primary-color` CSS variable)
- [ ] Responsive: עובד בפלאפון (`@media`)
- [ ] Navigation — active state לדף הנוכחי
- [ ] אנימציות: fade-in לסקשנים

### ⭐ בונוס א: Skills Bar
```css
.skill-bar {
  height: 8px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  background: linear-gradient(to right, #667eea, #764ba2);
  border-radius: 10px;
  transition: width 1s ease;
}
```
- [ ] צור progress bar לכל מיומנות (HTML: 90%, CSS: 80%, JS: 70%)
- [ ] אנימציה שמתמלאת כשגוללים

### ⭐ בונוס ב: Dark/Light Mode
- [ ] כפתור 🌙 / ☀️ ב-navigation
- [ ] CSS variables לצבעים — `--bg`, `--text`, `--card`
- [ ] `body.dark` class שמחליף את כל הצבעים
- [ ] שמור העדפה ב-localStorage

### ⭐ בונוס ג: Scroll Animations
```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible")
  })
})
document.querySelectorAll(".animate").forEach(el => observer.observe(el))
```

---

## 💡 רמזים מפתח

### CSS Variables — עקביות בצבעים:
```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --bg: #0f0f1a;
  --text: #ffffff;
  --card: #1a1a2e;
}

.dark {
  --bg: #f5f5f5;
  --text: #333333;
}
```

### Responsive Grid:
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### Navigation Active Page:
```javascript
// סמן את הדף הנוכחי בתפריט
let page = window.location.pathname.split("/").pop()
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === page) link.classList.add("active")
})
```

---

## 🎨 השראה לעיצוב
- [HTML Portfolio Templates — Free CSS](https://www.free-css.com/template-categories/portfolio)
- [GitHub Portfolio Examples](https://github.com/topics/portfolio-website)
