/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FFFEFA',
          100: '#FFFBF0',
          200: '#FFF8E7',
          300: '#FFF4DE',
          400: '#FFF0D5',
          500: '#FFEBCC',
        },
        maroon: {
          50: '#FFF5F5',
          100: '#FFE0E0',
          200: '#FFBABA',
          300: '#FF8A8A',
          400: '#E85555',
          500: '#8B1A1A',
          600: '#6B0F0F',
          700: '#4B0808',
          800: '#2B0404',
          900: '#1A0202',
        },
        gold: {
          50: '#FFFEF5',
          100: '#FFFAE0',
          200: '#FFF4C2',
          300: '#FFED99',
          400: '#FFE56B',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#8B6F14',
          800: '#5C4A0D',
          900: '#2E2507',
        },
        kerala: {
          green: '#1B4332',
          'green-light': '#2D6A4F',
          'green-dark': '#081C15',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          light: '#DCF8C6',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'maroon': '0 4px 20px rgba(139, 26, 26, 0.15)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
