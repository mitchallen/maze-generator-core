## Modules

<dl>
<dt><a href="#module_maze-generator-core">maze-generator-core</a> ⇐ <code><a href="#external_@mitchallen/connection-grid-core">@mitchallen/connection-grid-core</a></code></dt>
<dd><p>Maze Generator Core generated by <a href="#module_maze-generator-core-factory">create</a></p>
</dd>
<dt><a href="#module_maze-generator-core-factory">maze-generator-core-factory</a></dt>
<dd><p>A factory for generating maze generator core objects</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_@mitchallen/connection-grid-core">@mitchallen/connection-grid-core</a></dt>
<dd><p>Connection Grid Core</p>
</dd>
</dl>

<a name="module_maze-generator-core"></a>

## maze-generator-core ⇐ <code>[@mitchallen/connection-grid-core](#external_@mitchallen/connection-grid-core)</code>
Maze Generator Core generated by [create](#module_maze-generator-core-factory)

**Extends:** <code>[@mitchallen/connection-grid-core](#external_@mitchallen/connection-grid-core)</code>  

* [maze-generator-core](#module_maze-generator-core) ⇐ <code>[@mitchallen/connection-grid-core](#external_@mitchallen/connection-grid-core)</code>
    * [.afterGenerate(spec)](#module_maze-generator-core+afterGenerate)
    * [.generate(options)](#module_maze-generator-core+generate) ⇒ <code>boolean</code>

<a name="module_maze-generator-core+afterGenerate"></a>

### maze-generator-core.afterGenerate(spec)
Method called after [generate](#module_maze-generator-core+generate) generates a maze.
<b>This should be overriden by derived class</b>.
The spec parameter will be passed on to this method after the maze has been generated.
The derived method should parse spec for needed values.

**Kind**: instance method of <code>[maze-generator-core](#module_maze-generator-core)</code>  

| Param | Type | Description |
| --- | --- | --- |
| spec | <code>Object</code> | Named parameters for method |

**Example** *(possible usage)*  
```js
// A derived object would have an afterGenerate method that parses spec.open
let spec = {
   open: [
     { border: "N", list: [ 0, 2 ] },
     { border: "S", list: [ 3 ] }
   ]
};
mazeGenerator.generate(spec);
```
<a name="module_maze-generator-core+generate"></a>

### maze-generator-core.generate(options) ⇒ <code>boolean</code>
Generators a maze

**Kind**: instance method of <code>[maze-generator-core](#module_maze-generator-core)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Named parameters for generating a maze |
| options.mask | <code>Array</code> | An array of cells to mask off from maze generation |
| options.open | <code>Array</code> | An array of objects designation what borders to open after generation |
| opions.start | <code>Object</code> | An object containing the x and y parameter of a cell to start maze generation from. |

**Example** *(generate)*  
```js
maze.generate();
```
**Example** *(mask)*  
```js
let spec = {
   mask: [
     { c: 2, r: 3 },
     { c: 2, r: 4 }
   ]
};
mazeGenerator.generate(spec);
```
**Example** *(start and mask)*  
```js
let spec = {
   start: { c: 3, r: 3 },
   mask: [
     { c: 0, r: 0 },
     { c: 0, r: 1 },
     { c: 1, r: 0 },
     { c: 1, r: 1 }
   ]
};
mazeGenerator.generate(spec);
```
<a name="module_maze-generator-core-factory"></a>

## maze-generator-core-factory
A factory for generating maze generator core objects

<a name="module_maze-generator-core-factory.create"></a>

### maze-generator-core-factory.create(options) ⇒ <code>[maze-generator-core](#module_maze-generator-core)</code>
Factory method that returns a maze generator core object.
It takes one spec parameter that must be an object with named parameters.

**Kind**: static method of <code>[maze-generator-core-factory](#module_maze-generator-core-factory)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Named parameters for generating a maze generator core |
| options.grid | <code>grid</code> | Grid based on [@mitchallen/connection-grid-core](#external_@mitchallen/connection-grid-core) |

**Example** *(Creating a maze-generator-core)*  
```js
let cgFactory = require("@mitchallen/connection-grid-square"),
    mazeCore = require("@mitchallen/maze-generator-core"),
    connectionGrid = cgFactory.create( { x: 5, y: 6 } );
    maze = mazeCore.create( {
         grid: connectionGrid,
    });
```
<a name="external_@mitchallen/connection-grid-core"></a>

## @mitchallen/connection-grid-core
Connection Grid Core

**Kind**: global external  
**See**: [@mitchallen/connection-grid-core](https://www.npmjs.com/package/@mitchallen/connection-grid-core)  
