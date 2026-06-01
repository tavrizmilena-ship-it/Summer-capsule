# 🌤 Summer Capsule 2026 — Милена

Твой личный летний дневник. Данные хранятся в Firebase — надёжно всё лето.

---

## Шаг 1 — Firebase (5 мин)

1. Зайди на **https://console.firebase.google.com**
2. **Add project** → назови `summer-capsule-2026` → Create
3. В левом меню: **Build → Realtime Database**
   - Create Database → Europe-west1 → **Start in test mode** → Enable
4. Нажми ⚙️ **Project settings** (шестерёнка) → прокрути до **Your apps**
   - Нажми **</>** → назови `summer-web` → Register
   - Скопируй объект `firebaseConfig`

---

## Шаг 2 — Вставь конфиг

Открой файл `src/firebase.js`, замени все `"ВСТАВЬ_СЮДА"` на значения из своего конфига.

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "summer-capsule-2026.firebaseapp.com",
  databaseURL: "https://summer-capsule-2026-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "summer-capsule-2026",
  storageBucket: "summer-capsule-2026.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};
```

---

## Шаг 3 — Деплой на Vercel (3 мин)

1. Зайди на **https://github.com** → New repository → `summer-capsule`
2. Загрузи все файлы этой папки
3. Зайди на **https://vercel.com** → Sign up with GitHub
4. **Add New Project** → выбери `summer-capsule` → **Deploy**
5. Через ~1 мин получишь ссылку: **`summer-capsule-milena.vercel.app`** 🎉

---

## Что сохраняется навсегда

- ✅ Все фотографии и воспоминания
- ✅ Весь дневник
- ✅ Прогресс чеклиста
- ✅ Настроение по дням
- ✅ Письмо себе (запечатанное до 1 сентября)
- ✅ Дата обновляется автоматически каждый день
- ✅ Счётчик дня лета считается сам

---

## Структура файлов

```
summer-capsule/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── firebase.js   ← сюда вставляешь конфиг
    └── App.jsx       ← весь интерфейс
```
