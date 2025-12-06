module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/**/*.js",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#00ffe1", // cyan - live data accent
          light: "#64ffda", // cyan-300
          dark: "#00d4b8", // cyan-600
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#ffaa00", // orange - warning/transition
          light: "#ffcc66", // orange-300
          dark: "#cc8800", // orange-600
        },
        // Accent Colors
        accent: {
          DEFAULT: "#64ffda", // cyan-300
          light: "#99ffe6", // cyan-200
          dark: "#4dd4c0", // cyan-400
        },
        // Background Colors
        background: {
          DEFAULT: "#0f2027", // blue-gray-900
          start: "#0f2027", // blue-gray-900
          mid: "#203a43", // blue-gray-800
          end: "#2c5364", // blue-gray-700
        },
        // Surface Colors
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.1)", // white-10
          light: "rgba(255, 255, 255, 0.15)", // white-15
          dark: "rgba(255, 255, 255, 0.05)", // white-5
        },
        // Text Colors
        text: {
          primary: "#ffffff", // white
          secondary: "rgba(255, 255, 255, 0.7)", // white-70
          tertiary: "rgba(255, 255, 255, 0.5)", // white-50
        },
        // Status Colors
        success: {
          DEFAULT: "#4ade80", // green-400
          light: "#86efac", // green-300
          dark: "#22c55e", // green-500
        },
        warning: {
          DEFAULT: "#fbbf24", // amber-400
          light: "#fcd34d", // amber-300
          dark: "#f59e0b", // amber-500
        },
        error: {
          DEFAULT: "#ef4444", // red-500
          light: "#f87171", // red-400
          dark: "#dc2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.1)", // white-10
          light: "rgba(255, 255, 255, 0.2)", // white-20
          dark: "rgba(255, 255, 255, 0.05)", // white-5
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        caption: ['Source Sans Pro', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'base': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'md': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'lg': '0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.04)',
        'xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      backdropBlur: {
        'xs': '10px',
        'sm': '15px',
        'md': '20px',
        'lg': '25px',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '800ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'ease-in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-in': 'scaleIn 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        'shimmer': 'shimmer 2s infinite',
        'gradient': 'gradientShift 10s ease infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00ffe1 0%, #64ffda 100%)',
        'gradient-warning': 'linear-gradient(135deg, #ffaa00 0%, #ffcc66 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}