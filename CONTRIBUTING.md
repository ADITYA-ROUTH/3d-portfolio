# 🤝 Contributing to Aditya Routh's 3D Portfolio

First off — thank you for taking the time to contribute! 🎉

This project is open to suggestions, bug reports, and pull requests from the community. Whether you're fixing a typo, improving performance, or proposing a bold new feature — all contributions are valued.

Please take a moment to read through these guidelines before you start.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Branch Naming Convention](#branch-naming-convention)

---

## 📜 Code of Conduct

By participating in this project, you agree to keep discussions respectful, constructive, and inclusive. Please be kind to all contributors.

---

## 💡 How Can I Contribute?

### 🐛 Reporting Bugs

If you encounter a bug, please open an [Issue](https://github.com/ADITYA-ROUTH/3d-portfolio/issues/new?template=bug_report.md) and include:

- A **clear and descriptive title**
- Steps to **reproduce** the issue
- What you **expected** to happen
- What **actually** happened
- Screenshots or screen recordings (if applicable)
- Browser, OS, and Node.js version

### ✨ Suggesting Features

Feature requests are welcome! Open an [Issue](https://github.com/ADITYA-ROUTH/3d-portfolio/issues/new?template=feature_request.md) with:

- A **clear title** describing the feature
- The **problem it solves**
- A proposed **implementation approach** (optional but appreciated)

### 🔧 Submitting Pull Requests

1. **Fork** the repository
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/3d-portfolio.git
   cd 3d-portfolio
   ```
3. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and ensure they work locally
5. **Lint your code:**
   ```bash
   npm run lint
   ```
6. **Commit** your changes following the [commit guidelines](#commit-message-guidelines)
7. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Open a Pull Request** against the `main` branch of this repository

> ⚠️ Please link the relevant issue in your PR description (e.g., `Closes #42`)

---

## 🛠 Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/ADITYA-ROUTH/3d-portfolio.git
cd 3d-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Then add your OPENROUTER_API_KEY to .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you're good to go!

---

## 📐 Coding Standards

- **Language:** TypeScript — strict typing required. Avoid `any`.
- **Style:** Follow the existing ESLint config (`eslint.config.mjs`)
- **Formatting:** Use consistent indentation (2 spaces)
- **Components:** Keep components small and single-responsibility
- **3D Components:** Live in `components/canvas/` — ensure WebGL cleanup in `useEffect` return functions
- **Performance:** Use `dynamic()` imports for heavy 3D components; avoid blocking the main thread
- **Accessibility:** Ensure non-3D content is accessible (proper ARIA labels, keyboard navigation)

---

## 💬 Commit Message Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <short description>

[optional body]

[optional footer — e.g., Closes #42]
```

**Types:**

| Type | When to Use |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes only |
| `style` | Formatting, missing semicolons (no code change) |
| `refactor` | Code refactoring (no feature, no bug fix) |
| `perf` | Performance improvements |
| `test` | Adding or updating tests |
| `chore` | Tooling, dependencies, CI changes |

**Examples:**
```
feat(chatbot): add typing indicator animation
fix(canvas): resolve WebGL memory leak on unmount
docs(readme): update installation instructions
perf(particles): switch to instanced mesh for 60fps
```

---

## 🌿 Branch Naming Convention

```
feature/short-description
fix/short-description
docs/short-description
refactor/short-description
chore/short-description
```

**Examples:**
```
feature/skills-galaxy-interaction
fix/mobile-webgl-crash
docs/improve-setup-guide
```

---

Thank you again for contributing! Every improvement — big or small — makes this portfolio better. 🚀
