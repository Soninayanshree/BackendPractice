var express = require('express');
var router = express.Router();
var userModel = require('./users');

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index');
// });
//------------------------------------------------------------
//Monggodb create,read,delete
//doc created by schema 
// router.get('/create', async function(req, res){
//   const createduser = await userModel.create({
//     username : "nayan",
//     name : "nayans",
//     age  : 22,
//   })
//   res.send(createduser);
// });

// router.get('/allusers', async function(req,res){
//   const allusers = await userModel.findOne({username : "nayans"});
//   console.log(allusers);//to check if its null
//   res.send(allusers);
// })

// router.get('/delete', async function(req,res){
//   const deleteduser = await userModel.findOneAndDelete({
//     username : "nayan",
//   });
//   res.send(deleteduser);
// })
//--------------------------------------------------------------
//session create , read ,delete
// router.get('/',function(req,res){
//   req.session.ban = true;
//   res.render("index");
// });

// router.get('/checkban',function(req,res){
//   if(req.session.ban === true){
//     res.send("you are ban");
//   }
//   else {
//     res.send("not banned");
//   } 
// });

// router.get('/delete',function(req,res){
//   req.session.destroy(function(err){
//     if(err)throw err;
//   });
//   res.send("baned removed");
// });
//----------------------------------------------------------------
//cookie create ,read ,delete
router.get('/', function(req,res){
  res.cookie("age" , 25);//name,value
  res.render("index");
});

router.get('/', function(req,res){
  res.cookie("age" , 25);//name,value
  res.render("index");
});

router.get('/read', function(req,res){
  console.log(req.cookies.age);
  res.send("check");
});

router.get('/delete', function(req,res){
  res.clearCookie("age");
  res.send("clear cookie");
});

module.exports = router;
