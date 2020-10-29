const server = require("./api/server.js");
require('dotenv').config()

const port = process.env.PORT || 6000;// ONLY LOCAL
const secret  = process.env.SECRET_THING 
console.log(port, secret)

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
