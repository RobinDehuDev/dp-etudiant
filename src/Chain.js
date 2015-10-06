/**
 * Created by rdehu on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';



    self.Chain = function (hand) {
        var _handler;

        this.processRequest = function ( request) {
            _handler.processRequest(request);
        };

        var init = function (hand) {
           _handler = hand;
        };

        init(hand);
    };



    return self;
}(Contact || {}));/**
 * Created by rdehu on 06/10/15.
 */
