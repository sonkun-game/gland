module.exports = {
    plugins: [
        require('flowbite/plugin'),
    ],
    theme: {
        extend: {
            colors: {
                'purple-900': '#2E2E48',
                'purple-500': '#59598E',
                'night': '#1d2432',
                'sun': '#f9fafb', 
            }
        },
    },
    content: [
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: "class"
}