// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

function DnD(canvas, interactor) {

    // Définir ici les attributs de la 'classe'

    // Developper les 3 fonctions gérant les événements

    // Associer les fonctions précédentes aux évènements du canvas.
    this.debutX = 0;
    this.debutY = 0;
    this.finX = 0;
    this.finY = 0;



    this.mouseDown = function(evt) {
        this.debutX = getMousePosition(canvas, evt).x;
        this.debutY = getMousePosition(canvas, evt).y;

        console.log(this.debutX + " - " + this.debutY);
    }.bind(this);

    this.mouseMove = function(evt) {
        this.finX = getMousePosition(canvas, evt).x;
        this.finY = getMousePosition(canvas, evt).y;

        console.log(this.finX + " - " + this.finY);
    }.bind(this);

    this.mouseUp = function(evt) {
        this.finX = getMousePosition(canvas, evt).x;
        this.finY = getMousePosition(canvas, evt).y;

        console.log(this.finX + " - " + this.finY);
    }.bind(this);

    canvas.addEventListener('mousedown', this.mouseDown, false);
    canvas.addEventListener('mousemove', this.mouseMove, false);
    canvas.addEventListener('mouseup', this.mouseUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};