/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 23/04/2017
 * Time: 22:28
 */
const bodyParser = require('body-parser')
const express = require('express');
const path = require('path');
const port = 3000
const webpack = require("webpack");
const webpackConfig = require('./webpack.config.js');

const app = new express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// =========================================================================
// WEBPACK==================================================================
// =========================================================================
var compiler = webpack(webpackConfig(process.env));
compiler.watch({
    aggregateTimeout: 300,
    poll: true
}, function (err, stats) {
    console.log(err);
});


// =========================================================================
// HELPER FUNCTIONS=========================================================
// =========================================================================
function serveIndex(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
}

// =========================================================================
// APP ROUTES===============================================================
// =========================================================================
app.get('/', serveIndex);
app.get('/locations', serveIndex);
app.get('/categories', serveIndex);



// =========================================================================
// SERVE FILES FROM PUBLIC DIRECTORY========================================
// =========================================================================
app.use(express.static('public'))




app.listen(port, function () {
    console.log('Listening on ' + port)
});