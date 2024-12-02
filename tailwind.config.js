/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'hsl(241, 61%, 60%)',
        'custom-blue-light': 'hsl(241, 61%, 60%)',
        'custom-darkblue': 'hsla(256, 72%, 48%, 1)',
        'Light red': 'hsl(0, 100%, 67%)',     // Light red
        'Orangey yellow': 'hsl(39, 100%, 56%)',    // Orangey yellow
        'Green teal':'hsl(166, 100%, 37%)',   // Green teal
        'deepblue':'hsl(234, 85%, 45%)' 
      },
    },
  },
  plugins: [],
}

