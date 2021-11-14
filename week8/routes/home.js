//데이터 베이스에서 삽입기능을 구현
//필요한 모듈 import
import express from "express";
import { insertSql, selectSql } from "../database/sql";  //insertSql 모듈을 가져온다.

const router = express.Router();

//home.hbs 파일을 찾아서 render해주는 부분
router.get('/', (req, res) => {
    res.render('home');
})

//데이터를 넘겨받아서 저장
router.post('/', (req, res) => {
    const vars = req.body;                      //넘겨받은 데이터를 vars에 저장
    const var_lenth = Object.keys(req.body).length;

    //넘어온 데이터의 수에 따라서 employee인지 department데이터인지 확인하고 해당 조건에 맞는 내용 수행
    if(var_lenth > 4){
        //새로운 객체에 데이터 저장
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };
        //데이터 객체를 넘겨줘서 데이터를 저장한다.
        insertSql.setEmployee(data);
    } 
    else {
        //새로운 객체에 데이터 저장
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };
        //데이터 객체를 넘겨줘서 데이터를 저장한다.
        insertSql.setDepartment(data);
    }

    res.redirect('/');      //입력 후 페이지 설정
})

module.exports = router;    