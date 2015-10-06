/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';


    self.ProxyCache = function (tab_contacts) {
        var tab_c = [], cache = [[], []];

        this.search = function (strategy) {
            var contact = null, i, bool = true;

            if (!this.inCache(strategy)) {

                for (i = 0; i < tab_c.length && bool; i++) {
                    contact = strategy.search2(tab_c[i]);

                    if (contact !== null) {
                        bool = false;

                    }
                }

                if (contact !== null) {
                    cache[0].push(strategy);
                    cache[1].push(i - 1);


                }

            } else {
                contact = strategy.search2(tab_c[cache[1][cache[0].indexOf(strategy)]]);
            }

            return contact;

        };

        this.inCache = function (strategy) {
            return cache[0].indexOf(strategy) >= 0;
        };

        var init = function (tab_contacts) {

            tab_c = tab_contacts;
        };
        init(tab_contacts);

    };


    return self;
}(Contact || {}));