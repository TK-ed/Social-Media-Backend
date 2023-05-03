import User from "../../models/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { email, name, password } = req.body;
  const exist = await User.findOne({ email });
  if (exist) {
    return res.status(400).json({ error: "User already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  console.log(password);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);

  try {
    const user = User({
      name,
      email,
      password: hashedPassword
    });

    user.save()
    res.status(200).send(user)
  } catch (err) {
    res.send(err);
  }

}
