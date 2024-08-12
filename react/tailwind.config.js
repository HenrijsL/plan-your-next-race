/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
        colors: {
            'green': "#4CAF4F",
            'white': "#FFFFFF",
            'grey': "#4D4D4D",
            'silver': "#F5F7FA"
        },
        extend: {},
    },
    plugins: [],
}

