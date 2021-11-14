import mysql from "mysql2";

//데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
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
    getUsers : async () => {        // user 테이블의 조회 기능
        const [rows] = await promisePool.query(`select * from user`);
        //console.log(rows)
        return rows
    },
    getDepartment : async () => {   // department 테이블의 조회 기능
        const [rows] = await promisePool.query(`select * from department`);
        //console.log(rows)
        return rows
    },
    getProject : async () => {   // project 테이블의 조회 기능
        const [rows] = await promisePool.query(`select * from project`);
        //console.log(rows)
        return rows
    },
}
// delete query
export const deleteSql = {
    deleteProject : async (data) => {        // data라는 객체 타입의 파라미어테 입력할 정보를 받아서 query문 생성
        console.log('deleteSql.deleteProject:', data.Pnumber);           //정상적으로 동작했을 때 data.Pnumber를 기준으로 데이터를 삭제한다
        const sql = `delete from project where Pnumber = "${data.Pnumber}"`;       // data.Pnumber를 조건으로 데이터를 삭제

        await promisePool.query(sql);       //sql문 만들고 쿼리함수에게 넘겨줘서 실행한다.
    },
}