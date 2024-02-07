CREATE TABLE customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

desc customer;

insert into customer VALUES('aaa', '손흥민', '1992-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) VALUES ('ddd', '조현우', '2001-05-31');
select * from customer;

CREATE TABLE orderlist (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    Foreign Key (customer_id) REFERENCES customer(id) 
    on update CASCADE on delete CASCADE
);
-- Foreign key (현재 테이블 컬럼 이름 fk) references 기준테이블(기준테이블 컬럼이름 pk)
-- 다른 테이블의 기본키랑 연결되는게 외래키
-- on update CASCADE : 기준 테이블(customer)의 데이터가 변경되면 참조 테이블(orderlist)의 데이터도 변경
-- on delete CASCADE : 기준 테이블의 데이터 삭제되면 참조테이블의 데이터도 삭제됨

-- 테이블을 삭제 혹은 생성할때
-- 항상 기준 테이블이 먼저 만들어져 있어야 된다.
-- fk-pk 관계로 연결된 테이블은 외래키가 설정된 테이블(orderlist) 을 먼저 삭제

INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

select * from orderlist;

-- join
-- 1. inner join, INNER JOIN 과 ON 사용
select *
from customer
    INNER JOIN orderlist
    on customer.id = orderlist.customer_id;
-- 2. , 와 where 로 inner join tkdyd
select orderlist.id, customer.id, customer.name, orderlist.product_name
from customer, orderlist 
where customer.id = orderlist.customer_id;
--inner join 을 , 로 구분

-- 3. inner join, on 사용, where 조건과 함께 사용
select *
from orderlist INNER JOIN customer
    ON customer.id = orderlist.customer_id
WHERE orderlist.quantity >= 5;

-- 4. table 별칭지어서 접근 (as 이용)
select o.id as order_id, c.id as customer_id, c.name, o.product_name
FROM customer as c, orderlist as o
where c.id = o.customer_id;


-- natural JOIN : 자동으로 찾아서 조인
SELECT *
FROM orderlist NATURAL JOIN customer;




-- outer join
select *
from orderlist left OUTER JOIN customer
    on customer.id = orderlist.customer_id;

select *
from orderlist RIGHT OUTER JOIN customer
    on customer.id = orderlist.customer_id;