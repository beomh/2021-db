//필요한 모듈 import
import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();
//여기서 의미하는 /는 select
router.get('/', async function(req, res) {
    const employee = await selectSql.getEmployee();         //데이터 저장
    const department = await selectSql.getDepartment();    //데이터 저장

    //data를 render해준다.
    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;