/**
 * Created by rdehu on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';



    self.Iterator = function (cont_list) {
        var _contact_list;
        var i;

        this.hasNext = function(){
            return i < _contact_list.length -1;
        };

        this.next = function(){
            i++;
            return _contact_list[i];


        };

        var init = function (cont_list) {
            _contact_list = cont_list;
            i = 0;
        };

        init(cont_list);
    };



    return self;
}(Contact || {}));