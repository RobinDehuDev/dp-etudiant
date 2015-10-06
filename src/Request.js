/**
 * Created by rdehu on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';



    self.Request = function (cont) {
        var _contact;

        this.contact = function(){
            return _contact;
        };

        var init = function (cont) {
            _contact = cont;
        };

        init(cont);
    };



    return self;
}(Contact || {}));/**
 * Created by rdehu on 06/10/15.
 */
