import express from "express";

const app = express();
const port = 3000;

const logger = (req, res, next)=>{
  console.log("The method is: ", req.method, " and url is ", req.url);
  next()
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
