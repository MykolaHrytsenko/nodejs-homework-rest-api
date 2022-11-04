const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { RequesError } = require("../helpers");
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const [bearer, token] = authorization.split(" ");
        if (bearer !== "Bearer") {
            throw RequesError(401);
        }
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (!user) {
            throw Error("Unauthorized");
        }
        req.user = user;
        next()

    }
    catch (error) {
        if (!error.status) {
            error.status = 401;
        }
        next(error);
    }
}

module.exports = authenticate;