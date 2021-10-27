/* eslint-disable new-cap */
/* eslint-disable indent */

const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('login');
  });

module.exports = router;
