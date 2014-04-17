/** @module Models */

/**
 * The card plain object
 * @constructor
 */
SL.Model.PJO.Card = function(){
    /** @type {SL.cv} */
    this.value = null;

    /**@type {SL.suits} */
    this.suit = null;
};

/**
 * The card model
 * @extends {maria.Model}
 * @extends {SL.Model.PJO.Card}
 */
SL.Model.Card = {};

maria.Model.subclass(SL.Model, "Card", {
    properties: SL.Utils.Object.merge(new SL.Model.PJO.Card(), {
        /**
         * Sets the value of the card
         * @param {SL.cv} value
         */
        setValue: function(value){
            if(this.value != value){
                this.value = value;
                this.dispatchEvent({type: 'change'});
            }
        },

        /**
         * Sets the Suit of the card
         * @param suit
         */
        setSuit: function(suit){
            if(this.suit != suit){
                this.suit = suit;
                this.dispatchEvent({type: 'change'});
            }
        },

        /**
         * Compares to other card
         * @param {SL.Model.PJO.Card} card
         * @return {Boolean}
         */
        equals: function(card){
            return this.value == card.value && this.suit == card.suit;
        }
    })
});