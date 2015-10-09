/**
 * Created by jdevin on 09/10/15.
 */
var Contact = Contact || {};
Contact = (function (self) {

    self.Model = function () {

        var contact = Contact.Contacts.instance().t;

        this.size = function () {
            return contact.length;

        };

        this.getFirstName = function (i) {
            return contact[i].firstName();
            console.log(contact[i].firstName());
        };

        this.getLastName = function (i) {
            return contact[i].lastName();
        };

        this.getPhones = function (i) {
            var tels = contact[i].phones(), string = "", j;
            for (j = 0; j < tels.length; j++) {

                string = string + tels[j].number();
                switch (tels[j].category()) {
                    case 1 :
                        string = string + "[PERSO]";
                        break;
                    case 2 :
                        string = string + "[PRO]";
                        break;
                    default :
                        break;

                }

                switch (tels[j].type()) {
                    case 1 :
                        string = string + "[MOBILE]";
                        break;
                    case 2 :
                        string = string + "[PHONE]";
                        break;
                    default :
                        string = string + "[PHONE]";
                        break;

                }
                if(j < tels.length-1)
                string = string + "/";

            }
            return string;
        };

        this.getMails = function (i) {
            var mails = contact[i].mails(), string = "", j;
            for (j = 0; j < mails.length; j++) {

                string = string + mails[j].address();
                switch (mails[j].category()) {
                    case 1 :
                        string = string + "[PERSO]";
                        break;
                    case 2 :
                        string = string + "[PRO]";
                        break;
                    default :

                        break;

                }
                if(j < mails.length-1)
                    string = string + "/";

            }
            return string;
        };

        this.getTags = function (i) {
            return contact[i].tag();
        };

        this.getId = function (i) {
            return contact[i].id();
        };
    };

    return self;
}(Contact || {}));