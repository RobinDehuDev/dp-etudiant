/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
        'use strict';

        self.Gender = {Mr: 1};
        self.Contact = function (gender, firstname, lastname) {
            var firstName, lastName, g, id, mails = [], phones = [], tag;

            this.tag = function() {
                return tag;
            };

            this.setTag = function(t){
                tag = t;
            };


            this.gender = function () {
                return g;
            };

            this.firstName = function () {
                return firstName;
            };

            this.lastName = function () {
                return lastName;
            };

            this.add_mail = function (mail) {
                mails.push(mail);
            };

            this.addPhone = function (phone) {
                phones.push(phone);
            };

            this.mails = function () {
                return mails;
            };

            this.phones = function () {
                return phones;
            };

            this.id = function () {
                return id;
            };

            this.setId = function(ID){
                id = ID;
            }

            this.toObject = function () {
              return {
                  Firstname : firstname,
                  Lastname : lastname,
                  Gender : g,
                  ID : id,
                  Mails : mails,
                  Phones : phones,
                  Tag : tag
              };
            };

            var init = function (gender, firstname, lastname) {
                lastName = lastname;
                firstName = firstname;
                g = gender;
                id = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            };
            init(gender, firstname, lastname);
        };


        return self;
    }(Contact || {})
)
;