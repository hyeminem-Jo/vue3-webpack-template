module.exports = {
  // 사전에 정의된 전역 변수 설정
  env: {
    browser: true,
    node: true
  },
  // 사용 가능한 규칙 세트
  extends: [
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    'eslint:recommended'
  ],
  // 구문 분석할 패키지 설정(Babel, ES6^ => ES5)
  parserOptions: {
    // parser: 'babel-eslint'
    parser: '@babel/eslint-parser'
  },
  // 추가적인 코드 규칙을 설정
  rules: {
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }]
  }
}



// module.exports = {
//   // 브라우저나 node 환경에서 코드 검사를 할 것인지
//   env: {
//     browser: true,
//     node: true
//   },
//   // 코드 검사 규칙을 명시
//   extends: [
//     // vue
//     // eslint-plugin-vue 라는 패키지에서 제공하는 기본적인 vue.js 코드 검사 규칙
//     // 'plugin:vue/vue3-essential', // lv1
//     'plugin:vue/vue3-strongly-recommended', // lv2
//     // 'plugin:vue/vue3-recommended', // lv3
//     // js
//     'eslint: recommended',
//   ],
//   // 기본적인 코드를 분석할 수 있는 분석기 지정
//   parserOptions: {
//     parser: 'babel-eslint',
//     // babel: es6 이상의 문법을 구 버전의 브라우저에서도 동작할 수 있도록 es5 변경시켜주는 역할
//     // sourceType: "module"
//   },
//   rules: {
//     "vue/html-closing-bracket-newline": ["error", {
//       "singleline": "never",
//       "multiline": "never"
//     }],
//     "vue/html-self-closing": ["error", {
//       "html": {
//         "void": "always", // img 와 같은 빈 태그
//         "normal": "never", // div 등과 같은 일반 태그에는 self-closing 을 하지 않아도 됨 (원래는 <div /> 이렇게 써야함)
//         "component": "always"
//       },
//       "svg": "always",
//       "math": "always"
//     }]
//   }
// }