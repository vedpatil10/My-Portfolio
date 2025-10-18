# Vedant Patil - Modern React Portfolio

A stunning, modern portfolio website built with React, TypeScript, and Tailwind CSS. Features advanced animations, responsive design, and a professional presentation of skills and projects.

![Portfolio Preview](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face&auto=format)

## ✨ Features

### 🎨 **Modern Design**
- **Dark/Light Theme Toggle** - Seamless theme switching
- **Glassmorphism Effects** - Frosted glass UI elements
- **Gradient Animations** - Dynamic color transitions
- **Responsive Design** - Perfect on all devices
- **Professional Typography** - Clean, readable fonts

### 🚀 **Advanced Animations**
- **Continuous Name Animation** - Pulsing glow effects
- **Section Hover Effects** - Interactive section headers
- **Skill Card Animations** - Hover and scale effects
- **Particle Background** - Animated background elements
- **Smooth Transitions** - Framer Motion powered

### 💼 **Professional Sections**
- **Hero Section** - Animated profile with professional photo
- **About Me** - Comprehensive background and skills
- **Work Experience** - Detailed career timeline
- **Featured Projects** - Showcase of key work
- **Skills Grid** - 33+ technologies with unique icons
- **Education** - Academic achievements
- **Contact** - Multiple ways to connect

### 🛠 **Technical Stack**
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful icons
- **Vite** - Lightning-fast build tool

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/vedpatil10/Portfolio.git
cd Portfolio

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

### Build for Production

```bash
# Build the project
npm run build
# or
pnpm build

# Preview production build
npm run preview
# or
pnpm preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── photo1.png          # Profile photo
│   └── photo2.png          # Alternative photo
├── src/
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   ├── providers/      # Context providers
│   │   ├── animated-background.tsx
│   │   └── theme-toggle.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Main portfolio page
│   │   ├── auth/
│   │   └── NotFound.tsx
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Personal Information
Update your details in `src/pages/Index.tsx`:

```typescript
// Update personal info
const personalInfo = {
  name: "Vedant Patil",
  title: "Software Developer and Data Science Enthusiast",
  email: "vedantpatil1450@gmail.com",
  phone: "+91-8421340256",
  location: "Mumbai, India"
};
```

### Skills
Add or modify skills in the skills array:

```typescript
const skills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  // Add more skills...
];
```

### Projects
Update your projects in the projects array:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project"
  }
];
```

### Profile Photo
Replace your photo:
1. Add your photo to the `public/` folder
2. Update the image path in `src/pages/Index.tsx`:

```tsx
<img
  src="/your-photo.jpg"
  alt="Your Name"
  className="w-full h-full object-cover scale-125"
  style={{ objectPosition: 'center 10%' }}
/>
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Or use Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Framework: Vite
   - Deploy

### Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `dist`
3. **Deploy from GitHub or drag & drop**

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🎯 Performance

- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Bundle Size:** Optimized with Vite

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🛠 Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Style

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Tailwind CSS** - Utility-first styling

## 📄 License

This project is for personal use by Vedant Patil. Feel free to use as inspiration for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Vedant Patil**
- 📧 Email: [vedantpatil1450@gmail.com](mailto:vedantpatil1450@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/vedant-patil-vp10](https://linkedin.com/in/vedant-patil-vp10)
- 🐙 GitHub: [github.com/vedpatil10](https://github.com/vedpatil10)
- 📱 Phone: +91-8421340256
- 📍 Location: Mumbai, India

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

⭐ **Star this repository if you found it helpful!**
