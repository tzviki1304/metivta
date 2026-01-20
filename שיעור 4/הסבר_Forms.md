# HTML Forms — הסבר מקיף על אינפוט וטופסים

---

## מה זה Form (טופס)?

**טופס HTML** הוא דרך לאסוף נתונים מהמשתמש. כל טופס מכיל שדות שונים שהמשתמש יכול למלא ולשלוח.

דוגמה פשוטה:
```html
<form>
  <label>שם:</label>
  <input type="text" name="name">
  
  <button type="submit">שלח</button>
</form>
```

---

## מרכיבי טופס בסיסיים

### **1. התגית `<form>`** — המכל של הטופס
```html
<form action="server.php" method="POST">
  <!-- כל שדות הטופס יכנסו כאן -->
</form>
```

**Attributes חשובים:**
- `action` — לאן לשלוח את הנתונים (כתובת השרת)
- `method` — איך לשלוח (`GET` או `POST`)
  - `GET` — שליחת נתונים בכתובת (לא בטוח לסיסמאות!)
  - `POST` — שליחת נתונים מוסתרת (בטוח יותר)

---

## **2. סוגי Input שונים** 

### **Text Input** — שדה טקסט רגיל
```html
<input type="text" name="username" placeholder="הקלד שם משתמש">
```
- `type="text"` — טקסט רגיל
- `name` — שם השדה (משמש בשלחון הנתונים)
- `placeholder` — טקסט עזר שנעלם כשמתחילים להקליד

---

### **Email Input** — בדיקה אוטומטית של אימייל
```html
<input type="email" name="email" required>
```
- `type="email"` — HTML בודק שזה אימייל תקין
- `required` — שדה חובה (לא ניתן לשלוח ריק)

---

### **Password Input** — סיסמה מוסתרת
```html
<input type="password" name="password" minlength="8">
```
- `type="password"` — מסתיר את התו בנקודות
- `minlength="8"` — סיסמה מינימלית של 8 תווים

---

### **Number Input** — רק מספרים
```html
<input type="number" name="age" min="1" max="120">
```
- `type="number"` — קבלת מספרים בלבד
- `min="1"` — ערך מינימלי
- `max="120"` — ערך מקסימלי

---

### **Tel Input** — טלפון
```html
<input type="tel" name="phone" pattern="[0-9]{10}">
```
- `type="tel"` — שדה טלפון
- `pattern` — תבנית תקינה (10 ספרות)

---

### **Date Input** — בוחר תאריך
```html
<input type="date" name="birthday">
```
- `type="date"` — פותח בורר תאריך גרפי

---

### **Color Input** — בוחר צבע
```html
<input type="color" name="favorite_color">
```
- `type="color"` — בוחר צבע מהלוח

---

### **Checkbox** — תיבת סימון (בחירה מרובה)
```html
<input type="checkbox" name="agree" value="yes">
<label for="agree">אני מסכים לתנאים</label>
```
- יותר מחיבור אחד יכול להיות סימון

---

### **Radio Button** — כפתור בחירה (רק אחד)
```html
<label>
  <input type="radio" name="gender" value="male"> זכר
</label>
<label>
  <input type="radio" name="gender" value="female"> נקבה
</label>
```
- יכול לבחור **רק אחד** מהחיבורים בקבוצה (כי ה-name זהה)

---

### **Select / Dropdown** — תפריט נפתח
```html
<select name="country">
  <option value="">בחר ארץ</option>
  <option value="israel">ישראל</option>
  <option value="usa">ארה״ב</option>
  <option value="uk">בריטניה</option>
</select>
```
- `<select>` — המכל
- `<option>` — כל בחירה אפשרית

---

### **Textarea** — שדה טקסט ארוך
```html
<textarea name="message" rows="5" cols="40" placeholder="כתוב הודעה..."></textarea>
```
- `rows` — מספר שורות
- `cols` — מספר תווים בשורה

---

### **Submit Button** — כפתור שלח
```html
<button type="submit">שלח את הטופס</button>
```
- `type="submit"` — שולח את הטופס
- `type="reset"` — מחזיר את הטופס למצב התחלתי
- `type="button"` — כפתור רגיל (לא שולח)

---

## **3. Label** — תיוג של שדות

הטופס צריך **label** שמסביר כל שדה:
```html
<label for="name">שם מלא:</label>
<input type="text" id="name" name="name">
```

**למה זה חשוב?**
- ✅ משפר נגישות (accessibility)
- ✅ למעט בעת לחיצה על ה-label, ה-input מתמקד
- ✅ ברור למשתמש מה צריך להזין

---

## **4. Attributes שימושיים**

| Attribute | הסבר | דוגמה |
|-----------|------|--------|
| `name` | שם השדה בשליחה | `name="email"` |
| `id` | מזהה ייחודי | `id="username"` |
| `placeholder` | טקסט עזר | `placeholder="הקלד שם"` |
| `required` | שדה חובה | `<input required>` |
| `disabled` | שדה מבוטל | `<input disabled>` |
| `readonly` | לא ניתן לעדכן | `<input readonly>` |
| `maxlength` | מקסימום תווים | `maxlength="20"` |
| `minlength` | מינימום תווים | `minlength="8"` |
| `value` | ערך התחלתי | `value="ברירת מחדל"` |
| `pattern` | תבנית תקינה | `pattern="[A-Za-z]+"` |

---

## דוגמה מלאה של טופס בדיקה נתונים

