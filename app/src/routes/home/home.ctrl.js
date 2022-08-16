

//controller 구성, 함수 home/login을 분리해서 컨트롤러를 만들었다. 

// const home = (req, res) => {
//     //views의 폴더를 지정하였기 때문에 디렉토리에 대한 설정이 필요없다.
//     res.render('home/index');
 
//  };

//  const login =  (req, res) => {
//     res.render('home/login');
//   };
// module.exports = { 
//   home,
//   login
// }

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    console.log(req.body);

  }
};

module.exports = { 
    output,
    process,
};
  