/*
 |--------------------------------------------------------------------------
 | Template utility functions
 |--------------------------------------------------------------------------
 | The container to place the functions to be injected in the template
 | system.
 | All these functions will be available inside the .pug files
 |
 */

let mix = require('laravel-mix');
let manifestMap = {};

if (mix.inProduction()) {
    manifestMap = require('./mix-manifest.json');
}

let TemplateFunctions = function(appEnv) {
    this.functions = {
        getAsset: function (path) {
            let asset = "";

            if (mix.inProduction()) {
                asset = manifestMap[`/${appEnv.DIST_PATH}${path}`];
            } else {
                asset = path;
            }

            return asset;
        }
    };
};

TemplateFunctions.prototype.getFunctions = function() {
    return this.functions;
};

module.exports = TemplateFunctions;