/** @module Models */

/**
 * The card stack plain object
 * @constructor
 */
SL.MVC.PJO.CardStack = function(){
    /** @type {SL.MVC.Card[]} */
    this.cards = [];
};

/**
 * The card stack model
 * @extends {maria.SetModel}
 * @extends {SL.MVC.PJO.CardStack}
 */
SL.MVC.CardStack = {};
SL.MVC.CardStackTemplate = SL.Utils.Template.load("cardstack");

maria.SetModel.subclass(SL.MVC, "CardStack", {
    properties: SL.Utils.Object.merge(new SL.MVC.PJO.CardStack(), {

        /**
         * Updates all cards zindex
         * @private
         */
        _updateZIndex: function(){
            for(var i = this.cards.length - 1; i >= 0 ; i--){
                this.cards[i].zindex = i;
            }
        },

        /**
         * Compares if the card stack is equals
         * to the given cards
         * @param {SL.MVC.PJO.Card[] | SL.MVC.CardStack} cards
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
         * @param {SL.MVC.Card[]} cards
         */
        setCards: function(cards){
            if(!this.equals(cards)){
                this.cards = cards;
                this._updateZIndex();
                this.dispatchEvent({type: 'change'});
            }
        },

        /**
         * Append cards to the set
         * @param {SL.MVC.PJO.Card} cards
         */
        append: function(cards){
            this.cards.concat(cards);
            this.dispatchEvent({type: 'change'});
        }
    })
});

/**
 * Push a card to the stack
 * @param {SL.MVC.Card} card
 * @public
 */
SL.MVC.Card.prototype.push = function(card){
    this.cards.push(card);
};

/**
 * Pop a card from the stack
 * @returns {SL.MVC.Card}
 * @public
 */
SL.MVC.Card.prototype.pop = function(){
    return this.cards.pop();
};