export const signup = (req, res) => {
  console.log("signupUser");
};

export const login = (req, res) => {
  console.log("loginUser");
  const param = req.query.param;
  res.send(`${param} dasdad`);
};

export const logout = (req, res) => {
  console.log("logoutUser");
};

export const loginPost = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  res.send(`${email} + ${password}`);
};
