//데이터 베이스의 데이터 조회
//select.hbs 파일과 연동
//필요한 모듈 import
import express from "express";          // 라우터 사용을 위해 express 선언
import { selectSql } from "../database/sql";    //sql 파일의 selectSql 모듈 사용

const router = express.Router();        // 라우터 기능 사용
//여기서 의미하는 /는 select
router.get('/', async function(req, res) {
    const department = await selectSql.getDepartment();    //데이터 저장

    //data를 render해준다.
    res.render('select', {
        title: 'IT 공대',
        department
    });
});

module.exports = router;