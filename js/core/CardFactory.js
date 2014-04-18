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
     * Validates a card
     * @param {SL.Model.PJO.Card} card
     * @return {Boolean}
     * @private
     */
    var _validCard = function(card){
        var suitKey = SL.Utils.Object.getKey(SL.suits, card.suit);
        var valueKey = SL.Utils.Object.getKey(SL.cv, card.value);

        return !(suitKey == null || (valueKey == null && card.suit != SL.suits.BACK));
    };

    /**
     * Get the card id of the SVG
     * @param {SL.Model.PJO.Card} card
     * @return {String}
     * @private
     */
    var _getCardId = function(card){
        var cardId = "";
        var suitKey = SL.Utils.Object.getKey(SL.suits, card.suit);

        if (card.suit == SL.suits.BACK) {
            cardId = "#back"
        }
        else {
            var suitName = suitKey.toLowerCase();
            var valueName = card.value > 9 ? valueKey.toLowerCase() : card.value;
            cardId = "#" + valueName + "_" + suitName;
        }

        return cardId;
    };

    /**
     * Loads all the cards
     */
    this.load = function(){
        $.ajax({
            url: "css/svg-cards/svg-cards.svg",
            type: "GET",
            async: false,
            success: function(cards){
                $cards = $(cards).find("svg");
            }
        });
    };

    /**
     * Get the card svg
     * @param {SL.Model.PJO.Card} card
     * @throws {SL.Error.InvalidCard}
     * @return {SVGElement}
     */
    this.getCardSVG = function(card){
        if(!_validCard(card)){
            throw new SL.Error.InvalidCard(card);
        }

        var $cardsClone = $cards.clone(true);
        var cardSvg = $cardsClone.find("> g:first").html($cardsClone.find(_getCardId(card))).end()[0];
        cardSvg.setAttribute("height", 128);
        cardSvg.setAttribute("width", 86);
        cardSvg.setAttribute("viewBox", "0 0 192 256");

        return cardSvg;
    };
};
