/* eslint-disable new-cap */
/* eslint-disable indent */

const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('registration');
  });

module.exports = router;
