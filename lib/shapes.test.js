//  Pulled shapes.js
const shapes = require('./shapes.js');

// TEST for Shape class.
describe('Shape', () => {
    // A test is created to check that setColor change the color of the shape.
    describe('setColor', () => {
        it('should change the color of the shape to red', () => {
            const shape = new shapes.Shape("blue");
            shape.setColor("red");
            expect(shape.getColor()).toEqual("red");
        });
    });
});

// TEST for Circle class.
describe('Circle', () => {
    describe('render', () => {
        it('should create a svg code to display an orange Circle', () => {
            const shape = new shapes.Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
        });
    });
});

// TEST for Square class.
describe('Square', () => {
    describe('render', () => {
        it('should create a svg code to display an orange Square', () => {
            const shape = new shapes.Square();
            shape.setColor("green");
            expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="green"/>');
        });
    });
});

// TEST for Triangle class
describe('Triangle', () => {
    describe('render', () => {
        it('should create a svg code to display an orange Triangle', () => {
            const shape = new shapes.Triangle();
            shape.setColor("orange");
            expect(shape.render()).toEqual('<polygon points="150 10, 270 190, 30 190" fill="orange"/>');
        });
    });
});