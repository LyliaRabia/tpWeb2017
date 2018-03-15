
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	
    
  //début souris
    this.onInteractionStart = function () {
        this.setDrawingAttr();
        if(this.currEditingMode == editingMode.rect)
        {
            this.currentShape = new Rectangle(this.dnd.initX, this.dnd.initY, 0, 0, this.currLineWidth, this.currColour);
        }
        else if(this.currEditingMode == editingMode.line)
        {
            this.currentShape = new Line(this.dnd.initX, this.dnd.initY, this.dnd.initX, this.dnd.initY, this.currLineWidth, this.currColour);
        }
    }.bind(this);

  //Relachement de la souris
    this.onInteractionEnd = function () {
        this.createShape();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawing.addShape(this.currentShape);
        drawing.paint(ctx, canvas);
        this.currentShape = 0;
        drawing.updateShapeList();
    }.bind(this);


    this.createShape = function () {
        if(this.currEditingMode == editingMode.rect)
        {
                var height = this.dnd.finalY - this.dnd.initY;
                var width = this.dnd.finalX - this.dnd.initX;
                this.currentShape = new Rectangle(this.dnd.initX, this.dnd.initY, height, width, this.currLineWidth, this.currColour);
        }
        else if(this.currEditingMode == editingMode.line)
        {
                this.currentShape = new Line(this.dnd.initX, this.dnd.initY, this.dnd.finalX, this.dnd.finalY, this.currLineWidth, this.currColour);
        }
    }
};


