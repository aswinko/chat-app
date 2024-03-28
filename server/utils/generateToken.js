import jwt from "jsonwebtoken"

const genereateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent xss attack
        sameSite: "strict", // crf attack
        secure: process.env.NODE_ENV !== "development"

    })
}

export default genereateTokenAndSetCookie