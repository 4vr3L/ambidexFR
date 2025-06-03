/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '200% 0',
          },
          '50%': {
            'background-position': '0% 0',
          },
        },
        'float-1': {
          '0%, 100%': {
            transform: 'translate(0px, 0px)',
          },
          '50%': {
            transform: 'translate(0px, -10px)',
          },
        },
        'float-2': {
          '0%, 100%': {
            transform: 'translate(0px, 0px)',
          },
          '50%': {
            transform: 'translate(0px, -8px)',
          },
        },
        'typing-1': {
          '0%, 100%': {
            transform: 'translateY(0px)',
            opacity: '0.4',
          },
          '50%': {
            transform: 'translateY(-4px)',
            opacity: '0.8',
          },
        },
        'typing-2': {
          '0%, 100%': {
            transform: 'translateY(0px)',
            opacity: '0.4',
          },
          '50%': {
            transform: 'translateY(-4px)',
            opacity: '0.8',
          },
        },
        'typing-3': {
          '0%, 100%': {
            transform: 'translateY(0px)',
            opacity: '0.4',
          },
          '50%': {
            transform: 'translateY(-4px)',
            opacity: '0.8',
          },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float-1': 'float-1 3s ease-in-out infinite',
        'float-2': 'float-2 3.5s ease-in-out infinite',
        'typing-1': 'typing-1 1s ease-in-out infinite',
        'typing-2': 'typing-2 1s ease-in-out infinite 0.2s',
        'typing-3': 'typing-3 1s ease-in-out infinite 0.4s',
      },
    },
  },
  plugins: [],
}

