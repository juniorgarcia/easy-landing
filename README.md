# Easy Landing

We're here to allow you to develop static landing pages with an easy
and consistent structure.

## Special thanks
The projects below were used to help us to develop this generator.
Thanks to the creators:

1. [Laravel Mix](https://github.com/JeffreyWay/laravel-mix/)
2. [Pug Template System](https://pugjs.org/api/getting-started.html)

## Instalation
### Requirements:
1. NodeJS
2. NPM or Yarn - I prefer the last one ;)

Suppose you are using a Unix system. To install it using Yarn, just
navigate to your project folder and type:

    $ yarn install

That's it.

## Starting the dev server
After installing the dependencies, go back to the terminal, into your
project folder, type:

    $ yarn watch

This will open your browser automatically with the starting point of
your project. The default address is `http://localhost:3000`. You also
can access this URL from other devices with the address that you get
on the terminal, normally `http://<your_ip_address>:3000`.

The pug files, styles and scripts will be watched and recompiled
if they change, and also, the page opened previously will automatically
reload with your changes.

Thanks to [BrowserSync](https://browsersync.io)

## Compiling to production
Open your terminal and type:

    $ yarn production

This is enough to minify your assets to production. The `/dist` folder
contains all the code you need.

## The main tools we use
As we use Webpack and Laravel Mix, we have lots of benefits, as ES6
support, smart module importing and a good
community.

## The structure
### The `.env` file
After you clone your the repository, rename `.env.example` to `.env`
and configure your app-wide variables. Those variables will be
accessible inside your Pug templates and used to deliver your assets
properly. You may also configure any values you want to be accessible in
your Pug files. It's also a good place to put API keys.

### The `src` folder
Here you put three elements of your project: scripts, styles and
templates.

#### Pay attention about the `templates` folder:
**Every** file inside this structure will be compiled into `.html` files
and delivered inside `dist` folder. So, every partial or template that
should not be compiled and/or being used to inheritance **must** be
placed inside `src/templates/partials` folders.

#### The fonts and images
The fonts and images should be placed inside `/dist/fonts` and
`/dist/images`, respectively. Also, they should be referenced as they
were into the parent folders, like this:

    .logo {
        background-image: url('../images/logo.png');
    }


# FAQ
Q: How can I get assets from inside my Pug templates? \
A: Just call the function `getAsset(path)` passing the path of your
asset.
