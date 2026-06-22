"use strict";

// src/index.js
module.exports.create = (spec) => {
  spec = spec || {};
  let _grid = spec.grid;
  if (!_grid) {
    return null;
  }
  return Object.assign(_grid, {
    solve: function(points) {
      if (points.length < 1) return;
      let { x: startX, y: startY } = points[0];
      for (let point of points) {
        let { x = -1, y = -1 } = point;
        this.markGreen(x, y);
      }
      let maxDepth = this.xSize * this.ySize;
      this.clearAllVisited();
      this.solveNode(startX, startY, 0, maxDepth);
    },
    solveNode: function(x, y, depth, maxDepth) {
      if (depth >= maxDepth) {
        console.warn("MAXIMUM DEPTH REACHED: %d", maxDepth);
        return;
      }
      if (this.isLeaf(x, y) && !this.isGreen(x, y)) {
        this.markRed(x, y);
        return;
      }
      if (this.visited(x, y)) return;
      if (this.markVisited(x, y)) ;
      let dirs = this.getShuffledNeighborDirs(x, y);
      for (let sDir of dirs) {
        let n = this.getNeighbor(x, y, sDir);
        if (n === null) {
          continue;
        }
        if (!this.connects(x, y, sDir)) continue;
        if (this.isRed(n.x, n.y)) {
          continue;
        }
        this.solveNode(n.x, n.y, depth + 1, maxDepth);
      }
      let connectionCount = 0;
      let redCount = 0;
      for (let sDir of dirs) {
        let n = this.getNeighbor(x, y, sDir);
        if (n === null) {
          continue;
        }
        if (!this.connects(x, y, sDir)) continue;
        connectionCount++;
        if (this.isRed(n.x, n.y)) {
          redCount++;
          continue;
        }
      }
      const diff = connectionCount - redCount;
      if (diff === 1) {
        if (!this.isGreen(x, y)) {
          this.markRed(x, y);
        }
      } else {
        this.markGreen(x, y);
      }
    },
    // leave undocumented for now
    carveMaze: function(x, y, depth, maxDepth, depthFunction) {
      if (depthFunction(depth, maxDepth)) {
        return;
      }
      if (!this.isCell(x, y)) {
        return;
      }
      let dirs = this.getShuffledNeighborDirs(x, y);
      for (let key in dirs) {
        let sDir = dirs[key];
        let n = this.getNeighbor(x, y, sDir);
        if (n === null) {
          continue;
        }
        if (this.isMasked(n.x, n.y)) {
          continue;
        }
        if (this.isCell(n.x, n.y) && !this.hasConnections(n.x, n.y)) {
          this.connectUndirected(x, y, sDir);
          this.carveMaze(n.x, n.y, depth + 1, maxDepth, depthFunction);
        }
      }
    },
    /**
      * Method called after [generate]{@link module:maze-generator-core#generate} generates a maze.
      * <b>This should be overriden by derived class</b>.
      * The spec parameter will be passed on to this method after the maze has been generated.
      * The derived method should parse spec for needed values.
      * @param {Object} spec Named parameters for method
      * @function
      * @instance
      * @memberof module:maze-generator-core
      * @example <caption>possible usage</caption>
      * // A derived object would have an afterGenerate method that parses spec.open
      * let spec = {
      *    open: [
      *      { border: "N", list: [ 0, 2 ] },
      *      { border: "S", list: [ 3 ] }
      *    ]
      * };
      * mazeGenerator.generate(spec);
      */
    afterGenerate: function(spec2) {
    },
    /** Generators a maze
      * @param {Object} options Named parameters for generating a maze
      * @param {Array} options.mask An array of cells to mask off from maze generation
      * @param {Array} options.open An array of objects designation what borders to open after generation
      * @param {Object} opions.start An object containing the x and y parameter of a cell to start maze generation from.
      * @function
      * @instance
      * @memberof module:maze-generator-core
      * @returns {boolean}
      * @example <caption>generate</caption>
      * maze.generate();
      * @example <caption>mask</caption>
      * let spec = {
      *    mask: [
      *      { c: 2, r: 3 },
      *      { c: 2, r: 4 }
      *    ]
      * };
      * mazeGenerator.generate(spec);
      * @example <caption>start and mask</caption>
      * let spec = {
      *    start: { c: 3, r: 3 },
      *    mask: [
      *      { c: 0, r: 0 },
      *      { c: 0, r: 1 },
      *      { c: 1, r: 0 },
      *      { c: 1, r: 1 }
      *    ]
      * };
      * mazeGenerator.generate(spec);
      */
    generate: function(spec2) {
      spec2 = spec2 || {};
      let aMask = spec2.mask || [], start = spec2.start || {}, x = start.c || 0, y = start.r || 0;
      let depthFunction = spec2.depthFunction || ((depth, maxDepth2) => {
        depth >= maxDepth2;
      });
      this.fill(0);
      for (let mKey in aMask) {
        let mask = aMask[mKey];
        this.mask(mask.c, mask.r);
      }
      let maxDepth = this.xSize * this.ySize;
      this.carveMaze(x, y, 0, maxDepth, depthFunction);
      this.afterGenerate(spec2);
    }
  });
};
