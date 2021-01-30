# React - Typescript Demo App



## Skills
- npx란?
    - 참고 : https://geonlee.tistory.com/32

- 웹팩
    - 참고
        - 기본 : https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html
    - 로더란?
        - 웹팩은 모든 `파일`을 모듈로 본다. (js뿐만 아니라, png, css 등 모든 파일을!)
        - 그렇기 때문에 모든 파일을 import 구문을 통해 js 파일로 가져올 수 있다.
            <br> (import에 대해 알고 싶으면 [commonJS 공부!](https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html#1-%EB%B0%B0%EA%B2%BD))
        - 로더 : 로더는 ts, css, png같은 다른 종류의 파일을 js 문법으로 변환하거나 dataUrl 문자열로 변환한다.
        - 자주 사용하는 로더
            - css-loader, style-loader, file-loader, url-loader
    - 소스맵이란? : https://joshua1988.github.io/webpack-guide/devtools/source-map.html#%EC%86%8C%EC%8A%A4-%EB%A7%B5
    - webpack-cli를 설치해서 `webpck` 치면 알아서 동작!!!
        - 그냥 webpack치는건 좀 별로 -> package.json build 스크립트에 등록 -> npm run build 하면 webpack 실행

    - 자동화
        - 매번 코드 ‘작성 -> 빌드 -> 브라우저 확인’은 에바이다.
        - webpack-dev-server로 자동화 가능
        - webpack 설정 중, devServer 속성에 개발서버 정보를 세팅
        - 요 내용은 https://joshua1988.github.io/webpack-guide/tutorials/webpack-dev-server.html#%EC%8B%A4%EC%8A%B5-%EC%A0%88%EC%B0%A8 참고

- 바벨
    - 참고 : https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html
    - 요기 보면 타입스크립트에 바벨 적용시키는 웹팩 설정 나와 있음
        - https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d

- 참고
    - https://jeonghwan-kim.github.io/dev/2019/06/25/react-ts.html
    - https://joshua1988.github.io/webpack-guide/
