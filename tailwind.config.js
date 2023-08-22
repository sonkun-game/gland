module.exports = {
    plugins: [
        require('flowbite/plugin'),
    ],
    theme: {
        extend: {
            colors: {
                'purple-900': '#2E2E48',
                'purple-500': '#59598E',

            }
        },
    },
    content: [
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: "class"
}