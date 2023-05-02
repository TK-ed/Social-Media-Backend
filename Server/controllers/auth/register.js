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

  try {
    const user = User({
      name,
      email,
      password: hashedPassword
    });

    user
      .save()
      .then((user) => {
        res.status(200).send(result);
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (err) {
    res.send(err);
  }
}
