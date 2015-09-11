/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';


    self.AddCommand = function () {
        var tab = [];

        this.execute = function (contact) {
            Contact.Contacts.instance().add(contact);

            tab.push(contact);
        };

        this.undo = function(){

            var contact = tab.pop();

            Contact.Contacts.instance().remove(contact.id());

        };
    };

    self.RemoveCommand = function () {
        var tab = [];

        this.execute = function (id) {
            var contact = Contact.Contacts.instance().get(id);
            Contact.Contacts.instance().remove(id);

            tab.push(contact);
        };

        this.undo = function(){

            var contact = tab.pop();

            Contact.Contacts.instance().add(contact);

        };
    };


    return self;
}(Contact || {}));