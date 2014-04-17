/**
 * The application module
 * @module App
 */
SL.App = {
    start: function(){
        var cardFactory = new SL.Core.CardFactory();
        cardFactory.load();

    }
};
