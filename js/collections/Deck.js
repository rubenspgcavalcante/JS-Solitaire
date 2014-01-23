/** @module Collection */

/**
 * The cards collection
 * @extends {Backbone.Collection}
 */
SL.Collection.Deck = Backbone.Collection.extend({
    model: SL.Model.Card,

    initialize: function(){
        this.cards = [];
        for(var i in SL.suits){
            for(var j in SL.cv){
                this.cards.push(new SL.Model.Card({suit: i, value: j}));
            }
        }
    }
});