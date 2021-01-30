var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require("clean-webpack-plugin")
var { DefinePlugin } = require('webpack')

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
      { test: /\.tsx?$/, loader: "ts-loader" },

      // babel
      // 실무에서는
      // npx babel src/app.js 로 바벨을 적용하는 것이 아니라
      // webpack을 통해 각 모듈들에 babel.config.js 설정을 적용하는 것이 일반적!
      // 참고로 ts에 대한 고려가 전혀 안된 -> https://babeljs.io/docs/en/babel-preset-typescript 를 참고~~~
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", // 바벨 로더를 추가한다
      },

      // loader에 배열을 설정하면 뒤의 로더부터 동작한다.
      // 아래 설정은 css-loader를 적용해 css를 js코드로 변환한 후에, style-loader를 적용해 js로 변경된 스타일을 동적으로 돔에 추가
      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      {
        test: /\.png$/,
        loader: "file-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]"
        }
      },

      {
        test: /\.png$/,
        use: {
          loader: 'url-loader', // url 로더를 설정한다
          options: {
            publicPath: './dist/', // file-loader와 동일
            name: '[name].[ext]?[hash]', // file-loader와 동일
            limit: 5000 // 5kb 미만 파일만 data url로 처리
          }
        }
      }
    ]
  },

  devServer: {
    port: 9000,
  },

  plugins: [
    new DefinePlugin({}),

    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: './src/index.html',
      templateParameters: { // 템플릿에 주입할 파라매터 변수 지정
        env: process.env.NODE_ENV === 'production' ? '' : '(개발용)',
      },
      minify: process.env.NODE_ENV === 'production' ? {
        collapseWhitespace: true, // 빈칸 제거
        removeComments: true, // 주석 제거
      } : false,
      hash: true,
    }),

    new CleanWebpackPlugin()
  ],
}
