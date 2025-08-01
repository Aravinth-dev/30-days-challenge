# Day 1 — DM Delay Button ⏱️

A simple messaging interface with a delay timer before sending. This gives users the option to cancel a message before it's sent — simulating an "Undo Send" feature found in modern messaging apps.

---

## 🔍 Features

- **Message Timer**: Delay messages by a set number of seconds before sending.
- **Cancel Option**: Cancel the message before the timer completes.
- **Live Preview**: (Optional) See the message before it's sent.
- **Dynamic Delay**: Choose from preset delays (10s, 30s, 60s).
- **Notification**: Toast message confirms when a message is successfully sent.

---

## 🧠 Concepts & Skills Demonstrated

- Timer-based logic using `setTimeout` and `clearTimeout`
- State management for message, delay time, and timer references
- Conditional UI rendering for "Send" vs "Cancel"
- Input handling and form validation
- User feedback with toast notifications
- Component-based structure for scalability and clarity
- Clean and modern UI implementation with utility-first CSS

---

## 📂 Project Structure

```
src/
├── components/
│ └── MessageInput.tsx
├── pages/
│ └── Home.tsx
├── App.tsx
└── main.tsx
```

## 🚀 How to Run

```bash
npm install
npm run dev
```

##💡 What I Learned
- How to implement delay logic that simulates real-world messaging platforms.
- Handling timers efficiently and cleaning them up to prevent memory leaks.
- Enhancing user experience with cancelable actions and immediate feedback.
- Organizing code into reusable and clean components.

## 📸 Preview
| 
