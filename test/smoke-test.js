/**
    Module: @mitchallen/maze-generator-core
      Test: square/smoke-test
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var request = require('supertest'),
    should = require('should'),
    cgFactory = require("@mitchallen/connection-grid-square"),
    // modulePath = "../dist/maze-generator-core";
    modulePath = "../modules/index";

describe('module create', function() {

    var _module = null;

    before(function(done) {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _module = require(modulePath);
        done();
    });

    after(function(done) {
        // Call after all tests
        done();
    });

    beforeEach(function(done) {
        // Call before each test
        done();
    });

    afterEach(function(done) {
        // Call after eeach test
        done();
    });

    it('module should exist', function(done) {
        should.exist(_module);
        done();
    });

    it('with no spec should return null', function(done) {
        var mazeGenerator = _module.create();
        should.not.exist(mazeGenerator);
        done();
    });

    it('generate 0 x 0 method should generate an empty maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 0, y: 0 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        should.exist(maze);
        maze.generate();
        done();
    });

    it('generate 1 x 1 method should generate a maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 1, y: 1 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        should.exist(maze);
        maze.generate();
        done();
    });

    it('generate 1 x 2 method should generate a maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 1, y: 2 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        should.exist(maze);
        maze.generate();
        done();
    });

    it('generate 2 x 1 method should generate a maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 2, y: 1 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        should.exist(maze);
        maze.generate();
        done();
    });

    it('generate 5 x 5 method should generate a maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 5, y: 5 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        should.exist(maze);
        maze.generate();
        done();
    });

    it('generate 10 x 5 method should generate a maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 10, y: 5 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        should.exist(maze);
        maze.generate();
        done();
    });

    it('generate 10 x 10 method should generate a maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 10, y: 10 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        should.exist(maze);
        maze.generate();
        done();
    });

    it('generate 20 x 15 method should generate a maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 20, y: 10 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        should.exist(maze);
        maze.generate();
        done();
    });

    it('generate 20 x 20 method should generate a maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 20, y: 20 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        should.exist(maze);
        maze.generate();
        done();
    });

    it('generate called twice should generate two valid and distinct mazes', function(done) {
        var _connectionGrid = cgFactory.create({ x: 10, y: 5 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        should.exist(maze);
        maze.generate();
        maze.generate();
        done();
    });

    it('generate start should start the maze in a new location', function(done) {
        var _connectionGrid = cgFactory.create({ x: 10, y: 5 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        let spec = {
            start: { c: 3, r: 3 },
            mask: [
                { c: 0, r: 0 },
                { c: 0, r: 1 },
                { c: 1, r: 0 },
                { c: 1, r: 1 },
            ]
        };
        maze.generate(spec);
        done();
    });

    it('generate start with a negative c value should fail gracefully', function(done) {
        var _connectionGrid = cgFactory.create({ x: 10, y: 5 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        let spec = {
            start: { c: -3, r: 3 }
        };
        maze.generate(spec);
        done();
    });

    it('generate mask should mask parts of the maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 10, y: 5 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        let spec = {
            start: { c: 3, r: 3 },
            mask: [
                { c: 0, r: 1 },
                { c: 1, r: 0 },
                { c: 1, r: 1 },
            ]
        };
        maze.generate(spec);
        done();
    });

    it('generate mask should mask center parts of the maze', function(done) {
        var _connectionGrid = cgFactory.create({ x: 10, y: 5 });
        should.exist(_connectionGrid);
        var maze = _module.create( {
            grid: _connectionGrid,
        });
        let spec = {
            start: { c: 0, r: 0 },
            mask: [
                { c: 1, r: 2 },
                { c: 2, r: 2 },
                { c: 2, r: 3 },
                { c: 3, r: 2 },
            ]
        };
        maze.generate(spec);
        done();
    });
});