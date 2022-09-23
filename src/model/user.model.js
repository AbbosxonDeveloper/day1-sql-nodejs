import { fetchAll } from '../lib/postgres.js'


const GET = `
    select * from users;
`
const POST = `
    insert into users (username, parol) values
    ($1, $2) returning *
`

const DELETE = `
    delete from users where userId = ($1);
`

const UPDATE = `
    update users set username=$1 where userId = $2;
`


const GETUSER = async() => {
    try {
        return await fetchAll(GET)
    } catch (error) {
        console.log(error);
    }
}

const POSTUSER = async({ username, parol }) => {
    try {
        return await fetchAll(POST, [username, parol]);
    } catch (error) {
        console.log(error);
    }
};

const UPDATEUSER = async({ username, userId }) => {
    try {
        return await fetchAll(UPDATE, [username, userId])
    } catch (error) {
        console.log(error);
    }
}


const DELETEUSER = async({ userId }) => {
    return await fetchAll(DELETE, [userId])
}


export default {
    GETUSER,
    POSTUSER,
    UPDATEUSER,
    DELETEUSER,

};