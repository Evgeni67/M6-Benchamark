const router = require("express").Router();
const uniqid = require('uniqid');
const db = require("../../utils/db");

// SELECT *
// FROM purchase
// INNER JOIN product
// ON product.product_id = purchase.product_id
// INNER JOIN profile
// ON profile.user_id = profile.user_id


//working
router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM product;");
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

//working
router.get("/:id", async (req, res, next) => {
    try {
      const { rows } = await db.query(`SELECT * FROM product WHERE product_id = '${req.params.id}'`);
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
        const {name,description,category,price,imageUrl} = req.body
      const result = await
       db.query(`INSERT INTO product(product_id,product_name,product_description,product_category,product_price,product_img) VALUES ('${_id}','${name}','${description}','${category}','${price}','${imageUrl}');`);
      res.send(description);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });

  //working
  router.put("/:id", async (req, res, next) => {
    try {
        const {name,description,category,price,imageUrl} = req.body
        const query = `UPDATE product SET product_name='${name}',product_description='${description}', product_category='${category}', product_price='${price}' , product_img ='${imageUrl}' WHERE product_id='${req.params.id}'`
      const result = await db.query(query);
      res.send(result);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });

  router.delete("/:id", async (req, res, next) => {
    try {
        const query = `DELETE FROM product WHERE product_id = '${req.params.id}'`
      const result = await db.query(query);
      res.send("Deleted");
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
module.exports = router;
