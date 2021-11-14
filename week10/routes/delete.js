//데이터 베이스의 삭제 기능
//delete.hbs 파일과 연동
//필요한 모듈 import
import express from "express";                  // 라우터 사용을 위해 express 선언
import { selectSql, deleteSql } from "../database/sql";     //sql 파일의 selectSql, deleteSql 모듈 사용

const router = express.Router();        //라우터 기능 사용

//기존의 입력 값 불러오기
router.get('/', async (req, res) => {       //데이터 불러와서 저장
    const project = await selectSql.getProject();  //selectSql의 getProject 함수 이용해서 데이터 불러와서 저장
    res.render('delete', {      //data를 render해준다.
        title: "삭제 기능",
        project
    })
});

// 삭제 버튼을 눌렀을 경우 delete query를 실행하며 조회 페이지로 이동
// delete.hbs 에서 값을 post 로 넘겨주기 때문에 delete.js 에서도 post로 받는다.
router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn);

    const data = {
        Pnumber: req.body.delBtn,
    };
    await deleteSql.deleteProject(data);

    res.redirect('/delete');
});

module.exports = router;