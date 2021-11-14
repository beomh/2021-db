import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();        //라우터 기능 사용

//기존의 입력 값 불러오기
router.get('/employee', async (req, res) => {       //데이터 불러와서 저장
    const emp_res = await selectSql.getEmployee();  //selectSql의 getEmployee함수 이용해서 데이터 불러와서 저장
    res.render('updateEmployee', {      
        title: "직원 테이블 갱신",
        emp_res
    });
});

//기존의 입력 값 불러오기
router.get('/department', async (req, res) => {    //데이터 불러와서 저장
    const dept_res = await selectSql.getDepartment();  //selectSql의 getEmployee함수 이용해서 데이터 불러와서 저장
    res.render('updateDepartment', {
        title2: "부서 테이블 갱신",
        dept_res
    });
});

//수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/employee', async (req, res) => {
    const vars = req.body;

    const data = {
        Salary: vars.salary
    }
    await updateSql.updateEmployee(data);       //데이터를 받아서 업데이트하는 함수 호출

    res.redirect('/select');
});

//수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/department', async (req, res) => {
    const vars = req.body;      //변수를 전달받음
    console.log(vars.dname);    //전달이 잘 되었는지 확인을위한 출력
    
    //data 객체를 만들어서 Dname을 수정
    const data = {
        Dname: vars.dname
    }
    await updateSql.updateDepartment(data);     //데이터를 받아서 업데이트하는 함수 호출

    res.redirect('/select');        //수정하고 localhost:3000/select로 돌아감
});

module.exports = router;