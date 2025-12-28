# משימת תלמידים — לבניית האתר (HTML + CSS)

הוראות כלליות:
- המטרה היא ליצור ולשפר אתר קטן עם כמה דפים וללמוד להפריד בין HTML ו‑CSS.
- כל הקוד כאן הוא דוגמאות מוכנות — העתיקו וערכו בקבצים של התיקייה `תלמידים`.

---

1) דפי הפרויקט (דוגמאות מלאות — העתיקו לתוך קבצים):

index.html (דף הבית)
```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>חדשות הישיבה — דף הבית</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1>חדשות ישיבת נר התורה</h1>
    <nav class="main-nav">
      <a href="index.html">דף הבית</a>
      <a href="about.html">אודות</a>
      <a href="lessons.html">שיעורים</a>
      <a href="gallery.html">גלריה</a>
      <a href="contact.html">צור קשר</a>
    </nav>
  </header>

  <main class="container">
    <section class="hero card">
      <h2>חג חנוכה שמח לכל הבחורים!</h2>
      <p>ברוכים הבאים לאתר החדשות של הישיבה — כאן תמצאו עדכונים על אירועים, שיעורים ופעילויות.</p>
      <figure>
        <img src="https://via.placeholder.com/900x360/003366/ffffff?text=הדלקת+נר+בישיבה" alt="הדלקת נרות בישיבה">
        <figcaption>טקס הדלקת נרות השנתי</figcaption>
      </figure>
    </section>

    <section class="news-list">
      <article class="card">
        <h3>הרב חזר מ-770</h3>
        <time datetime="2025-12-01">כ"ט כסלו תשפ"ו</time>
        <p>שמחים על חזרתו של ראש הישיבה וברכתו לכל הבחורים.</p>
      </article>

      <article class="card">
        <h3>תחרות לימוד</h3>
        <p>עומדת להיערך תחרות לימוד עם פרסים יקרים — רישום במשרד.</p>
      </article>

      <article class="card box-demo">
        <h3>הסבר תיבת דוגמה (Box Model)</h3>
        <p>זיהו את ה-padding, ה-border וה-margin שסביב התיבה הזו.</p>
      </article>
    </section>
  </main>

  <footer class="site-footer">
    <p>© 2025 ישיבת נר התורה</p>
  </footer>
</body>
</html>
```

about.html (דף אודות)
```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>אודות — ישיבת נר התורה</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1>אודות הישיבה</h1>
    <nav class="main-nav">
      <a href="index.html">דף הבית</a>
      <a href="about.html">אודות</a>
      <a href="lessons.html">שיעורים</a>
      <a href="gallery.html">גלריה</a>
      <a href="contact.html">צור קשר</a>
    </nav>
  </header>

  <main class="container">
    <section class="card">
      <h2>מי אנחנו?</h2>
      <p>ישיבת נר התורה היא קהילה לומדת שמחנכת בחיי התורה, שיעורים יומיים ופעילויות מגוונות.</p>
      <h3>פעילויות מרכזיות</h3>
      <ul>
        <li>שיעורי בוקר וערב</li>
        <li>מרכזי לימוד וימי עיון</li>
        <li>ערבי תרבות וחגיגות</li>
      </ul>
    </section>
  </main>

  <footer class="site-footer">
    <p>© 2025 ישיבת נר התורה</p>
  </footer>
</body>
</html>
```

contact.html (טופס צור קשר)
```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>צור קשר — ישיבת נר התורה</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1>צור קשר</h1>
    <nav class="main-nav">
      <a href="index.html">דף הבית</a>
      <a href="about.html">אודות</a>
      <a href="lessons.html">שיעורים</a>
      <a href="gallery.html">גלריה</a>
      <a href="contact.html">צור קשר</a>
    </nav>
  </header>

  <main class="container">
    <section class="card">
      <h2>שלחו הודעה</h2>
      <form action="#" method="post" class="contact-form">
        <label>שם מלא<br><input type="text" name="name" required></label>
        <label>אימייל<br><input type="email" name="email" required></label>
        <label>הודעה<br><textarea name="message" rows="5" required></textarea></label>
        <button type="submit">שלח</button>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <p>© 2025 ישיבת נר התורה</p>
  </footer>
</body>
</html>
```

