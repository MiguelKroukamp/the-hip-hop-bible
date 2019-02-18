let express = require('express');
let router = express.Router();

//Login Page - GET REQUEST
router.get('/register',(req,res)=> {
   res.send('');
})


//Register Page - GET REQUEST
router.get('/register',(req,res)=> {
  res.send('register page');
});

module.exports = router;