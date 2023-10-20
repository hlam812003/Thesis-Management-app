module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        "vue/setup-compiler-macros": true,
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        "@nuxtjs/eslint-config-typescript",
        'plugin:nuxt/recommended'
    ],
    rules: {
        
    },
}