import type { Config } from 'tailwindcss'
import flowbitePlugin from 'flowbite/plugin';

export default <Partial<Config>> {
  content: [
    // `~/composables/**/*.{js,ts}`,
    // `~/utils/**/*.{js,ts}`,
    // `~/App.{js,ts,vue}`,
    // `~/Error.{js,ts,vue}`,
    "~/components/**/*.{vue,js,ts}",
    "~/layouts/**/*.vue",
    "~/pages/**/*.vue",
    "~/plugins/**/*.{js,ts}",
    "./app.{js,ts,vue}",
    "./app.config.{js,ts}",
    "./error.{js,ts,vue}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  fontFamily: {
    sans: ['Roboto', 'Inter', 'Noto Sans', 'Raleway', 'sans-serif'],
    serif: ['Playfair Display', 'serif'],
  },
  theme: {
    extend: {
      // transitionTimingFunction: {},
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        bounceSlow: 'bounceSlow 3s linear infinite',
      }
    },
  },
  variants: {},

  plugins: [flowbitePlugin],

}