---

2) דפי תרגיל חדשים — העתיקו כקבצי דוגמה לתיקייה (lessons.html ו־gallery.html)

lessons.html (דוגמה למבנה שיעורים)
```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>שיעורים — ישיבת נר התורה</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1>לוח שיעורים</h1>
    <nav class="main-nav">
      <a href="index.html">דף הבית</a>
      <a href="about.html">אודות</a>
      <a href="lessons.html">שיעורים</a>
      <a href="gallery.html">גלריה</a>
      <a href="contact.html">צור קשר</a>
    </nav>
  </header>

  <main class="container">
    <section class="card">
      <h2>שיעורים קבועים</h2>
      <ul class="lessons-list">
        <li>
          <strong>שיעור בוקר</strong> — 08:00 | תיאור קצר על נושאי הלימוד.
        </li>
        <li>
          <strong>שיעור ג'נט</strong> — 10:30 | שיעור מעמיק עם דיונים.
        </li>
        <li>
          <strong>שיעור ערב</strong> — 19:30 | לימוד ממוקד לקראת היום הבא.
        </li>
      </ul>
    </section>
  </main>

  <footer class="site-footer">
    <p>© 2025 ישיבת נר התורה</p>
  </footer>
</body>
</html>
```

gallery.html (דוגמה לרשת תמונות)
```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>גלריה — ישיבת נר התורה</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <h1>גלריה</h1>
    <nav class="main-nav">
      <a href="index.html">דף הבית</a>
      <a href="about.html">אודות</a>
      <a href="lessons.html">שיעורים</a>
      <a href="gallery.html">גלריה</a>
      <a href="contact.html">צור קשר</a>
    </nav>
  </header>

  <main class="container">
    <section class="card gallery-grid">
      <figure>
        <img src="https://via.placeholder.com/400x300/003366/ffffff?text=אירוע+א" alt="אירוע א">
        <figcaption>אירוע א - תיאור קצר</figcaption>
      </figure>
      <figure>
        <img src="https://via.placeholder.com/400x300/005580/ffffff?text=אירוע+ב" alt="אירוע ב">
        <figcaption>אירוע ב - תיאור קצר</figcaption>
      </figure>
      <figure>
        <img src="https://via.placeholder.com/400x300/003366/ffffff?text=אירוע+ג" alt="אירוע ג">
        <figcaption>אירוע ג - תיאור קצר</figcaption>
      </figure>
    </section>
  </main>

  <footer class="site-footer">
    <p>© 2025 ישיבת נר התורה</p>
  </footer>
</body>
</html>
```

---

3) קובץ CSS משותף — דוגמא מסודרת לשים ב־css/style.css (להדפסה)

להלן דוגמת CSS מסודרת וברורה — הקוד ממויין, מוסברים משתנים/חוקים ושימושים חשובים.

