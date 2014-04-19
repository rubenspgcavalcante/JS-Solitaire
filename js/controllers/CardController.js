/**
 * The card controller
 * @extends {maria.Controller}
 */
SL.MVC.CardController = {};

maria.Controller.subclass(SL.MVC, "CardController", {
    properties: {
        onDrag: function(event){
            //update model
            console.log(this.getModel());
        }
    }
});