/**
 * The card view
 * @extends {maria.SetView}
 */
SL.MVC.CardStackView = {};
maria.SetView.subclass(SL.MVC, 'CardStackView', {
   properties: {
       /**
        * Creates a sigle card view
        * @param {SL.MVC.PJO.Card} card
        * @return {SL.MVC.CardView}
        */
       createChildView: function(card){
           return new SL.MVC.CardView(card);
       }
   }
});