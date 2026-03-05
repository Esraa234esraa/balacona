/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Updated brand palette (Dunkin-style layout, custom colors)
        'bala-forest': '#224433',      // primary dark green
        'bala-cream': '#EFEFEF',       // light background
        'bala-brown': '#212121',       // dark text / neutral
        'bala-gold': '#CC9966',        // soft gold accent
        'bala-dark-bg': '#212121',     // dark mode background
        'bala-dark-surface': '#224433',// dark surface
        'bala-dark-green': '#B87233',  // warm accent in dark mode
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'bala': '16px',
      },
      spacing: {
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      boxShadow: {
        'bala-light': '0 4px 16px rgba(11, 61, 46, 0.08)',
        'bala-hover': '0 8px 24px rgba(11, 61, 46, 0.12)',
        'bala-dark': '0 4px 16px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      maxWidth: {
        'bala': '1200px',
      },
    },
  },
  plugins: [],
}