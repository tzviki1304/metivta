# שיעור 6: פונקציות ואירועים מתקדמים ⚙️

ברוכים הבאים לשיעור השישי!

---

## 📁 קבצי התרגול

### 🎬 דוגמאות להתנסות:
1. **[דוגמה1_מחשבון_פשוט.html](דוגמה1_מחשבון_פשוט.html)** - מחשבון חיבור פשוט
2. **[דוגמה2_המרת_מטבע.html](דוגמה2_המרת_מטבע.html)** - המרה משקלים לדולרים
3. **[דוגמה3_addEventListener.html](דוגמה3_addEventListener.html)** - דרך נוספת לטפל באירועים
4. **[דוגמה4_מחשבון_מלא.html](דוגמה4_מחשבון_מלא.html)** - מחשבון עם 4 פעולות

### ✏️ תרגילים לפתרון:
- **[תרגיל1_המרת_טמפרטורה.html](תרגיל1_המרת_טמפרטורה.html)** - המרה בין צלזיוס לפרנהייט
- **[תרגיל2_חישוב_ממוצע.html](תרגיל2_חישוב_ממוצע.html)** - חישוב ממוצע ציונים
- **[תרגיל3_שינוי_צבעים.html](תרגיל3_שינוי_צבעים.html)** - שינוי צבע רקע לפי בחירה

### 🏠 משימת בית:
- **[משימת_בית_BMI.html](משימת_בית_BMI.html)** - מחשבון BMI (מדד מסת גוף)

---

## 🎯 מה נלמד היום?

✅ פונקציות עם **return** - החזרת ערכים  
✅ פונקציות עם **מספר פרמטרים**  
✅ **addEventListener** - דרך מתקדמת לטפל באירועים  
✅ קריאת מספרים מ-input עם **Number()**  
✅ בניית **מחשבון פשוט**  
✅ בניית אפליקציות אינטראקטיביות מעשיות  

---

## 🔑 מושגי מפתח

### return - החזרת ערך
```javascript
function add(a, b) {
    return a + b  // מחזיר את התוצאה!
}

let result = add(5, 3)
console.log(result)  // 8
```

### Number() - המרה למספר
```javascript
let input = "42"
let num = Number(input)  // הופך ל-42 (מספר!)
```

### addEventListener
```javascript
let button = document.getElementById('btn')
button.addEventListener('click', function() {
    console.log('נלחץ!')
})
```

---

## 🚀 איך להתחיל?

### צעד 1: פתח דוגמה
לחיצה כפולה על אחד מקבצי הדוגמה

### צעד 2: נסה את הפיצ'רים
שחק עם הכפתורים והקלטים וראה מה קורה

### צעד 3: קרא את הקוד
פתח את הקובץ ב-VS Code וראה איך זה עובד

### צעד 4: תרגל!
פתח את התרגילים ונסה לפתור אותם בעצמך

---

## 💡 טיפים חשובים

🔍 **קלט הוא תמיד טקסט!**
- כשקוראים מ-input, זה תמיד מחרוזת (string)
- צריך להמיר למספר: `Number(input.value)`

🎯 **return vs console.log**
- `console.log()` - רק מדפיס
- `return` - מחזיר ערך שאפשר להשתמש בו!

⚡ **addEventListener vs onclick**
- שניהם עובדים, אבל addEventListener יותר מתקדם
- addEventListener מאפשר להוסיף כמה פעולות לאותו כפתור

---

## 🎓 למידע נוסף

- [MDN - Functions](https://developer.mozilla.org/he/docs/Web/JavaScript/Guide/Functions)
- [MDN - Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info - Functions](https://javascript.info/function-basics)

---

**בהצלחה והנאה!** 🌟  
זה השיעור שבו אנחנו מתחילים לבנות דברים באמת מעניינים!
