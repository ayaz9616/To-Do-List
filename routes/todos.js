// const express=require("express");
// const router=express.Router();

// const{createTodo}=require("../controllers/createTodo");
// const{getTodo,getTodoById}=require("../controllers/getTodo");
// const{updateTodo}=require("../controllers/updateTodo");
// const{deleteTodo}=require("../controllers/deleteTodo");

// router.post("/createTodo",createTodo);
// router.get("/getTodos",getTodo);
// router.get("/getTodos/:id",getTodoById);
// router.put("./updateTodo/:id",updateTodo);
// router.delete("/deleteTodo/:id",deleteTodo);

// module.exports=router;

// Corrected todos.js file
const express = require("express");
const router = express.Router();

const { createTodo, getTodo, getTodoById, updateTodo, deleteTodo } = require("../controllers");

// Define routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo); // Ensure getTodo is defined and imported correctly
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
