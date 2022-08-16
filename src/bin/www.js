
//app 이라는 것을 찾을 수가없다. 불러와야 한다. 
//app.js에서 app을 export 해야 한다. 

const app = require("../app");

app.listen(3001, () => {
    console.log("서버 가동");
})