/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';




    self.Contacts2 = function() {
        var t = [];
        this.instance = function () {
            return t;
        };

        this.add = function (contact) {
           t.push(contact);

        };


    };
    return self;
}(Contact || {}));
/**
 * Created by rdehu on 11/09/15.
 */
