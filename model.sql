-- SQL

--    * join
--    * inner join
--    * left [outer] join
--    * right [outer] join
--    * full [outer] join

--    * left excluding join
--    * right excluding join
--    * full excluding join

--    * natural join
--    * cross join

drop database demo_db;
create database demo_db;
\c demo_db;

create table users (
    userId serial,
    username varchar(30) not null,
    parol varchar(30) not null
);

delete from users
where userId = 2;



insert into users(username , parol) values ('abbos', '12345');




update users set username='abu' where userId = 9;
update users set parol='777'  where userId = 9;



select 
    a.*,
    b.*
from table_a as a    
inner join table_b as b on b.letter_b = a.letter_a;

---------------------------------------

-- LEFT JOIN


id letter_a           id letter_b
1      A               1    Y
2      B               2    D

select 
    a.*,
    b.*
from table_a as a    
left join table_b as b on b.letter_b = a.letter_a;


----------------------------------------------

-- RIGHT JOIN

select 
    a.*,
    b.*
from table_a as a    
right join table_b as b on b.letter_b = a.letter_a;

------------------------------------------------------

-- FULL OUTER JOIN

select 
    a.*,
    b.*
from table_a as a    
full outer join table_b as b on b.letter_b = a.letter_a;


-------------------------------------------------




select 
    a.*,
    b.*
from table_a as a    
left join table_b as b on b.letter_b = a.letter_a
where b.letter_b is null
;

-------------------------------------------------


select 
    a.*,
    b.*
from table_a as a    
left join table_b as b
;
