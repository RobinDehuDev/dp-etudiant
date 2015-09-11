/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';


    self.ProxyCache = function (tab_contacts) {
        var tab_c = [];
        var cache = [];

        this.search = function (strategy) {
            var contact;
            var i;
            var bool = true;



            for(i = 0 ; i < tab_c.length && bool; i++){
                contact = strategy.search2(tab_c[i]);


                if(contact != null){
                    bool=false;

                }
            }

            cache.push(strategy);

            return contact;

        };

        this.inCache = function (strategy){
            return cache.indexOf(strategy) >= 0;
        }

        var init = function(tab_contacts){

            tab_c = tab_contacts;
        };
        init(tab_contacts);

    };


    return self;
}(Contact || {}));