/**
 * The card view
 * @extends {maria.ElementView}
 */
SL.Views.CardView = {};
SL.Views.CardTemplate = SL.Utils.Template.load("card");

maria.ElementView.subclass(SL.Views, "CardView", {
    properties: {
        buildData: function() {
            var $templ = $(this.find(""));

            var cardSvg = SL.App.cardFactory.getCardSVG(this.getModel());
            $templ.html(cardSvg);
            $templ.draggable();
        },

        update: function(){
            this.buildData();
        }
    }
});
