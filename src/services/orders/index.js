const router = require("express").Router();
const uniqid = require('uniqid');
const db = require("../../utils/db");

//working
router.get("/", async (req, res, next) => {
    try {
      const { rows } = await db.query("SELECT * FROM purchase;");
      res.send(rows);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  //working
  router.get("/:id", async (req, res, next) => {
    try {
      const { rows } = await db.query(`SELECT * FROM purchase WHERE order_id='${req.params.id}';`);
      res.send(rows);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  //working
  router.post("/", async (req, res, next) => {
    try {
        const id = uniqid()
        const {user_id,product_id} = req.body
      const { rows } = await db.query(`INSERT INTO purchase VALUES ('${id}','${user_id}','${product_id}')`);
      res.send(rows);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  //working
  router.put("/:id", async (req, res, next) => {
    try {
        const {user_id,product_id} = req.body
        const query = `UPDATE purchase SET order_id ='${req.params.id}', user_id='${user_id}', product_id='${product_id}' WHERE order_id='${req.params.id}'`
        const result = await db.query(query);
        res.send(result);
     }catch(e){
console.log(e)
     }
   })
   router.delete("/:id", async (req, res, next) => {
    try {
        const query = `DELETE FROM purchase WHERE order_id='${req.params.id}'`
        const result = await db.query(query);
        res.send(result)
    }catch(e){
        console.log(e)
    }})
module.exports = router;
