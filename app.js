var sha256 = require('js-sha256');
const express=require('express');
const ejs = require('ejs');
var unirest = require("unirest");
//const bodyParser = require('body-parser');
var otpGenerator = require('otp-generator');

const app=express();
app.engine('htm',ejs.renderFile);
app.set('view engine','htm');


app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
res.render('index');
});

app.post('/', (req, res) => {
	console.log(req.body)
	var phonenumber=req.body.num;
	var phonenumberstring = phonenumber.toString();
	console.log(req.body.num)
  	var req = unirest("POST", "https://www.fast2sms.com/dev/bulk");

        req.headers({
          "authorization": ""
        });
        //const OTP=otpGenerator.generate(6, { upperCase: false, specialChars: false });
		const OTP=sha256(phonenumberstring.concat("nkjrenj@&#4jkvn")).substring(1, 7);
		console.log(sha256(phonenumberstring.concat("nkjrenj@&#4jkvn")).substring(1, 7));
        req.form({
          "sender_id": "FSTSMS",
          "message": OTP,
          "language": "english",
          "route": "p",
          "numbers": phonenumberstring,
        });

        req.end(function (res) {
          if (res.error) throw new Error(res.error);
          console.log(res.body);
        });
});

const server=		app.listen(3000,()=>console.log('server started '));
