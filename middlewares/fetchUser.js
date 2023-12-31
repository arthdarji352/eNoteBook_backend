import "dotenv/config";
import jwt from "jsonwebtoken";
const JWT_SECRET = "123456";
const fetchUser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  // console.log("token", token);

  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    const { userId } = jwt.verify(token, "" + JWT_SECRET);
    req.userId = userId;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

export default fetchUser;
