/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';


    self.Contacts2 = function () {
        var t = [];
        this.instance = function () {
            return t;
        };

        this.add = function (contact) {
            t.push(contact);

        };

        this.change = function (changestrat) {
            changestrat.change(this);
        };

        this.isempty = function () {
            return t.length === 0;
        };

        this.size = function () {
            return t.length;
        };


    };
    return self;
}(Contact || {}));
/**
 * Created by rdehu on 11/09/15.
 */
