module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'mocha': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:protractor/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'impliedStrict': true,
            'globalReturn': false
        },
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'plugins': [
        'babel'
    ],
    'rules': {
        'no-var': 'error',
        'semi': 'error',
        'indent': 'error',
        'no-multi-spaces': 'error',
        'space-in-parens': 'error',
        'no-multiple-empty-lines': 'error',
        'prefer-const': 'error',
        'no-use-before-define': 'error',
        'max-len': 0,
        'react/forbid-prop-types': 0,
        'import/no-extraneous-dependencies': 0,
        'no-confusing-arrow': ['error', { 'allowParens': true }],
        'arrow-parens': ['error', 'as-needed'],
        'import/prefer-default-export': 0,
        'object-curly-newline': ['error', { 'consistent': true }],
        'implicit-arrow-linebreak': 0,
        'operator-linebreak': 0,
        'linebreak-style': 0,
        'requireForBlockBody': 0
     
    },
    globals: {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'browser': true,
        '$': true,
        '$$': true
    },

};

