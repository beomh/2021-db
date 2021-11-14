//필요한 모듈 import
// view폴더의 login.hbs 파일과 연동
// login.hbs 파일에서 데이터가 넘어옴
import express from "express";
import { selectSql } from "../database/sql";  //selectSql 모듈을 가져온다.

const router = express.Router();            // express에서 router기능 사용

//login.hbs 파일을 찾아서 render해주는 부분
router.get('/', (req, res) => {
    res.render('login');
})

// 데이터를 넘겨받아서 저장
// 로그인 버튼을 눌렀을 때 처리하는 부분
// login.hbs 에서 값을 post 로 넘겨주기 때문에 login.js 에서도 post로 받는다.
router.post('/', async (req, res) => {
    const vars = req.body;                      //넘겨받은 데이터를 vars에 저장
    const users = await selectSql.getUsers();   
    let whoAmI = '';        // 저장할 데이터 담을 변수
    let checkLogin = false; // 초기값으로 false해두고 데이터가 맞다면 true로 변환
    
    // 옛날 방식
    // for(let i = 0; i < users.length; i++){
    //     if(vars.id === user[i].id && vars.password === user[i].password){
    //         ;
    //     }
    // }
    // map함수를 이용한 로그인 확인하는 파트
    users.map((user) => {
        console.log(user.Id);
        if(vars.id === user.Id && vars.password === user.Password){     // 입력받은 데이터가 테이블의 데이터와 동일하면
            console.log('login success!');              // 다음과 같은 메세지 띄우고 로그인
            checkLogin = true;                          // 로그인에 성공하면 true변환
            if(vars.id === 'admin'){                    // 로그인 시 관리자 계정인지 사용자 계정인지 확인
                whoAmI = 'admin';
            }
            else{
                whoAmI = 'user';
            }
        }
    })
    console.log('whoAmI:', whoAmI);
    
    if (checkLogin && whoAmI === 'admin') {             // 로그인이 성공했고 관리자 계정이라면
        res.redirect('/delete');                        // delete 기능하는 페이지로 접속
    } else if (checkLogin && whoAmI === 'user'){        // 사용자 계정이라면
        res.redirect('/select');                        // select 기능하는 페이지로 접속
    } else{
        //console.log('login failed!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");   //그렇지 않으면 로그인 실패로 간주하고 메세지 띄움
    }
})
module.exports = router;