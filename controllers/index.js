let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'VeggiMedia' });
});

/* GET: /about => load About view */
router.get('/about', (req, res) => {
  let date = new Date();

  res.render('about', {
    title: 'About',
    date: date
  });
});

/* GET: /register */
router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register'
  });
});

/* GET: /login */
router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login'
  });
});

module.exports = router;
