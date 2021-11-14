//사용하려고하는 모듈을 import한다.
import express from "express";
import logger from "morgan";
import path from "path";

//사용자가 정의한 모듈을 import한다.
import homeRouter from "../routes/home";        //home화면 관련 기능
import updateRouter from "../routes/update";    //수정하는 기능
import selectRouter from "../routes/select";    //조회하는 기능

const PORT = 3000;      // 포트를 3000번으로 사용한다.

const app = express();  //http기능을 사용할 수 있게해주는 모듈 사용, app이라는 객체 이름으로 사용할 것이다.

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));     //log를 사용하기위해 선언

//기본적인 라우트 주소 설정
app.use('/', homeRouter);
app.use('/update', updateRouter);   
app.use('/select', selectRouter);

//서버를 띄우는 역할
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})