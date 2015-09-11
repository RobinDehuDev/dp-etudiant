/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';


    self.FromNameSearchStrategy = function (firstname, lastname) {
        var contact;
        this.search = function(){
            return contact;
        };

        var init = function(){
            contact = Contact.Contacts.instance().getFromName(firstname, lastname)[0];
        };

        init();
    };

    self.FromMailSearchStrategy = function (mail) {
        var contact = null;
        this.search = function(){
            return contact;
        };

        var init = function(){
            var tab = Contact.Contacts.instance().t;
            var i = 0, j = 0;
            var temp, mails;


            for (i; i < tab.length; i++) {
                temp = tab[i];
                mails = temp.mails();
                for (j; j < mails.length; j++) {
                    if (mails[j].address() === mail) {
                        contact = temp;
                    }
                }

            }
        };

        init();




    };

    self.FromPhoneSearchStrategy = function (phone) {

        var _phone = phone;
        this.search = function(){
            var tab = Contact.Contacts.instance().t;
            var i = 0, j = 0;
            var temp, phones;

            var contact = null;

            for (i; i < tab.length; i++) {
                temp = tab[i];
                phones = temp.phones();
                for (j = 0; j < phones.length; j++) {
                    if (phones[j].number() === _phone) {

                        contact = temp;
                    }
                }

            }
            return contact;
        };

        this.search2 = function(contacts){
            var tab = contacts.instance();
            var i = 0, j = 0;
            var temp, phones;

            var contact = null;




            for (i; i < tab.length; i++) {

                temp = tab[i];
                phones = temp.phones();

                for (j = 0; j < phones.length; j++) {


                    if (phones[j].number() === _phone) {

                        contact = temp;
                    }
                }

            }
            return contact;
        }

        var init = function(phone){
           _phone = phone;
        };

        init(phone);


    };


    return self;
}(Contact || {}));