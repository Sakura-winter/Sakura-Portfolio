<div align="center">

# 🖥️ Retro Terminal Portfolio

**Building the foundation of the digital world, one line of code at a time.**

[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

*A nostalgic terminal-inspired portfolio showcasing backend engineering, cloud infrastructure, and DevOps expertise.*

[🌐 Live Demo](https://sakura-winter.github.io/Sakura-Portfolio/) • [📧 Contact](mailto:sumitkum1819@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/sumit-alexithymia) • [🐙 GitHub](https://github.com/Sakura-winter)

</div>

---

## ✨ Features

- 🎮 **Retro Terminal UI** - Immersive CRT-style interface with scanlines and pixel fonts
- 🎲 **Dynamic Taglines** - 20+ rotating hero taglines that refresh on each visit
- 📦 **Project Showcase** - Interactive project cards with tech stack visualization
- 🎯 **Skills Matrix** - Visual skill levels with retro progress bars
- 📄 **Resume Download** - One-click PDF resume generation/download
- 🎨 **Responsive Design** - Fully responsive across all devices
- ⚡ **Fast & Lightweight** - Optimized with Vite for blazing-fast performance

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Build Tool:** Vite 6
- **PDF Generation:** jsPDF
- **Styling:** Custom CSS with retro CRT effects
- **Fonts:** Press Start 2P (pixel font), Fira Code (monospace)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sakura-winter/Sakura-Portfolio.git
   cd Sakura-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🚀 Deployment

### GitHub Pages (Automatic)

This portfolio is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages:**
   - Go to your repository → Settings → Pages
   - Under "Source", select **GitHub Actions**
   - Save the settings

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Wait for deployment:**
   - GitHub Actions will automatically build and deploy your site
   - Check the Actions tab to see deployment progress
   - Your site will be live at: `https://sakura-winter.github.io/Sakura-Portfolio/`

**Note:** The first deployment may take a few minutes. Subsequent pushes to `main` will trigger automatic deployments.

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

## 📁 Project Structure

```
├── components/
│   ├── Sections/          # Portfolio sections (About, Skills, Projects, etc.)
│   ├── BootSequence.tsx   # Retro boot animation
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Navigation.tsx     # Terminal-style navigation
│   └── TerminalInput.tsx  # Interactive command terminal
├── App.tsx                # Main app component with routing
├── constants.tsx          # Static data (projects, skills, achievements)
├── types.ts               # TypeScript type definitions
└── vite.config.ts         # Vite configuration
```

## 🎮 Terminal Commands

The portfolio includes an interactive terminal. Try these commands:

- `about` - Navigate to About section
- `skills` - View skills matrix
- `projects` - Browse project portfolio
- `experience` - See work experience
- `resume` - Download resume
- `contact` - Get in touch
- `help` - Show available commands
- `clear` - Clear terminal history
- `ls` - List available sections

## 🎨 Customization

### Adding Your Own Content

1. **Update personal info:** Edit `constants.tsx` and `App.tsx`
2. **Add projects:** Modify the `PROJECTS` array in `constants.tsx`
3. **Change taglines:** Edit the `TAGLINES` array in `App.tsx`
4. **Update resume PDF:** Replace `resume.pdf` in the root directory
5. **Modify colors:** Edit Tailwind classes in component files

### Profile Image

Place your `profile.jpg` in the root directory. It will be automatically processed by Vite.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Sakura-winter/Sakura-Portfolio/issues).

## 📧 Contact

**Sumit Kumar Mehta**

- 📧 Email: [sumitkum1819@gmail.com](mailto:sumitkum1819@gmail.com)
- 💼 LinkedIn: [sumit-alexithymia](https://linkedin.com/in/sumit-alexithymia)
- 🐙 GitHub: [@Sakura-winter](https://github.com/Sakura-winter)
- 📍 Location: Bathinda, Punjab, India

---

<div align="center">



*"Architecting high-availability realms and optimizing the mana flow of data."*

⭐ Star this repo if you find it interesting!

</div>
