const express = require('express')
const shopify = require('@shopify/shopify-api')
const app = express()


const client = new shopify.clients.Rest({ session });
const response = client.get({ path: 'shop' });

const port = 1200
app.listen(port, () => {
    console.log(`your application is running on ${port}`);
});