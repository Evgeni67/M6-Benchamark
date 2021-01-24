
/** put all routes together here and export out  */

const router = require("express").Router();

const productsRouter = require("./products")
const reviewsRouter = require("./reviews")
const ordersRouter = require("./orders")
const cartsRouter = require("./carts")

router.use("/carts",cartsRouter)
router.use("/products",productsRouter)
router.use("/reviews",reviewsRouter)
router.use("/orders",ordersRouter)

module.exports = router