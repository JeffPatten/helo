module.exports = {

    register: (req, res, next) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.register_user({ username, password })
            .then(() => res.status(200).send(res.data))
    },
    login: (req, res, next) => {
        const db = req.app.get('db');
        const {username, password} = req.body;

        db.login({username, password})
        .then(() => res.status(200).send(res.data))
        .catch(err)
    }
}