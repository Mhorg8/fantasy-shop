import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
      },
    },
    extend: {
      colors: {
        blue: "#4B79A1",
        "warm-gold": "#F2C94C",
        "soft-gray": "#d9d9d9",
        "dark-gray": "#333333",
        "soft-green": "#A0DAA9",
        "dark-green": "#10563f",
        "soft-coral": "#FF6F61",
        "cream-white": "#FAF3E0",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

/*
 => Mystic Blue: Use for headers, primary buttons, and key accents.

 =>Warm Gold: Perfect for call-to-action buttons, highlights, and decorative elements.

 =>Soft Coral: Great for banners, icons, and other elements that need to stand out.

 =>Mint Green: Ideal for backgrounds, secondary buttons, and calming accents.

 =>Slate Gray: Use for text and subtle elements to provide contrast and readability.
 
 =>Ivory White: Backgrounds and areas that need a clean, fresh look.
 */
