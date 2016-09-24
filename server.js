// Babel ES6/JSX Compiler
require('babel-register');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var async = require('async');
var colors = require('colors');
var mongoose = require('mongoose');
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig');
var xml2js = require('xml2js');
var _ = require('underscore');

var config = require('./config');
var routes = require('./app/routes');
var Daily = require('./models/daily');

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.set('port', process.env.PORT || 8000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));


/**
 * POST /api/daily
 * Create daily data, Return dailydata
 * */
app.post('/api/daily', function (req, res, next) {
    var date = new Date();
    Daily
        .find({ date: date.toDateString() })
        .exec(function (err, daily) {
            if(err) return next(err);

            if(daily.length == 0){
                var today = new Daily({
                    date: date.toDateString(),
                    inspire: "A new day, a new goal"
                });
                today.save(function (err) {
                    if(err) return(err);
                    Daily.find({ date: date.toDateString() })
                        .exec(function (err, daily) {
                            if(err) return next(err);
                            res.send(daily);
                        });
                });
            }else{
                res.send(daily);
            }
        });
});

/**
 * GET /api/daily
 * Return the daily data by date
 */
app.get('/api/daily', function (req, res, next) {
    var date = new Date();
    Daily
        .findOne({ date: date.toDateString() })
        .exec(function (err, daily) {
            if(err) return next(err);
            res.send(daily);
        })
});

/**
 * PUT /api/daily/mood
 * Return the daily data of today
 */
app.put('/api/daily/mood', function (req, res, next) {
    var mood = req.body.mood;
    Daily.findById(req.body.id, function (err, daily) {
        if(err) return next(err);

        daily.mood = mood;
        daily.save(function (err) {
            if(err) return next(err);
            res.send(daily);
        })
    });
});

/**
 * POST /api/daily/todo
 * Post the todo data
 * */
app.post('/api/daily/todo', function (req, res,next) {
    var date = new Date();
    Daily
        .findOne({ date: date.toDateString() })
        .exec(function (err, daily) {
            if(err) return next(err);
            daily.todos.push(req.body);
            daily.save(function (err) {
                if(err) return next(err);
                res.send(daily);
            })
        })
});

app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RouterContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

app.use(function(err, req, res, next) {
    console.log(err.stack.red);
    res.status(err.status || 500);
    res.send({ message: err.message });
});


// var server = require('http').createServer(app);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
