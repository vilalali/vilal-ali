# Vilal Frontend - Personal Portfolio & CMS 🚀

![React](https://img.shields.io/badge/React-19.2.6-blue?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.0-38B2AC?logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.40.0-black?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📖 About the Project
This is the frontend component of Vilal Ali's personal portfolio and Content Management System (CMS). Built with modern web technologies, it features a highly interactive user interface, an AI-powered chat widget, and an administrative dashboard to manage portfolio content dynamically.

**Live Website:** [https://vilalali.github.io/vilal-ali/](https://vilalali.github.io/vilal-ali/)

## 🔒 Security Notice
> [!IMPORTANT]  
> This repository is **100% public**. **DO NOT** commit any sensitive information, passwords, or API keys here. All API keys and database credentials exist securely within the backend server environment.

The frontend communicates with the backend exclusively via REST APIs and uses JSON Web Tokens (JWT) for authentication stored locally in the browser. No hardcoded secrets exist in this source code.

## ⚙️ Project Setup Steps
1. **Clone the repository:**
   ```bash
   git clone git@github.com:vilalali/vilal-ali.git
   cd vilal-ali
   ```
2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```
3. **Environment Setup:**
   Create a `.env` file in the root directory. **Never commit your true `.env` file.**
   ```env
   # Example .env Configuration
   VITE_NODE_ENV=local

   # URLs
   VITE_LOCAL_BACKEND_URL=http://localhost:3001
   VITE_PROD_BACKEND_URL=https://<your-ec2-ip-or-domain>.sslip.io
   ```

## 🚀 Development & Deployment
- **Local Development Server:**
  ```bash
  npm run dev
  ```
  The app will run on `http://localhost:3000/vilal-ali/`.

- **Continuous Deployment (GitHub Pages):**
  This project uses GitHub Actions for automated deployment.
  1. Every `git push` to the `main` branch triggers the `.github/workflows/deploy.yml` pipeline.
  2. The pipeline builds the React app using `npm run build`.
  3. It copies `index.html` to `404.html` (to prevent React Router 404 errors on GitHub Pages).
  4. The code is instantly published to `https://vilalali.github.io/vilal-ali/`.

## 👨‍💻 Author Details
- **Name:** Vilal Ali
- **Role:** Lead Platform Architect & Principal Engineer
- **GitHub:** [vilalali](https://github.com/vilalali)
