// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.shapes = [];

    this.addShape = function (shape) {
        this.shapes.push(shape);
    }.bind(this);

    this.removeShape = function (index) {
        var shape = this.shapes[index];
        this.shapes.splice(index, 1);
        this.oldshapes.push(shape);
        console.log(this.shapes);
        console.log(this.oldshapes);
    }.bind(this);

function Shape(thickness, color) {
    this.thickness = thickness;
    this.color = color;
}

function Rectangle(x1, y1, height, width, thickness, color) {
    Shape.call(this, thickness, color);
    this.x1 = x1;
    this.y1 = y1;
    this.height = height;
    this.width = width;
}
Rectangle.prototype = new Shape();
    
function Line(x1, y1, x2, y2, thickness, color) {
    Shape.call(this, thickness, color);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}
Line.prototype = new Shape();
