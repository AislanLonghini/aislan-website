/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'obsidian-canvas': 'var(--color-obsidian-canvas, #0a0a0a)',
        'true-black': 'var(--color-true-black, #000000)',
        'charcoal-surface': 'var(--color-charcoal-surface, #171717)',
        'graphite-edge': 'var(--color-graphite-edge, #262626)',
        'steel-border': 'var(--color-steel-border, #464646)',
        'cloud-white': 'var(--color-cloud-white, #fafafa)',
        'paper-white': 'var(--color-paper-white, #e5e5e5)',
        'fog': 'var(--color-fog, #a1a1a1)',
        'ash': 'var(--color-ash, #737373)',
        'signal-orange': 'var(--color-signal-orange, #ff8833)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        matter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '72': '72px',
        '128': '128px',
        '224': '224px',
      },
      borderRadius: {
        'card': '10px',
        'badge': '20px',
        'btn': '8px',
      },
      boxShadow: {
        'sm-graphite': 'rgba(0, 0, 0, 0.25) 0px 4px 4px 0px',
        'md-graphite': 'rgba(0, 0, 0, 0.3) 0px 8px 10px 0px',
      },
    },
  },
  plugins: [],
}
