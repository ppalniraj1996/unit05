const express = require("express");

const { validate, ValidationError, Joi } = require("express-validation");

const Validation = {
  body: Joi.object({
    id: Joi.number().required(),

    name: Joi.string().required(),

    rating: Joi.number().required(),

    description: Joi.string().required(),

    genere: Joi.string().required(),

    cast: Joi.array().required(),
  }),
};

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home_Page");
});

app.post("/post", validate(Validation, {}, {}), (req, res) => {
  console.log(req.body);

  res.send("Data_Printed");
});

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(401).send("Invalid Credentials");
  }
  return res.status(402).json(err);
});

app.listen(8000, () => {
  console.log("Server started at http://localhost:8000/");
});
