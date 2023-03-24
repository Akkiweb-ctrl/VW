const jwt = require("jsonwebtoken");
const APP_SECRET = "vwmyonlineappsecretkey";
const USERNAME = "admin";
const PASSWORD = "Admin@123";

//following to used to determine whether requests needs an authorisation.

const mappings = {
  get: ["/api/orders", "/orders"],
  post: ["/api/products", "/products", "/api/categories", "/categories"],
};

function requiresAuth(method, url) {
  return (
    (mappings[method.toLowerCase()] || []).find((p) => url.startsWith(p)) !=
    undefined
  );
}
module.exports = function (req, res, next) {
  if (req.url.endsWith("/login") && req.method == "POST") {
    if (
      req.body &&
      req.body.name == USERNAME &&
      req.body.password == PASSWORD
    ) {
      let token = jwt.sign(
        {
          data: USERNAME,
          expiresIn: "1hr",
        },
        APP_SECRET
      );
      res.json({ success: true, token: token });
    } else {
      return res.json({ success: false });
    }
    res.end();
    return;
  } else if (requiresAuth(req.method, req.url)) {
    let token = req.headers["authorisation"] || "";
    if (token.startsWith("Bearer<")) {
      token = token.substring(7, token.length );
      try {
        jwt.verify(token, APP_SECRET);
      } catch (err) {}
    }
    res.statusCode=401;
    res.end();
    return;
  }
  next();
};
