module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust if needed
    './components/**/*.{js,jsx,ts,tsx}',  // Ensure this includes all directories with JSX files
    './public/index.html',  // If you use index.html with Tailwind
  ],
  theme: {
    extend: {
      colors: {
        'menubar-bg': '#f4f4f4',  // Custom background for menubar
        'menubar-text': '#333',    // Custom text color for menubar
        'menubar-hover': '#ff9800', // Example hover color
      },
      spacing: {
        '128': '32rem',  // Custom spacing for elements, if needed
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),  // Optional: For form styling
    require('@tailwindcss/typography'),  // Optional: For typography styling
  ],
}
