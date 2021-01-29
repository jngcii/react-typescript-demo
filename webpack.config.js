var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  // 엔트리 포인트
  entry: "./src/index.tsx",

  // 아웃풋 결과물 dist/main.js에 위치
  output: {
    filename: "main.js",
    path: __dirname + "/dist"
  },

  // 디버깅을 위해 빌드 결과물에 소스맵 추가
  devtool: "source-map",

  // 웹팩이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션 
  resolve: {
    // 파일 확장자 처리
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      // .ts나 .tsx 확장자를 ts-loader가 트랜스파일 (선 컴파일...?)
      // es6 코드를 바벨이 처리하는 것처럼 타입스크립트 코드를 ts-loader가 처리하도록 설정했다. .ts나 .tsx 파일을 ts-loader가 해석하라는 설정
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },

  devServer: {
    port: 9000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'index.html',
    }),
  ],
}