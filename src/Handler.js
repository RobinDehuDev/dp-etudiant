/**
 * Created by rdehu on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';



    self.Handler = function (contact_list, hand) {
        var _contact_list;
        var _handler;

        this.processRequest = function (request) {

            if(_contact_list.isempty() || contains_tag(request.contact().tag())){

               _contact_list.add(request.contact());
            } else {
                if(_handler != null)
                _handler.processRequest(request);
            }

        };

        var contains_tag = function(tag){
            var i, temp_contacts = _contact_list.instance(), bool = false;
            for(i = 0 ; i < temp_contacts.length && !bool; i++){
                if(tag === temp_contacts[i].tag()){
                    bool = true;
                }
            }

            return bool;
        };

        var init = function (contact_list, hand) {
            _contact_list = contact_list;
            _handler = hand;
        };

        init(contact_list, hand);
    };



    return self;
}(Contact || {}));