```css
/* ==========================
   Basic variables & reset
   ========================== */
:root {
  --accent: #001f5b;        /* צבע ראשי */
  --accent-light: #a8d8ff;  /* צבע רקע/קישורים */
  --card-bg: #ffffff;       /* צבע רקע כרטיס */
}

/* כל האלמנטים יתחשבו בגבולות בתוך המידות */
* { box-sizing: border-box; }

/* ==========================
   Global layout
   ========================== */
html, body { height: 100%; }
body {
  font-family: Arial, "David", sans-serif;
  background: linear-gradient(180deg, #e6f2ff, #ffffff);
  color: #111;
  margin: 0;
  padding: 20px;
  direction: rtl; /* ממשק בעברית */
}

/* ==========================
   Header / Navigation
   ========================== */
.site-header {
  background: var(--accent);
  color: #fff;
  padding: 18px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 6px 14px rgba(0,0,0,0.15);
}
.main-nav { margin-top: 12px; }
.main-nav a {
  color: var(--accent-light);
  text-decoration: none;
  margin: 0 10px;
  font-weight: 700;
}
.main-nav a:hover { text-decoration: underline; }

/* ==========================
   Containers / Cards
   ========================== */
.container { max-width: 1000px; margin: 20px auto; }
.card {
  background: var(--card-bg);
  padding: 18px;
  border-radius: 10px;
  margin: 12px 0;
  box-shadow: 0 6px 12px rgba(0,0,0,0.06);
}
.hero img { width: 100%; height: auto; border-radius: 8px; }
.news-list { display: flex; flex-direction: column; gap: 12px; }

/* ==========================
   Box model demo
   ========================== */
.box-demo {
  padding: 22px;                 /* רווח פנימי */
  border: 3px solid var(--accent); /* גבול חיצוני מסביב */
  margin: 18px 0;                /* רווח חיצוני בין אלמנטים */
  background: linear-gradient(90deg,#f6fbff,#ffffff);
}

/* ==========================
   Forms
   ========================== */
.contact-form { display: flex; flex-direction: column; gap: 12px; }
.contact-form input,
.contact-form textarea {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.contact-form button {
  background: var(--accent);
  color: white;
  padding: 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.contact-form button:hover { opacity: 0.95; }

/* ==========================
   Lessons & Gallery
   ========================== */
.lessons-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.lessons-list li { padding: 10px; border-radius: 8px; border: 1px dashed rgba(0,0,0,0.08); }
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
.gallery-grid figure { margin: 0; }
.gallery-grid img { width: 100%; height: auto; border-radius: 6px; }
.gallery-grid figcaption { text-align: center; padding-top: 6px; color: #333; }

/* ==========================
   Responsive adjustments
   ========================== */
@media (min-width: 720px) {
  .news-list { flex-direction: row; }
  .news-list .card { flex: 1; }
}

/* הסוף - ניתן להוסיף עיצובים נוספים כאן */
```

---

4) הסבר קצר ומודפס על Box Model (להדפסה בכיתה)

מה זה Box Model?
- כל אלמנט ב־HTML נתפס כ"קופסה" עם מספר שכבות: Content → Padding → Border → Margin.

הגדרות בסיסיות שמומלץ שהתלמידים יכירו:
- padding — מרווח פנימי בין התוכן לגבול. משפיע על הגודל המוחשי בתוך הגבול.
- border — קו מסביב לאלמנט. ניתן לשלוט בעובי, סוג וצבע.
- margin — רווח חיצוני שמפריד בין קופסאות/אלמנטים.

דוגמא חזותית (עריכה והדגמה בכיתה):
```css
.card{
  padding:20px;     /* רווח פנימי */
  border:2px solid #001f5b; /* גבול */
  margin-bottom:16px; /* רווח חיצוני */
}
```

תרגיל מהיר להדפסה:
- שנו את ה-padding ב־`.box-demo` ל־8px, 20px, 40px — תעדו את השינוי.
- שנו את ה-border ל-1px solid red, 4px dashed green — מה קורה? צלמו/הציגו.
- שנו את ה-margin כדי לשנות מיקום האלמנטים סביב התיבה.

---

5) קישורים בין הדפים והפרדת CSS (לסיכום, להדפסה ישירה):
- בקבצי HTML: בתוך ה־`<head>` יש להוסיף את השורה הזו כדי לייבא CSS חיצוני:
```html
<link rel="stylesheet" href="css/style.css">
```
- שימוש ב‑relative paths: אם ה‑HTML נמצא ברמת תיקייה עליונה ל־css, השתמשו ב‑`css/style.css`.
- שמירה על הפרדה: כל החוקים (styles) נשמרים בקובץ CSS חיצוני — זה מקל על עדכונים ושיתוף בין דפים.

