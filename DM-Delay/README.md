# Day 1 — DM Delay Button ⏱️

A simple messaging interface with a delay timer before sending. This gives users the option to cancel a message before it's sent — simulating an "Undo Send" feature found in modern messaging apps.

---

## 📸 Preview
<a href="https://dmdelay.netlify.app">
> ![DM Delay Screenshot](./public/Screenshot%20(50).png)
</a>

---


## 🔍 Features

🕒 Message Timer
Send messages with a delay timer, giving users a moment to reconsider or cancel.

❌ Cancel Option
Cancel the message at any time before the delay finishes — simulating a real “Undo Send” experience.

⏳ Custom Delay Input
Users can enter their own delay (e.g., 5s, 15s, 45s) instead of choosing fixed options — giving full control.

✅ Send Notification
A toast notification confirms when the message is successfully sent after the delay.

---

## 🧠 Concepts & Skills Demonstrated

- Timer-based logic using `setTimeout` and `clearTimeout`
- State management for message, delay time, and timer references
- Conditional UI rendering for "Send" vs "Cancel"
- Input handling and form validation
- Component-based structure for scalability and clarity
- Clean and modern UI implementation with utility-first CSS
---

## 🧠 Tech Stack Covered:
✅ React + Vite (TypeScript)
✅ Tailwind CSS
✅ ShadCN UI Components
✅ react toastify

---

## 📂 Project Structure

```
src/
├── components/
│ └── ui/
│ |    └── buttons.tsx
│ |    └── input.tsx
│ |    └── label.tsx
│ |    └── textarea.tsx
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



## 🙌 Let's Connect

If you liked this project or have feedback, feel free to connect with me:

- 💼 [LinkedIn](https://www.linkedin.com/in/aravinth-dev/)

---

## © 2025 | Built with focus, logic, and continuous learning.
