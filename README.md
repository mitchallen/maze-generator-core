
@mitchallen/maze-generator-core
==
maze generator core
--
* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/maze-generator-core --save
  
* * *

## Usage

	var cgFactory = require("@mitchallen/connection-grid-square"),
        mazeCore = require("@mitchallen/maze-generator-core");
    
    spec = spec || {};

    let _x = spec.x || 5;
    let _y = spec.y || 6;

    let _gridSpec = {
        x: _x,
        y: _y
    };

    var _connectionGrid = cgFactory.create(_gridSpec);
    if(!_connectionGrid) {
        return null;
    }

    var maze = mazeCore.create( {
        grid: _connectionGrid,
    });
    
	maze.generate();

* * *

## Browser Usage

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Maze Generator Core Example</title>
        <meta name="description" content="Maze Generator Core Example">
        <!-- either cdn should work -->
        <!--
        <script src="https://cdn.rawgit.com/mitchallen/maze-generator-core/v0.1.3/dist/maze-generator-core.min.js"></script>
        -->
        <script src="https://unpkg.com/@mitchallen/maze-generator-core@0.1.3/dist/maze-generator-core.min.js"></script>
        <script src="https://unpkg.com/@mitchallen/connection-grid-square@0.1.0/dist/connection-grid-square.min.js"></script>
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
	
* * *

## Methods

### generate() 

Generate a maze filling the connection grid with maze connection info.

### carveMaze(x,y,depth,maxDepth)

Used by __generate__ to recursively create the maze.
	
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

#### Version 0.1.3

* updated browser example

#### Version 0.1.2

* removed file that wasn't being used.

#### Version 0.1.1

* updated browser example to log array

#### Version 0.1.0 

* initial release

* * *