---

הערה לסיום: הדפיסו את הקובץ הזה וחלקו לתלמידים — כל הדוגמאות מוכנות להעתקה ישירה לקבצים בכיתה. בהצלחה!

---

6) רשימת 25 תכונות CSS בסיסיות — הסבר קצר ודוגמאות קוד (מוכן להדפסה)

להלן 25 תכונות בסיסיות שכל תלמיד צריך להכיר, עם משפט תיאור וקוד קצר כדוגמה.

1. display — קובע איך מתנהג האלמנט על הדף (block, inline, flex, grid):
```css
.item{display:flex}
```

2. width / height — גובה ורוחב אלמנטים:
```css
.box{width:200px;height:150px}
```

3. margin — רווח חיצוני סביב האלמנט:
```css
.box{margin:20px}
```

4. padding — רווח פנימי בתוך האלמנט:
```css
.box{padding:12px}
```

5. border — גבול מסביב לאלמנט (עובי, סגנון, צבע):
```css
.box{border:2px solid #001f5b}
```

6. box-sizing — כיצד לחשב רוחב/גובה (content-box | border-box):
```css
*{box-sizing:border-box}
```

7. background / background-color / background-image — רקע לאלמנט:
```css
.hero{background:linear-gradient(180deg,#e6f2ff,#fff)}
```

8. color — צבע הטקסט:
```css
p{color:#333}
```

9. font-family — סוג הגופן:
```css
body{font-family:Arial, 'David', sans-serif}
```

10. font-size — גודל הטקסט:
```css
h1{font-size:2rem}
```

11. font-weight — עובי הגופן (normal, bold, 700):
```css
strong{font-weight:700}
```

12. line-height — גובה שורה, משפר קריאות טקסט:
```css
p{line-height:1.6}
```

13. text-align — יישור טקסט (left, right, center):
```css
header{text-align:center}
```

14. text-decoration — קו תחתון/קו עליון (נפוץ עבור קישורים):
```css
a{text-decoration:none}
```

15. list-style — עיצוב רשימות (none, disc, decimal):
```css
ul{list-style:disc;padding-left:20px}
```

16. position — מיקום אלמנט (static, relative, absolute, fixed, sticky):
```css
.badge{position:absolute;top:10px;right:10px}
```

17. top/right/bottom/left — מכלולי מיקום עובד עם position מותאם:
```css
.box{position:relative;left:10px}
```

18. display:flex — מבנה גמיש לסידור רכיבים בתוך קונטיינר:
```css
.row{display:flex;gap:10px}
```

19. justify-content — מפעיל יישור באיקס בציר הראשי ב‑flex:
```css
.row{display:flex;justify-content:space-between}
```

20. align-items — יישור צירי ב־flex (align items vertically):
```css
.row{align-items:center}
```

21. flex-direction — כיוון פריסת האלמנטים (row | column):
```css
.col{display:flex;flex-direction:column}
```

22. gap — ריווח בין פריטי רשת או flex:
```css
.grid{display:grid;gap:12px}
```

23. grid-template-columns — עיצוב עמודות ברשת (grid):
```css
.grid{display:grid;grid-template-columns:1fr 1fr}
```

24. overflow — מה קורה כאשר התוכן גדול מהקונטיינר (hidden, scroll, auto):
```css
.scroll-box{overflow:auto;height:200px}
```

25. transition — אנימציה חלקה לשינוי תכונות (hover effect):
```css
.btn{transition:background 200ms ease}
.btn:hover{background:#004080}
```

---

הערה להדפסה בכיתה: כל דוגמה קצרה כאן מוכנה להעתקה ל־CSS של התלמידים. בקשו מהם לשחק עם הערכים, לשנות ולתעד מה קורה — זה החלק המהנה והמעשי.

