/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';


    self.PhoneType = {MOBILE: 1};
    self.PhoneCategory = {PERSO: 1, PRO: 2};

    self.Phone = function (numero, category, type) {
        var _numero;
        var _category;
        var _type;

        this.number = function () {
            return _numero;
        };

        this.category = function () {
            return _category;
        };

        this.type = function () {
            return _type;
        };

        var init = function (numero, category, type) {
            _numero = numero;
            _type = type;
            _category = category;
        };

        this.changeNumber = function (num) {
            _numero = num;
        };

        init(numero, category, type);
    };


    return self;
}(Contact || {}));
