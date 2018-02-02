//making a config file is when we use user authentication there are some variable or some configurations that we will want to use and we can just store them here.  Perfect cubby hole for the information

require("dotenv").config();
module.exports = {
    port: process.env.Port
}

//the .env is an environment variable but is contextual.  Depending on what context the keyword "this" is in has different value.

//.PORT is a placeholder for the environment for where the port name is assigned a value.

//when we are in our development environment we are going to give it a particular port.

//when we are in our deployment environment it might be a different port.


/* NOTE FOR THE .env FILE SINCE I CAN'T TAKE NOTES IN THAT FILE:

