const express = require("express");
const app = express();
const router = require("./routers/auth-router");

app.use("/api/auth", router);

const port = 5000;
app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}/api/auth`);
})