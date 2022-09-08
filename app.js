const CONFIG = require('./config/config');     //instantiate configuration constiables

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const TodoRouter = require('./routes/todo');

global.__basedir = __dirname;
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(cors());
app.use(logger('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', TodoRouter);

//DATABASE
const models = require('./models');
models.sequelize.authenticate().then(() => {
	console.log('Connected to SQL database:', CONFIG.db_name);
})
	.catch(err => {
		console.error('Unable to connect to SQL database:', CONFIG.db_name, err);
	});
if (CONFIG.app === 'dev') {
	 models.sequelize.sync();//creates table if they do not already exist
	//models.sequelize.sync({ force: true });//deletes all tables then recreates them useful for testing and development purposes
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
// eslint-disable-next-line
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err
	});
});

module.exports = app;
