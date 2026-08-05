# Aura Studio - Modern Designer & Developer Portfolio

A modern, high-performance personal portfolio website built with **React Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed based on the Figma Portfolio Template community design.

<img width="1290" height="684" alt="image" src="https://github.com/user-attachments/assets/2c226df4-715c-4057-93ce-db45d29ad3a3" />


## ✨ Features

- 🎨 **Figma Inspired Layout**: Meticulously crafted design system based on Epilogue typography and clean modern aesthetics.
- ⚡ **Next.js 15 App Router**: Ultra-fast page rendering, static site generation, and optimized image loading.
- 🌊 **Framer Motion Animations**: Smooth page transitions, card hover elevation, and interactive modal dialogs.
- 📱 **Fully Responsive**: Optimized for all device viewports (mobile, tablet, desktop).
- 🏷️ **Project Filtering & Modals**: Interactive category filtering for projects and modal views for deep-dives.
- ✉️ **Interactive Contact Form**: Client side validation with success state confetti effects.
- 🔍 **SEO & OpenGraph Optimized**: Pre-configured metadata tags for social sharing.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Epilogue & Inter Fonts](https://fonts.google.com/specimen/Epilogue)

## 📁 Project Structure

```
d:\Portofolio/
├── public/
│   └── images/              # Assets & image files from Figma
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens & Tailwind CSS v4 setup
│   │   ├── layout.tsx       # Root layout with Epilogue font & metadata
│   │   └── page.tsx         # Portfolio main page
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation header with mobile menu
│   │   ├── Hero.tsx         # Hero banner with role title & CTA
│   │   ├── BrandLogos.tsx   # Trusted brands section
│   │   ├── Skills.tsx       # Core skills card grid
│   │   ├── Portfolio.tsx    # Project gallery with category filter
│   │   ├── ProjectModal.tsx # Interactive project detail popup
│   │   ├── Testimonials.tsx # Client reviews & star ratings
│   │   ├── Contact.tsx      # Contact form & social icons
│   │   └── Footer.tsx       # Clean footer with back-to-top button
│   ├── data/
│   │   └── portfolioData.ts # Data model for skills, projects, reviews
│   └── types/
│       └── index.ts         # TypeScript type definitions
└── package.json
```

## 🚀 Getting Started

First, install the dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
