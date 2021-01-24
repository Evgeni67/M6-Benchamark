const router = require("express").Router();
const uniqid = require('uniqid');
const db = require("../../utils/db");

//working
router.get("/shopping-cart/:user_id", async (req, res, next) => {
    try {
      const { rows } = await db.query(`SELECT * FROM purchase WHERE user_id = '${req.params.user_id}';`);
      res.send(rows);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });

   //working
   router.delete("/shopping-cart/:user_id/:product_id", async (req, res, next) => {
    try {
        const query = `DELETE FROM purchase WHERE user_id='${req.params.user_id}' AND product_id = '${req.params.product_id}'`
        const result = await db.query(query);
        res.send(result)
    }catch(e){
        console.log(e)
    }})
module.exports = router;
