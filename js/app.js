/**
 * The application module
 * @module App
 */
SL.App = {
    /** @type {SL.Core.CardFactory} */
    cardFactory: null,

    start: function(){
        this.cardFactory = new SL.Core.CardFactory();
        this.cardFactory.load();

        var card = new SL.Model.Card();
        card.setValue(SL.cv.ACE);
        card.setSuit(SL.suits.DIAMOND);

        var cardView = new SL.Views.CardView(card);
        $(".center-block").append(cardView.build());
    }
};

$(document).ready(function(){
    SL.App.start();
});