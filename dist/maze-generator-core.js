(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.MitchAllen || (g.MitchAllen = {})).MazeGeneratorCore = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
    Module: @mitchallen/maze-generator-core/modules/index
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

module.exports.create = function (spec) {

    spec = spec || {};
    var _grid = spec.grid;

    if (!_grid) {
        return null;
    }

    return Object.assign(_grid, {

        carveMaze: function carveMaze(x, y, depth, maxDepth) {

            if (depth >= maxDepth) {
                console.warn("MAXIMUM DEPTH REACHED: %d", maxDepth);
                return;
            }

            if (!this.isCell(x, y)) {
                return;
            }
            var dirs = this.getShuffledNeighborDirs(x, y);
            for (var key in dirs) {
                var sDir = dirs[key];
                var n = this.getNeighbor(x, y, sDir);
                if (n === null) {
                    continue;
                }

                if (this.isMasked(n.x, n.y)) {
                    continue;
                }

                if (this.isCell(n.x, n.y) && !this.hasConnections(n.x, n.y)) {
                    // Connect cell to neighbor
                    this.connectUndirected(x, y, sDir);
                    this.carveMaze(n.x, n.y, depth + 1, maxDepth);
                }
            }
        },
        generate: function generate(spec) {

            spec = spec || {};

            var aMask = spec.mask || [],
                start = spec.start || {},
                x = start.c || 0,
                y = start.r || 0;

            this.fill(0);

            for (var key in aMask) {
                var mask = aMask[key];
                this.mask(mask.c, mask.r);
            }

            var maxDepth = this.xSize * this.ySize;

            this.carveMaze(x, y, 0, maxDepth);
        }
    });
};

},{}]},{},[1])(1)
});