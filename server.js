/**
 * Created by juliengarcia on 28/08/14.
 */
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8086);