module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'wave-img': "url('/public/images/wave.png')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}