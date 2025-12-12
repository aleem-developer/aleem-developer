/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light Mode Inversion Palette (Blue-White-Mint)
        // Mapping functionality of dark classes to light aesthetic
        gray: {
          950: '#FFFFFF', // Was Deep Navy -> Now Pure White (Main Bg)
          900: '#FFFFFF', // Was Navy -> Pure White
          800: '#FFFFFF', // Was Midnight -> White Cards
          700: '#F1F5F9', // Was Dark -> Soft Grey (Borders/Secondary)
          600: '#CBD5E1', // Was Medium -> Slate 300
          500: '#94A3B8', // Slate 400
          400: '#64748B', // Slate 500
          300: '#475569', // Slate 600
          200: '#334155', // Slate 700
          100: '#1E293B', // Slate 800 (Text)
          50: '#0F172A',  // Slate 900 (Headings)
        },
        // Accents
        blue: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#78B7FF', // Sky Blue Accent
          500: '#3A7BD5', // Soft Blue
          600: '#2F6FED', // Royal Blue
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        purple: {
          // Mapping purple gradients to Mint/Teal for "Fresh" look
          400: '#4CBBA8', // Teal Accent
          500: '#10B981', // Emerald
          600: '#059669',
        },
        // Text Inversion
        white: '#0F172A', // Using 'text-white' class? Now it is Charcoal.
        black: '#FFFFFF', // Using 'bg-black'? Now it is White.

        // Custom Theme Tokens
        mint: '#D9F5E5',
        'soft-green': '#A8E6CF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 12px 28px rgba(0, 0, 0, 0.08)', // Soft, airy shadow
        'glow': '0 0 15px rgba(76, 187, 168, 0.3)', // Mint glow
      },
    },
  },
  plugins: [],
};
