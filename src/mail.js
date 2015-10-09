/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';


    self.MailCategory = {PERSO: 1, PRO : 2};

    self.Mail = function (email, type) {
        var _email;
        var _type;

        this.address = function () {
            return _email;
        };

        this.category = function () {
            return _type;
        };

        var init = function (email, type) {
            _email = email;
            _type = type;
        };

        init(email, type);
    };



    return self;
}(Contact || {}));