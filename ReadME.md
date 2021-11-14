# 2021-db

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:beomh/2021-db.git
    - (token을 사용하는 경우) git clone http://github.com/beomh/2021-db.git
2. week3 폴더로 이동
    > cd week3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', //본인의 mysql user id
        database: 'tutorial', //본인이 만든 데이터베이스 이름
        password: 'password', //본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>
5. 서버 실행(powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
6. 기본화면
    - localhost:3000으로 들어가면 기본 화면
    - (데이터베이스 설정이 된 경우)localhost:3000으로 들어가면 DB에 있는 값을 불러와서 출력

### 테이블 내용
#### student 테이블
- 학생 정보가 담긴 테이블
- 필드 : id(학번), name(이름), deparment(학과), grade(학년), start(입학년도), email

## 8주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우)git clone git@github.com:beomh/2021-db.git
    - (token을 사용하는 경우)git clone https://git@github.com:beomh/2021-db.git
2. week8 폴더로 이동
    > cd week8
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', //본인의 mysql user id
        database: 'tutorial', //본인이 만든 데이터베이스 이름
        password: 'password', //본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>
5. 서버 실행(powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
6. Employee 데이터 삽입란에 정보 입력 & 삽입하면 데이터베이스의 employee 테이블에 데이터 삽입
7. Department 데이터 삽입란에 정보 입력 & 삽입하면 데이터베이스의 department 테이블에 데이터 삽입
8. 서버에서 데이터 삽입 후 확인 및 수정
    - 브라우저에서 주소창에 localhost:3000/select 입력하면 employee, department 테이블 정보 확인 가능
    - 브라우저에서 주소창에 localhost:3000/update/department 입력하면 department 테이블 정보 확인 및 부서명 수정 가능
    - 브라우저에서 주소창에 localhost:3000/update/epmloyee 입력하면 employee 테이블 정보 확인 및 급여 수정 가능

## <span style="color:red">직원 테이블 작성법</span>
이름|middle name|성|사원번호|생일
---|---|---|---|---|
영희|M|김|12201111|1990-01-01|
길동|A|홍|12191111|1991-01-01|
순신|B|이|12181111|1992-03-03|

## <span style="color:red">부서 테이블 작성법</span>

부서명|부서번호|부서_사원번호|부서창설연도
---|---|---|---|
연구|1|11112222|2000-01-01|
제조|2|11113333|2000-03-03|

### 테이블 내용
#### department 테이블
- 부서 정보가 담긴 테이블
- 필드 : Dname(부서이름), Dnumber(부서번호), Mgr_ssn(부서_사원번호), Mgr_start_date(부서창설연도)

### employee 테이블
- 직원 정보가 담긴 테이블
- 필드 : Fname(이름), Minit(중간이름), Lname(성), Ssn(사원번호), Bdate(생일), Address(주소), Sex(성별), Salary(급여), Super_ssn(참조사원번호), Dno(부서번호)
## 10주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우)git clone git@github.com:beomh/2021-db.git
    - (token을 사용하는 경우)git clone https://git@github.com:beomh/2021-db.git
2. week10 폴더로 이동
    > cd week10
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', //본인의 mysql user id
        database: 'tutorial', //본인이 만든 데이터베이스 이름
        password: 'password', //본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>
5. 서버 실행(powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
6. 서버 실행하면 로그인 화면(user 테이블에 저장된 계정)
    - 관리자 계정 ID: admin, password: admin1234 -> project 테이블의 데이터 삭제 가능
    - 사용자 계정 ID: test, password: test1234 -> department 테이블의 데이터 조회 가능

### 테이블 내용
#### user 테이블
- 계정 정보가 담긴 테이블
- 필드 : id(아이디), password(비밀번호), role(역할)

#### department 테이블
- 부서 정보가 담긴 테이블
- 필드 : Dname(부서명), Dnumber(부서번호)

#### project 테이블
- 프로젝트 정보가 담긴 테이블
- 필드 : Pname(프로젝트명), Pnumber(프로젝트번호)

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.