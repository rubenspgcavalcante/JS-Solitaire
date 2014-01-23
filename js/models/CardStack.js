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
 * @extends {Backbone.Model}
 * @extends {SL.Model.PJO.CardStack}
 */
SL.Model.Card = Backbone.Model.extend({
    defaults: new SL.Model.PJO.Card(),
    initialize: function(attributes, options){
        this.suit = attributes.suit || null;
        this.value = attributes.value || null;
    }
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