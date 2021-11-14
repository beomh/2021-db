import mysql from "mysql2";

//데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'buttnine42#',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

//async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql =  {
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);
        //console.log(rows)
        return rows
    },
}
// insert query
export const insertSql = {
    // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
    setEmployee : async (data) => {     //home에서 render한 데이터를 받아서 쿼리문 생성
        const sql = `insert into employee values (            
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;

            await promisePool.query(sql);       //쿼리 함수를 수행하면 sql이라는 것을 query가 실행한다.
    },

    // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
    setDepartment : async (data) => {   //home에서 render한 데이터를 받아서 쿼리문 생성
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`; // insert를 하기 위한 data를 받는다.

            await promisePool.query(sql);       //쿼리 함수를 수행하면 sql이라는 것을 query가 실행한다.
    },
}

// update query
export const updateSql = {
    updateEmployee : async (data) => {
        // where 조건을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set salary = "${data.Salary}" where Minit = "A"`;       //Minit이 A인 사람에 대해서 salary를 바꾸겠다는 쿼리문
        await promisePool.query(sql);       //sql문 만들고 쿼리함수에게 넘겨줘서 실행한다.

    },
    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumbr = 0`;       //Dnumber가 0인 사람의 이름을 바꿔준다.
        await promisePool.query(sql);       //sql문 만들고 쿼리함수에게 넘겨줘서 실행한다.
    }
}