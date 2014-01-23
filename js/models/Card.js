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
 * @extends {Backbone.Model}
 * @extends {SL.Model.PJO.Card}
 */
SL.Model.Card = Backbone.Model.extend({
    defaults: new SL.Model.PJO.Card(),
    initialize: function(attributes, options){
        this.suit = attributes.suit || null;
        this.value = attributes.value || null;
    }
});