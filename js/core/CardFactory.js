/**
 * Manages the load and creation
 * of the svg cards views
 * @constructor
 */
SL.Core.CardFactory = function(){

    /**
     * The svg instance
     * @type {jQuery}
     */
    var $cards = null;

    /**
     * Loads all the cards
     */
    this.load = function(){
        $.ajax({
            url: "templates/svg-cards/svg-cards.svg",
            type: "GET",
            async: false,
            success: function(cards){
                $cards = $(cards);
            }
        });
    };

    /**
     * Get the card svg
     * @param {SL.Model.PJO.Card} card
     */
    this.getCardSVG = function(card){
        var suitName = SL.Util.Object.getKey(SL.suits, card.suit);
        if(suitName != null){
            suitName = suitName.toLowerCase();
        }

        return $cards.find("#" + card.value + "_" + suitName);
    };
};
