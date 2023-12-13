// Create web server
// Run: node comment.js
// URL: http://localhost:3000
// URL: http://localhost:3000/comment

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');

app