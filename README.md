# dynamic jade component lookup

if you ever had missed dynamic include feature in jade, you maybe want to switch over to use dynamic mixin lookup.

Here you can see a minimal example for dynamic component lookup inclusively with language fallbacks.

Just take a look at the different `templates/*.jade` files and the resulting `dist/index.html` for further information.
As entry point you may want to look at the `templates/index.jade` file.

The language and locale global variables are passed into the compilation inside of the `gulpfile.js`.
