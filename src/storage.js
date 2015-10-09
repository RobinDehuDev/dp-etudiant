/**
 * Created by rdehu on 06/10/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';


    var temp = {
        save : function(instance){
            var i, temp;



            for(i = 0; i < instance.t.length ; i++){
                temp = instance.t[i];



                localStorage.setItem('contacts/' + temp.id(),JSON.stringify(temp.toObject()));


            }


        },

        load : function(instance){
            var i;
            var temp_key;
            var temp_json;
            for(i = 0 ; i < localStorage.length ; i++){
                temp_key =localStorage.key(i);

                if(temp_key.substring(0,9)==='contacts/'){
                    temp_json = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    instance.add(new Contact.Builder().createContactFromJSON(temp_json));
                }
            }
        }
    };

    self.Storage = {

        instance: function () {
            return temp;
        }


    };



    return self;
}(Contact || {}));