const router = require("express").Router();
const uniqid = require('uniqid');
const db = require("../../utils/db");

//working
router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM review;");
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
//working
router.get("/:id", async (req, res, next) => {
    try {
      const { rows } = await db.query(`SELECT * FROM review WHERE review_id = '${req.params.id}'`);
      res.send(rows);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
//working
  router.post("/", async (req, res, next) => {
    try {
        const _id = uniqid()
        const {product_id,user_id,comment,rate} = req.body
      const result = await
       db.query(`INSERT INTO review VALUES ('${_id}','${product_id}','${user_id}','${comment}','${rate}');`);
      res.send("Added");
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  //working
  router.put("/:id", async (req, res, next) => {
    try {
        const {product_id,user_id,comment,rate} = req.body

        const query = `UPDATE review SET review_id = '${req.params.id}', product_id = '${product_id}', user_id = '${user_id}', comment = '${comment}', rate = ${rate}  WHERE review_id='${req.params.id}'`
      const result = await db.query(query);
      res.send(result);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });

  //working
  router.delete("/:id", async (req, res, next) => {
    try {
        const query = `DELETE FROM review WHERE review_id = '${req.params.id}'`
      const result = await db.query(query);
      res.send("Deleted");
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
module.exports = router;
