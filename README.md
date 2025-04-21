# Fametonic Landing Page

A responsive landing page for Fametonic - a platform that helps users turn social media into a profitable career. This project was built using Next.js and Tailwind CSS.

![Fametonic Landing Page](https://fametonic-git-main-mahmudur-rahmans-projects-7303d762.vercel.app/)

## Live Demo
View the live demo: [Fametonic Landing Page](https://fametonic-git-main-mahmudur-rahmans-projects-7303d762.vercel.app/)

## Project Overview

This project is an implementation of a Figma design for a landing page. The implementation includes:

- Responsive design that works on both mobile and desktop
- A header with navigation menu (mobile and desktop versions)
- Hero section with compelling content and a phone mockup display
- Footer with links and branding

## Features

- **Responsive Layout:** The page adapts to different screen sizes
- **Mobile Menu:** A slide-in menu for mobile devices
- **Phone Display:** Showcases the app with a colorful glow effect
- **Glowing CTA Button:** Enhanced "GET STARTED" button with glow effect
- **Footer:** Additional footer component with navigation links

## Tech Stack

- **Next.js:** React framework for building the application
- **Tailwind CSS:** For styling and responsive design
- **React Hooks:** For state management (mobile menu)
- **Next/Image:** For optimized image loading

## Development

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Mahmud-007/fametonic.git
   ```

2. Navigate to the project directory:
   ```
   cd fametonic
   ```

3. Install dependencies:
   ```
   npm install
   # or
   yarn
   ```

4. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
├── components/
│   ├── Footer.jsx
│   ├── Header.js
│   ├── HeroSection.jsx
│   └── PhoneDisplay.jsx
├── pages/
│   └── index.js
├── public/
│   ├── fametonic-logo.svg
│   └── phone-mockup.png
└── styles/
```

## Implementation Notes

- The header includes a sale banner with a gradient background
- The hero section takes full screen height with centered content
- The phone display has a colorful glow effect created with CSS
- The "GET STARTED" button has an enhanced glowing effect
- All links (About us, Contact, Get Started) are placeholder links for future implementation

## Deployment

The project is deployed on Vercel. For deploying on Netlify, you may need to add the Next.js plugin for Netlify:

1. Install the plugin:
   ```
   npm install -D @netlify/plugin-nextjs
   ```

2. Add a `netlify.toml` file to the project root:
   ```
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

## GitHub Repository

View the source code: [GitHub Repository](https://github.com/Mahmud-007/fametonic)

## Created By

Mahmudur Rahman

## License

This project is open source and available under the [MIT License](LICENSE).