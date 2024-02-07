CREATE TABLE A_college(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age int NOT NULL
);
drop table A_college;

desc A_college;

CREATE TABLE B_college(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age int NOT NULL
);
desc B_college;

CREATE TABLE subjectlist(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    subjectId VARCHAR(10) NOT NULL,
    subject VARCHAR(10) NOT NULL
);
drop table subjectlist;

desc subjectlist


insert into A_college VALUES('20115544', 'a', 34);
insert into A_college VALUES('20156677', 'b', 31);
insert into A_college VALUES('20227755', 'c', 25);
insert into A_college VALUES('20232223', 'd', 23);
insert into A_college VALUES('20201144', 'e', 23);
insert into A_college VALUES('20145145', 'f', 30);
insert into A_college VALUES('20180919', 'g', 26);
SELECT * From `A_college`;

insert into B_college VALUES('2022091994', 'h', 29);
insert into B_college VALUES('2020101021', 'i', 23);
insert into B_college VALUES('2018187566', 'j', 26);
SELECT * From `B_college`;

INSERT INTO subjectlist (subjectId, subject) VALUES ('20115544', '네트워크');
INSERT INTO subjectlist (subjectId, subject) VALUES ('20115544', '알고리즘');
INSERT INTO subjectlist (subjectId, subject) VALUES ('20156677', '알고리즘');
INSERT INTO subjectlist (subjectId, subject) VALUES ('20227755', '네트워크');
INSERT INTO subjectlist (subjectId, subject) VALUES ('20232223', 'C언어');
INSERT INTO subjectlist (subjectId, subject) VALUES ('20145145', '캡스톤');
INSERT INTO subjectlist (subjectId, subject) VALUES ('20180919', '캡스톤');
INSERT INTO subjectlist (subjectId, subject) VALUES ('20180919', 'C언어');
INSERT INTO subjectlist (subjectId, subject) VALUES ('20180919', '네트워크');
INSERT INTO subjectlist (subjectId, subject) VALUES ('2022091994', 'C언어');
INSERT INTO subjectlist (subjectId, subject) VALUES ('2022091994', '캡스톤');
INSERT INTO subjectlist (subjectId, subject) VALUES ('2022091994', '웹프레임워크');
INSERT INTO subjectlist (subjectId, subject) VALUES ('2018187566', 'C언어');
INSERT INTO subjectlist (subjectId, subject) VALUES ('2018187566', '네트워크');
INSERT INTO subjectlist (subjectId, subject) VALUES ('2018187566', '캡스톤');

SELECT * From subjectlist;

-- inner join (학번끼리 같을때)
select *
from `A_college`
    INNER JOIN `subjectlist`
    on A_college.id = subjectlist.`subjectId`;

-- 2. left outer JOIN
select *
from `A_college` left OUTER JOIN subjectlist
    on A_college.id = subjectlist.`subjectId`

-- 3. right outer JOIN
select *
from `A_college` RIGHT OUTER JOIN subjectlist
    on A_college.id = subjectlist.`subjectId`

-- 4. natural join
select *
from `A_college` NATURAL JOIN
subjectlist;