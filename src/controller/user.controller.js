import model from '../model/user.model.js'


const GET = async(req, res) => {
    try {
        let users = await model.GETUSER()
        res.send(users)
    } catch (error) {
        console.log(error);
    }
}


const POST = async(req, res) => {
    try {
        let user = await model.POSTUSER(req.body);
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
    }
};

const UPDATE = async(req, res) => {
    try {
        let user = await model.UPDATEUSER(req.body)
        console.log(req.body);
        res.status(200).send('changed')
    } catch (error) {
        console.log(error);
    }
}

const DELETE = async(req, res) => {
    try {
        let user = await model.DELETEUSER(req.body)
        return res.status(202).json({
            status: 204,
            message: "deleted",
        })
    } catch (error) {
        console.log(error);
    }
}


export default {
    GET,
    POST,
    UPDATE,
    DELETE
}