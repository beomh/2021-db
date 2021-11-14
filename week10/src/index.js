//사용하려고하는 모듈을 import한다.
import express from "express";      // node_modules 의 express 모듈 사용
import logger from "morgan";        // node_modules 의 morgan 모듈 사용
import path from "path";            // node_modules 의 path 모듈 사용 /경로 설정

//사용자가 정의한 모듈을 import한다.
import loginRouter from "../routes/login";      // routes 폴더의 login.js 파일 사용 /홈화면 기능
import selectRouter from "../routes/select";    // routes 폴더의 select.js 파일 사용 /데이터 조회 화면 기능
import deleteRouter from "../routes/delete";    // routes 폴더의 delete.js 파일 사용 /삭제 화면 기능

const PORT = 3000;      // 포트를 3000번으로 사용한다.

const app = express();  //http기능을 사용할 수 있게해주는 모듈 사용, app이라는 객체 이름으로 사용할 것이다.

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));     //log를 사용하기위해 선언

//기본적인 라우트 주소 설정
app.use('/', loginRouter);
app.use('/select', selectRouter);   
app.use('/delete', deleteRouter);

//서버를 실행시키는 역할
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})