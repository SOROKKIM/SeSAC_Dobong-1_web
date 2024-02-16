-- Active: 1707112054461@@127.0.0.1@3306@sesac
SHOW TABLES;

create table visitor(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMText
);

drop table visitor;

DESC visitor;

INSERT INTO visitor(name, comment) VALUES('allie', 'hi~');
INSERT INTO visitor VALUES (NULL, '홍길동', '동번쩍서번쩍~');

select * from visitor;


##############[DCL]#################
##새로운 유저 생성
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';
-- 비밀번호 바꾸고 싶다면!
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password by '1234';

--위 두줄 한번에 처리 (새로운 user + 비밀번호 변경)
CREATE user 'sesac'@'%' IDENTIFIED with mysql_native_password by '1234';

##권한 부여
-- 모든 db에 접근 가능하도록, sesac 계정에 db 접근 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;

-- 캐시 삭제 -> 현재 사용중인 mysql 캐시를 지우고 새로운 설정을 적용
FLUSH PRIVILEGES;