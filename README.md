# Landing page generator

We're here to allow you to develop static landing pages with an easy and consistent structure.

## The main tools we use
As we use Webpack and Laravel Mix, we have lots of benefits, as ES6 support, smart module importing and a good
community.

## The structure
### The `.env` file
After you clone your the repository, rename `.env.example` to `.env` and configure your app-wide variables. Those
variables will be accessible inside your Pug templates and used to deliver your assets properly. You may also configure
any values you want to be accessible in your Pug files. It's also a good place to put API keys.

### The `src` folder
Here you put three elements of your project: scripts, styles and templates.

#### Pay attention about the `templates` folder:
**Every** file inside this structure will be compiled into `.html` files and delivered inside `dist` folder.
So, every partial or template that should not be compiled and/or being used to inheritance **must** be placed inside
`src/templates/partials` folders.

#### The fonts and images
The fonts and images should be placed inside `/dist/fonts` and `/dist/images`, respectively.
Also, they should be referenced as they were into the parent folders, like this:

```
.logo {
  background-image: url('../images/logo.png');
}
```


# FAQ
Q: How can I get assets from inside my Pug templates? \
A: Just call the function `getAsset(path)` passing the path of your asset.