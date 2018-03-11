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

let TemplateFunctions = function(appEnv) {
    this.functions = {
        getAsset: function (path) {
            return mix.inProduction() ? `${appEnv.BASE_URL}/${path}` : `${path}`;
        }
    };
};

TemplateFunctions.prototype.getFunctions = function() {
    return this.functions;
};

module.exports = TemplateFunctions;