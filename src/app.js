//jshint esversion: 8

const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

//Converting response from server to js object
app.use(express.json());
//Using the user router
app.use(userRouter);
// Using the task router
app.use(taskRouter);

app.listen(port, () => {
 console.log('Server started on port: ' + port);
});