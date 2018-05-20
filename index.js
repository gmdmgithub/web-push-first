
const expres = require('express');
const bodyParser = require('body-parser');
const webpush = require('web-push');
const path = require('path');

const app = expres();




//middlewares
//body parser
app.use(bodyParser.json());
//set static payh
app.use(expres.static(path.join(__dirname,"client")));


//VAPIED keys
const publicVapidKey = 'BO43dpwAjX-6c6LjCFq2Q07qr5gL43_ntFIa-CKtjIUXLGYR7JIf7D0nb4KekTGC8WmIn-pQpitXk-eEEWYBezo';
const privateVapiedKey = 'd3wA1mTpbnWVqY9Aq-s4FOQtQvMow6oxJaVYEzQfozo';
webpush.setVapidDetails('mailto:test@test.test', publicVapidKey,privateVapiedKey);


//subscribe route
app.post('/subscribe',(req,res)=>{
    //get push subscription object
    const subscription = req.body;

    //sed status - resource ok 201
    res.status(201).jeson({}); //send empty json status ok

    //create a payload
    const payload = JSON.stringify({title: 'Push test!'});

    //pass object into the send notification object

    webpush.sendNotification(subscription,payload).catch(err=>console.error(err));


});

const port = 5000;

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
    
})