/** @module Models */

/**
 * The card stack plain object
 * @constructor
 */
SL.Model.PJO.CardStack = function(){
    /** @type {SL.Model.Card[]} */
    this.cards = [];
};

/**
 * The card stack model
 * @extends {maria.SetModel}
 * @extends {SL.Model.PJO.CardStack}
 */
SL.Model.CardStack = {};
maria.SetModel.subclass(SL.Model, "CardStack", {
    properties: SL.Util.Object.merge(new SL.Model.PJO.CardStack(), {
        /**
         * Compares if the card stack is equals
         * to the given cards
         * @param {SL.Model.PJO.Card[] | SL.Model.CardStack} cards
         * @return {Boolean}
         */
        equals: function(cards){
            var cardArr = cards;
            if(cards.hasOwnProperty('cards')){
                cardArr = cards.cards;
            }
            return SL.Utils.Array.strictEquals(this.cards, cardArr);
        },

        /**
         * Sets a array of cards
         * @param {SL.Model.Card[]} cards
         */
        setCards: function(cards){
            if(!this.equals(cards)){
                this.cards = cards;
                this.dispatchEvent({type: 'change'});
            }
        },

        /**
         * Append a set of cards
         * @param {SL.Model.PJO.Card} cards
         */
        append: function(cards){
            this.cards.concat(cards);
            this.dispatchEvent({type: 'change'});
        }
    })
});

/**
 * Push a card to the stack
 * @param {SL.Model.Card} card
 * @public
 */
SL.Model.Card.prototype.push = function(card){
    this.cards.push(card);
};

/**
 * Pop a card from the stack
 * @returns {SL.Model.Card}
 * @public
 */
SL.Model.Card.prototype.pop = function(){
    return this.cards.pop();
};