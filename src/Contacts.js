/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';


    var temp = {
        t: [],
        s: 0,
        clear: function () {
            temp.t = [];
            temp.s = 0;
        },

        size: function () {
            return temp.s;
        },

        add: function (contact) {
            temp.t.push(contact);
            temp.s++;
        },

        get: function (id) {
            var bool = true;
            var i;
            var r;
            for (i = 0; i < temp.s && bool; i++) {
                r = temp.t[i];

                if (r.id() === id)
                    bool = false;
            }
            if(bool)
                r=null;

            return r;
        },

        getFromName: function (firstname, lastname) {
            var tab = [];
            var cpt = 0;
            var x;
            var i;
            for (i = 0; i < temp.s; i++) {
                x = temp.t[i];
                if (x.lastName() == lastname && x.firstName() == firstname) {
                    cpt++;
                    tab.push(x);
                }
            }

            if(cpt===0)
                tab = null;
            return tab;
        },

        remove: function (id) {
            var tab = [];
            var i;
            var x;
            var cpt = 0;
            for (i = 0; i < temp.s; i++) {
                x = temp.t[i];
                if (x.id() != id) {
                    tab.push(x);
                    cpt++;
                }
            }

            temp.t = tab;
            temp.s = cpt;
        }

    };

    self.Contacts = {

        instance: function () {
            return temp;
        }


    };
    return self;
}(Contact || {}));
