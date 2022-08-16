"use strict";

//라우팅 안에서 controller에 해댱부분을 분리한다. 
//MVC 패턴을 이용한다. 
//controller를 콜백함수를 분리해서 만든다. home.ctrl.js로 이동시킨다. 

const express = require('express');

//app을 사용하지 않고 router를 사용한다. 
const router = express.Router();
const ctrl = require('./home.ctrl')


//app 대신에 router로 교체를 해 주면 된다. 
router.get('/', ctrl.home );
 
router.get('/login', ctrl.login );

module.exports = router



//  const express = require('express');
//  //app을 사용하지 않고 router를 사용한다. 
//  const router = express.Router();
 
 
//  //app 대신에 router로 교체를 해 주면 된다. 
//  router.get('/', (req, res) => {
//      //views의 폴더를 지정하였기 때문에 디렉토리에 대한 설정이 필요없다.
//      res.render('home/index');
  
//   });
  
//   router.get('/login', (req, res) => {
//     res.render('home/login');
//   })
// //index.js가 어디에 있는지 조차 모른다. 
// //라우터를 외부 파일에서 사용할 수 있도록 던져 준다. 
// module.exports = router



// app.get('/', (req, res) => {
//     //views의 폴더를 지정하였기 때문에 디렉토리에 대한 설정이 필요없다.
//     res.render('home/index');
 
//  });
 
//  app.get('/login', (req, res) => {
//    res.render('home/login');
//  })