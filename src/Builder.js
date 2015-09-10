/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';




    self.Builder = function (email, type) {
      //  var local;

        this.createMinimalContact = function (gender, first, last){

            return new Contact.Contact(gender, first, last);

           // return local;
        };

        this.createContactWithProfessionalMail = function(gender, firstname, lastname,mail){
            var temp = new Contact.Contact(gender,firstname,lastname);
            var temp_mail = new Contact.Mail(mail,Contact.MailCategory.PRO);
            temp.add_mail(temp_mail);
            return temp;

        };

        this.createContactWithProfessionalMobile = function(gender, firstname, lastname,mobile){
            var temp = new Contact.Contact(gender,firstname,lastname);
            var temp_mobile = new Contact.Phone(mobile,Contact.PhoneCategory.PRO, Contact.PhoneType.MOBILE);
            temp.addPhone(temp_mobile);
            return temp;

        };


    };



    return self;
}(Contact || {}));