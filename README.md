# 🧱 Dev Stack — Build Your Ideal Development Stack

A React web app for exploring frontend, backend, database, and tooling
technologies, and assembling them into your own personal "stack." Browse
technology cards, add the ones you like with a single click, and manage your
selections live from a sidebar — complete with toast notifications for every
action.

Live Site: _add your deployed link here_
Repository: _add your GitHub link here_

---

## 🛠️ Technology Used

- React (Vite) — component-based UI
- Tailwind CSS — utility-first styling and the shared brand gradient theme
- react-toastify — toast notifications for add / remove actions
- JSON — local `technologies.json` file as the single source of data

---

## ✨ Features

1. Interactive Stack Builder** — Browse 17 technologies across categories
   like Frontend, Backend, Database, and DevOps, and add any of them to your
   stack with one click. Duplicate adds are blocked with a warning toast, and
   an added card's button locks to "✓ Added to Stack."
2. Live "Your Stack" Sidebar** — Watch your selected technologies update in
   real time. Remove one item at a time or clear everything at once with
   "Remove All" — each action confirmed with its own toast.
3. Fully Responsive, Polished UI** — A sticky navbar with a mobile
   hamburger menu, a gradient hero section, and a technology grid that
   reflows from 3 columns down to 1 on smaller screens, all styled with a
   single shared brand gradient (orange → pink → violet) defined once and
   reused everywhere.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
npm run preview
```

---

## 🧠 React Concept Questions

1. What is JSX, and why is it used in React?**
JSX lets me write HTML-like markup right inside my JavaScript files. It's
used because it makes components easy to read and write — I can see what a
component displays and the logic behind it in one place, instead of
building the page piece by piece with plain JavaScript.

2. What is the difference between props and state?**
Props are values passed *into* a component from its parent, and the
component itself can't change them. State is data a component owns and
manages on its own, and it can change over time. In this project, `tech` is
a prop passed into `TechnologyCard`, while `stack` is state that lives
inside `App` and updates whenever I add or remove something.

3. What does the `useState` hook do, and where did you use it in this
project?**
`useState` gives a component a piece of memory that survives between
re-renders, and re-renders the component automatically when that value
changes. I used it in `App.jsx` for `technologies` (the full list), `loading`
(whether data is still being fetched), and `stack` (the technologies the
user has selected), and in `Navbar.jsx` for whether the mobile menu is open.

4. What does the `useEffect` hook do, and why did you need it to load the
JSON data?**
`useEffect` runs code after the component renders, which is the right place
for side effects like fetching data. I needed it because loading the
technology JSON should only happen once, right when the app first loads —
not every time the component re-renders. I used an empty dependency array
`[]` so it only runs a single time.

5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` helps React tell items in a list apart so it knows exactly which
one changed, got added, or got removed. Without a unique key, React can get
confused about which DOM element matches which piece of data, which can
cause bugs or unnecessary re-renders. I used each technology's `id` as the
key.

6. What is conditional rendering? Show one place you used it (example:
the empty stack message).**
Conditional rendering means showing different content depending on a
condition, instead of always showing the same thing. In `StackSidebar.jsx`,
I check if `count === 0` — if the stack is empty, it shows "Your stack is
empty," and if it isn't, it shows the actual list of selected technologies
instead.

7. How do you pass data from a parent component to a child component, and
how does a child send something back to the parent?**
A parent passes data down as props — for example, `App` passes `tech` and
`isAdded` down to `TechnologyCard`. For a child to send something back up,
the parent passes a function down as a prop instead (like `onAdd`), and the
child calls that function when something happens (like a button click). The
function itself runs in the parent, so it can update the parent's state
based on what the child reported.
