const express = require("express");
const app = express();
const port = 3000;
const db = require("./models/index");
const { utilisateur } = require("./controllers/utilisateur.controller.js");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

var cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const options = {
  definition: {
    openai: "3.0.0",
    info: {
      title: "Mon API RESTful",
      version: "1.0.0",
      description: "Une description de mon API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

db.mongoose.connect("mongodb://127.0.0.1:27017/test");

console.log(utilisateur);

require("./routes/user.routes")(app);
require("./routes/recette.routes")(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
