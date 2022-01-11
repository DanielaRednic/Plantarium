const router = require("express").Router();   
const stripe = require("stripe")('sk_test_51K0mTYIWHwfKpmv5xurA1czcYXRyFcfDeEJEtdgx93VlEDrH7rDs1IIwg01sbykLQlcn4rebfmL8l5WECLRJQFDb00YJl1D1tA'); 


router.post("/payment", (req,res)=>{
    stripe.charges.create({
        source:'tok_visa',
        amount:req.body.amount,
        currency:"usd",
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }else{
            res.status(200).json(stripeRes)
        }
    })
})

module.exports= router;