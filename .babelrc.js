module.exports = {
  presets: ['@babel/preset-env'],
  // presets: 일일히 입력해야 하는 js 기능을 한번에 지원해주는 패키지
  plugins: [
    ['@babel/plugin-transform-runtime']
    // 비동기 처리를 위해 plugin-transform-runtime 이라는 패키지 설치
  ]
}