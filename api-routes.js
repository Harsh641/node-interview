const routes = require("express").Router()
const req = require("express/lib/request")
const numberController = require("./controller/task1-controller")
const task2Controller = require("./controller/task2-controller")
const task3Controller = require("./controller/task3-controller")

routes.get("/task1", numberController.noFunction)
routes.get("/task2", task2Controller.function2)

//task3
routes.post("/addUser", task3Controller.addUser)
routes.get("/getAllUsers", task3Controller.listUsers)
routes.get("/getUserById/:userId", task3Controller.getUserById)

module.exports = routes;