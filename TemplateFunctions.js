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

class TemplateFunctions {
    constructor(appEnv, manifest) {
        this.manifestMap = manifest.read();
    }

    getAsset(path) {
        return mix.inProduction() ?
            this.manifestMap[`${path}`] :
            path;
    }
}

module.exports = TemplateFunctions;
