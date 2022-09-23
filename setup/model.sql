

drop database demo_db;
create database demo_db;
\c demo_db;

create table users (
    user_id serial,
    username varchar(32) not null,
    email varchar(60) not null,
    created_at timestamp default current_timestamp
);

insert into users (username, email) values ('salim', 'salim@gmail.com'),('hikmat', 'hikmat@gmail.com');








