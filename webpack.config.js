const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// 패키지 가져오기

module.exports = {
  // 파일을 불러올 때 확장자를 생략할 수 있다.
  // ex. './App.vue' => './App'
  resolve: {
    extensions: ['.js', '.vue'],
    // 경로 별칭 (상대 경로로 찾아서 가는 것이 아닌, 해당 파일을 콕 집어 명시)
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    } 
  },

  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './src/main.js', 

  // 결과물(번들)을 반환하는 설정
  output: {
    // 주석은 기본값!, `__dirname` 은 현재 파일의 위치를 알려주는 NodeJS 의 전역 변수
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true 
  },

  // 모듈 처리 방식을 설정
  module: { 
    // module: 여러 모듈들(scss, css, js 등...)을 여러 가지 loader 들로 분석하여 사용
    rules: [
      // vue 라는 확장자를 가진 파일의 이름을 해석할 수 있도록 규칙 생성
      {
        test: /\.vue$/, 
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/, 
        use: [
          // 순서 중요
          // 가장 첫번째에 있는 것이 맨 마지막에 읽힘
          'vue-style-loader', 
          // vue 라는 확장자를 가진 파일들 내부에서 style 이라는 태그로 css 를 작성할 수 있음
          'style-loader', 
          'css-loader',
          'postcss-loader',
          'sass-loader' 
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외할 경로
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [ 
    new HtmlPlugin({ 
      template: './index.html' 
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' } 
      ]
    }),
    new VueLoaderPlugin()
  ],

  devServer: {
    host: 'localhost'
  }
}
