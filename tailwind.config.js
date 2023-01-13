/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "gray-dracula": "#282a36",
        "gray-dracula-clear" : "#44475a",
        "green-dracula" : "#50fa7b",
        "pink-dracula" : "#ff79c6",
        "blue-dracula" : "#6272a4",
      },
    },
    plugins: [],
  },
};
