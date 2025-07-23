/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pomodoro: {
          work: '#EF4444',
          shortBreak: '#14B8A6', 
          longBreak: '#8B5CF6'
        }
      },
      animation: {
        'pulse-time': 'pulse-time 1s infinite',
      },
      keyframes: {
        'pulse-time': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}