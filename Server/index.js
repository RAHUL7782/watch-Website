const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const dotenv=require("dotenv"); 
const cors= require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const passport = require('passport'); 
// const cookieSession = require('cookie-session'); 
// require('../Server/passport'); 

const router=require("./routes/ProductRoutes")
dotenv.config()
app.use(router)

mongoose.connect("mongodb://127.0.0.1:27017/cloudneary",)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err))


// let useremail="Rhul@gmail.com";
// let username="Rahil Jain";
// let userpicture="mypic";

// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions))


// app.use(cookieSession({ 
// 	name: 'google-auth-session', 
// 	keys: ['key1', 'key2'] 
// })); 




// app.use(passport.initialize()); 
// app.use(passport.session()); 
	

// app.get('/', (req, res) => { 
// 	res.send("<button><a href='/auth'>Login With Google</a></button>") 
// }); 

// // Auth 
// app.get('/auth' , passport.authenticate('google', { scope: 
// 	[ 'email', 'profile' ] 
// })); 

// // Auth Callback 
// app.get( '/auth/google/callback', 
// 	passport.authenticate( 'google', { 
// 		successRedirect: 'http://localhost:3000/auth/callback/success', 
// 		failureRedirect: '/auth/callback/failure'
// })); 

// // Success 
// app.get('/auth/callback/success' , (req , res) => { 
//   console.log(req.user);
// 	if(!req.user) 
// 		res.redirect('/auth/callback/failure'); 
// 	//res.send("Welcome " + req.user.email+ " Name : "+  req.user._json.name); 
// 	//return res.status(200).json({ data: result });
// 	//res.json({email:req.user.email, name:req.user._json.name});
// 	console.log(req.user.email);
// 	useremail=req.user.email;
// 	username=req.user._json.name;
// 	userpicture=req.user._json.picture;
// }); 



//   app.get('/user1',(req, res) => {
// 	//res.json(req.user);
// 	res.json({name:username, email:useremail, img:userpicture});
//   });

// // failure 
// app.get('/auth/callback/failure' , (req , res) => { 
// 	res.send("Error"); 
// }) 







const PORT=process.env.PORT || 5000;


app.listen (PORT , ()=>{
    console.log(`Server is running in ${PORT}`);
})