```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>טופס הרשמה</title>
</head>
<body>
  <h1>טופס הרשמה</h1>
  
  <form action="submit.php" method="POST">
    
    <!-- שם מלא -->
    <div class="form-group">
      <label for="fullname">שם מלא:</label>
      <input 
        type="text" 
        id="fullname" 
        name="fullname" 
        required
        placeholder="הקלד שם מלא">
    </div>

    <!-- אימייל -->
    <div class="form-group">
      <label for="email">אימייל:</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required
        placeholder="example@gmail.com">
    </div>

    <!-- גיל -->
    <div class="form-group">
      <label for="age">גיל:</label>
      <input 
        type="number" 
        id="age" 
        name="age" 
        min="18" 
        max="120">
    </div>

    <!-- טלפון -->
    <div class="form-group">
      <label for="phone">טלפון:</label>
      <input 
        type="tel" 
        id="phone" 
        name="phone" 
        pattern="[0-9]{10}"
        placeholder="050-1234567">
    </div>

    <!-- תיקייה / סלקט -->
    <div class="form-group">
      <label for="country">ארץ:</label>
      <select id="country" name="country">
        <option value="">בחר ארץ</option>
        <option value="israel">ישראל</option>
        <option value="usa">ארה״ב</option>
        <option value="canada">קנדה</option>
      </select>
    </div>

    <!-- כניסה לרשימת תפוצה -->
    <div class="form-group">
      <input type="checkbox" id="subscribe" name="subscribe" value="yes">
      <label for="subscribe">הרשמני לרשימת התפוצה</label>
    </div>

    <!-- בחירת מין -->
    <div class="form-group">
      <label>מין:</label>
      <label>
        <input type="radio" name="gender" value="male"> זכר
      </label>
      <label>
        <input type="radio" name="gender" value="female"> נקבה
      </label>
    </div>

    <!-- הודעה -->
    <div class="form-group">
      <label for="message">הודעה:</label>
      <textarea 
        id="message" 
        name="message" 
        rows="5" 
        placeholder="כתוב הודעה כאן..."></textarea>
    </div>

    <!-- כפתורים -->
    <div class="form-group">
      <button type="submit">שלח הרשמה</button>
      <button type="reset">נקה את הטופס</button>
    </div>

  </form>
</body>
</html>
```

---

## עיצוב טופסים עם CSS

```css
/* עיצוב קבוצת טופס */
.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* עיצוב label */
label {
  font-weight: bold;
  color: #333;
}

/* עיצוב input ו-textarea */
input,
textarea,
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  transition: border-color 200ms, box-shadow 200ms;
}

/* כשלוחצים על שדה (focus) */
input:focus,
textarea:focus,
select:focus {
  outline: none;                    /* הסר outline ברירת מחדל */
  border-color: #001f5b;            /* גבול כחול */
  box-shadow: 0 0 8px rgba(0, 31, 91, 0.3);  /* צל כחול עדין */
}

/* עיצוב כפתור */
button {
  padding: 12px 24px;
  background: #001f5b;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 200ms;
  margin-right: 10px;
}

button:hover {
  background: #000d2e;
}

button:active {
  transform: scale(0.98);
}

/* עיצוב checkbox ו-radio */
input[type="checkbox"],
input[type="radio"] {
  margin-right: 8px;
}
```

---

## **טיפים למעבדה:**

### **תרגול 1: טופס פשוט**
- בנו טופס עם 3 שדות: שם, אימייל, הודעה
- עצבו אותו עם CSS
- בדקו שהשדות חובה עובדים

### **תרגול 2: טופס בחירה מורכב**
- הוסיפו radio buttons (בחירת אחד בלבד)
- הוסיפו checkboxes (בחירה מרובה)
- בדקו שהם עובדים

### **תרגול 3: Validation ויזואלית**
- שנו את צבע ה-border כשלוחצים (`:focus`)
- הוסיפו צל כשמלאים שדה
- עשו את הכפתור גדול יותר ושינוי בעת :hover

### **תרגול 4: Responsive Form**
- טופס שמתאים לטלפון וקומפיוטר
- השתמשו ב-Flexbox כדי לסדר שדות

### **תרגול 5: Styled Dropdown**
- עצבו select ללא ברירת מחדל
- בדקו איך זה נראה בדפדפנים שונים

---

## **כללים חשובים:**

1. ✅ **כל input צריך label** — לשם הבהירות והנגישות
2. ✅ **השתמשו ב-name תקין** — זה משמש בשליחה לשרת
3. ✅ **בדקו את required** — אל תתשכחו לסמן שדות חובה
4. ✅ **עצבו עם CSS** — טופס יפה הוא חוויה טובה יותר
5. ✅ **בדקו ב-mobile** — טופסים צריכים להיות קל להשתמש בטלפון

---

## **דוגמה שלנו בשיעור:**

אם תסתכלו בקובץ `דוגמה2_תפריט.html`, תוכלו לראות:
```html
<form class="contact-form">
  <input type="text" class="form-input" placeholder="שם מלא" required>
  <input type="email" class="form-input" placeholder="דוא״ל" required>
  <textarea class="form-input" rows="5" placeholder="הודעתך..."></textarea>
  <button type="submit" class="btn btn-primary">שלח הודעה</button>
</form>
```

וב-`דוגמה2_תפריט.css`:
```css
.form-input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  transition: border-color 200ms, box-shadow 200ms;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 8px rgba(0, 31, 91, 0.3);
}
```

זה בדיוק מה שלמדנו כאן! 🎯

---

## סיכום

**Forms בHTML** הם הדרך היחידה לאסוף נתונים מהמשתמש. כל סוג `input` משמש תכלית שונה, וניתן לעצב אותם עם CSS כדי להפוך אותם ליפים וקל להשתמש.

זה הבסיס לאתרים אינטראקטיביים! 🚀

