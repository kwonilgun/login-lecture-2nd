
//8월 16일 :http로 서버를 가동하는 경우는 한글이 깨지는 경우가 생기고
//콜백 함수로 라우팅을 해야 한다. 이런 번거로움을 줄여주는 것이 express이다. 
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type" : "text/html, charset = utf-8"
//     });
//     if(req.url === '/') {
//         res.end('root.입니다. ');
//     } else if(req.url === '/login') {
//         res.end('login. ');
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동됨");
// });






//require를 통해서 express 모듈을 찾아 올 수 있다. 
//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//앱세팅 - 화면을 뷰를 관리해줄 파일이 저장된 폴더의 이름을 
//폴더안에 생성되는 HTML 코드를 어떤 엔진으로 해석할 지을 정해준다. 
//ejs는 뷰 엔진으로 사용하는 엔진이다. 
app.set('views', './src/views');
app.set('view engine', 'ejs');

//미들웨어를 등록하느 메소드가 use이다.
//루트라는 경로로 들어오면 home으로 보내준다. 
const home = require('./src/routes/home')
console.log(`${__dirname}/src/public`)
app.use(express.static(`${__dirname}/src/public`));

//req에 대해서 undefined를 해결하기 위해서 body-parser를 미들웨어에
//등록을 해주어야 한다. 

app.use(bodyParser.json());

//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우
//제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', home); 
   

module.exports = app;   //app를 내 보낸다. 

