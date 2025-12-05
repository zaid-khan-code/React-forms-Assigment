# React Vite Single-File Auth System

A single-file authentication system built with **React** and **Vite**, offering user registration, login, logout, real-time form validation, and persistent localStorage—all in one component.

---

## Overview

This project delivers a complete authentication workflow within a *single React component file* (`Auth.jsx`). It supports user signup, login, logout, auto session management, form validation, and persistent data storage via `localStorage`.

---

## Features

- **User Registration:** Create new accounts with username, email, and password.
- **User Login:** Authenticate existing users.
- **Session Management:** Keeps users logged in across page refreshes.
- **Form Validation:** Real-time checks with instant user feedback.
- **Persistent Storage:** All user data saved with `localStorage`.
- **Responsive Design:** Mobile-friendly UI using Tailwind CSS.
- **Minimalistic:** Single file under 200 lines of code.

---

## Quick Start

```bash
# 1. Create a new Vite React project
npm create vite@latest auth-project --template react

# 2. Navigate to project directory
cd auth-project

# 3. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Implement Auth.jsx
#   - Create 'Auth.jsx' in the 'src/' directory
#   - Copy the component code provided with this repo

# 5. Import Auth.jsx in your App.jsx:

// App.jsx
import AuthApp from './Auth.jsx'

function App() {
  return <AuthApp />
}

export default App
```

---

## Component Structure

`Auth.jsx` provides:
- **State Management:** For users and authentication.
- **Form Handling:** For both login and signup.
- **localStorage Integration:** For session & user data persistence.
- **Validation Logic:** To enforce signup/login rules.
- **UI Components:** Styled with Tailwind CSS.

### State Management

```js
users: []           // List of registered users
currentUser: null   // Currently logged-in user
isLoginMode: true   // Toggle login/signup views
formData: {}        // Input values for forms
message: ""         // Display user feedback
```

### localStorage Keys

- `users`: Full list of registered users
- `currentUser`: Persisted active session user

*Data persists across browser sessions and page refreshes.*

---

## Validation Rules

- **All fields required**
- **Unique email addresses**
- **Unique usernames**
- **Password ≥ 6 characters**
- **Password confirmation matching**

---

## Styling

Built with **Tailwind CSS** featuring:
- Gradient backgrounds
- Card-based, modern layout
- Responsive/mobile-friendly design
- Clearly color-coded feedback messages

---

## Usage Example

```jsx
// App.jsx
import AuthApp from './Auth.jsx'

function App() {
  return <AuthApp />
}

export default App
```

---

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers with localStorage support

---

## Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Security Note

> ⚠️ **Important:** This project is for demonstration purposes only. In production:
> - Add backend-side validation
> - Store only hashed passwords (never in plain text)
> - Always use HTTPS
> - Implement rate limiting
> - Use proper session/token management

---

## File Size

- All functionality in a **single file**, under 200 lines  
  *(easy to read, integrate, and customize)*

---

Enjoy building secure auth for your next React project!