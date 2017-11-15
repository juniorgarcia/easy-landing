/*
 |--------------------------------------------------------------------------
 | Generating the App Env variables.
 |--------------------------------------------------------------------------
 | Here we process the keys from the .env file.
 | Laravel Mix automatically injects variables from the .env file which starts with "MIX_".
 | Here, we map those variables and clean their names removing the "MIX_" prefix and creating the "appEnv"
 | variable to be used along your application.
 */
require('dotenv').config();
const appEnv = {};

const keysToGet = Object.keys(process.env).filter((key) => key.indexOf('MIX_') === 0);

if (keysToGet.length > 0) {
    keysToGet.map((key) => {
        // Cleaning the appEnv vars, removing "MIX_" which comes from Laravel Mix
        appEnv[key.replace('MIX_', '')] = process.env[key];
    });
}

module.exports = appEnv;