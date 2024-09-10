import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt from "bcrypt";

const { asyncError, errorHandler } = require("@/middleware/error");
const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST Method is allowed");
  const { email, password } = req.body;

  if (!email || !password)
    return errorHandler(res, 400, "Please enter all credentials");

  await connectDB();

  let user = await User.findOne({ email }).select("+password");

  if (!user) return errorHandler(res, 400, "User don't exist");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return errorHandler(res, 400, "Password don't match");

  const token = generateToken(user._id);

  cookieSetter(res, token, true);

  res.status(200).json({
    success: true,
    message: `Welcome back, ${user.name}`,
  });
});

export default handler;
