require('dotenv').config();//instatiate environment variables

const CONFIG = {}; //Make this global to use all over the application
CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '9000';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || '';
CONFIG.db_user      = process.env.DB_USER       || 'root';
CONFIG.db_password  = process.env.DB_PASSWORD   || '';
CONFIG.host         =  process.env.BE_HOST  || 'http://127.0.0.1:9000'    ;
CONFIG.db_connection_string = process.env.DB_CONNECTION_STRING;
CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

module.exports = CONFIG;