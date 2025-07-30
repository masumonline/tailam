# Riaz Uddin Masum

[DEMO](https://masumonline.github.io/tailam-demo/)

> **Provide a live demo of your plugin**
## Download

* CDN
  * `https://unpkg.com/grapesjs-tailam`
* NPM
  * `npm i grapesjs-tailam`
* GIT
  * `git clone https://github.com/masumonline/tailam`


Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-tailam"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    fromElement: 1,
    container: "#gjs",
    plugins: ["grapesjs-tailam"],
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-tailam';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [grapesjs-tailam],
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/masumonline/tailam
$ cd tailam
```

Install it

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build before the commit. This will also increase the patch level version of the package

```sh
$ npm run build
```


## License

BSD 3-Clause