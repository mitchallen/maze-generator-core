
@mitchallen/maze-generator-core
==
maze generator core
--

<p align="left">

  <a href="https://github.com/mitchallen/maze-generator-core/actions/workflows/ci.yml">
    <img src="https://github.com/mitchallen/maze-generator-core/actions/workflows/ci.yml/badge.svg" alt="Build Status">
  </a>
  
  <a href="https://codecov.io/gh/mitchallen/maze-generator-core">
    <img src="https://codecov.io/gh/mitchallen/maze-generator-core/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  
  <a href="https://github.com/mitchallen/maze-generator-core/pkgs/npm/maze-generator-core">
    <img src="https://img.shields.io/github/v/tag/mitchallen/maze-generator-core.svg?label=version" alt="Version">
  </a>
  
  <a href="https://github.com/mitchallen/maze-generator-core/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mitchallen/maze-generator-core.svg">
  </a>
  
</p>

* * *
## Installation

This package is published to the **GitHub Packages** registry, not npmjs.
GitHub Packages requires authentication for every install, even though the
package is public, so you need a GitHub personal access token with the
`read:packages` scope.

1. Export your token:

       export NODE_AUTH_TOKEN=ghp_your_token_here

2. Add an `.npmrc` to your project so the `@mitchallen` scope resolves from
   GitHub Packages:

       @mitchallen:registry=https://npm.pkg.github.com
       //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}

3. Install:

       $ npm install @mitchallen/maze-generator-core --save

> Tip: with the GitHub CLI, `export NODE_AUTH_TOKEN="$(gh auth token)"`
> (after `gh auth refresh --scopes read:packages`).
  
* * *

## Usage

```js
let cgFactory = require("@mitchallen/connection-grid-square"),
    mazeCore = require("@mitchallen/maze-generator-core");
    
spec = spec || {};

let _x = spec.x || 5;
let _y = spec.y || 6;

let _gridSpec = {
    x: _x,
    y: _y
};

let _connectionGrid = cgFactory.create(_gridSpec);

if(!_connectionGrid) {
    return null;
}

let maze = mazeCore.create( {
    grid: _connectionGrid,
});
    
maze.generate();
```

* * *

## Browser Usage

```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Maze Generator Core Example</title>
        <meta name="description" content="Maze Generator Core Example">
        <script src="https://cdn.jsdelivr.net/gh/mitchallen/maze-generator-core@v0.1.11/dist/maze-generator-core.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/mitchallen/connection-grid-square@v0.1.14/dist/connection-grid-square.min.js"></script>
        <script>
          var cgFactory = window.MitchAllen.ConnectionGridSquare;
          console.log(cgFactory);
          var xSize = 10, ySize = 5;
          var cGrid = cgFactory.create( { x: xSize, y: ySize } );
          var factory = window.MitchAllen.MazeGeneratorCore;
          var sm = factory.create({
            grid: cGrid,
          });
          console.log(sm);
          sm.generate();
          sm.log();  
        </script>
      </head>
      <body>
        <h1>Maze Generator Core Example</h1>
        <p>See JavaScript developer console for output.</p>
      </body>
    </html>
```
	
* * *

## Documentation

* [DOC-API.md](./DOC-API.md)
	
* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/maze-generator-core.git](https://bitbucket.org/mitchallen/maze-generator-core.git)
* [github.com/mitchallen/maze-generator-core.git](https://github.com/mitchallen/maze-generator-core.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.14

* replaced the legacy grunt/browserify/babel build with [esbuild](https://esbuild.github.io/)
* migrated CI from Travis to GitHub Actions
* modernized dependencies and resolved all `npm audit` / Dependabot alerts
* removed unused `supertest` dependency and stopped tracking `node_modules` in git
* upgraded `should` and `esbuild` to current releases

#### Version 0.1.7

* updated dependencies
* updated client example

#### Version 0.1.6

* changed __openBorder__ to __afterGenerate__ to make it more generic
* integrated travis-ci and codecov.io
* changed license to MIT
* updated test cases for 100% code coverage

#### Version 0.1.5

* added __openBorder__ placeholder method for derived classes
* updated documentation

#### Version 0.1.4

* refactored generate method

#### Version 0.1.3

* updated browser example

#### Version 0.1.2

* removed file that wasn't being used.

#### Version 0.1.1

* updated browser example to log array

#### Version 0.1.0 

* initial release

* * *
