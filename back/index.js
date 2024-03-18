const app = require("./src/server");
const dbCon = require("./src/Config/dbCon");

dbCon()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
