module.exports = {
    extends: [
        'plugin:vue/vue3-strongly-recommended', // Priority A: Essential (Error Prevention)
    ],
    plugins: [
        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
        // required to lint *.vue files
        'eslint-plugin-vue',
        'vue',
        'import',
    ],
    rules: {
        'no-param-reassign': 'off',
        'no-void': 'off',
        'no-nested-ternary': 'off',
        'max-classes-per-file': 'off',

        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],

        'no-unused-vars': ['warn'],
        'generator-star-spacing': 'off',
        'arrow-parens': 'off',
        'one-var': 'off',
        'import/first': 'off',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'prefer-promise-reject-errors': 'off',
        'vue/attribute-hyphenation': 'off',
        //Personalizada
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
