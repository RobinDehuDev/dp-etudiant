/**
 * Created by jdevin on 09/10/15.
 */

var Contact = Contact || {};
Contact = (function (self) {

    self.View = function (model) {

        this.displayContactsInfos = function () {
            var i, table = $('<table />'), line = $('<tr/>');



            return 0;
        };

        var init = function () {
            var table = $('<table />');

            table.appendTo($('#contacts'));

            var line = $('<tr/>');

            $('<th/>', {id: 'cellFirstName', html : "First name"}).appendTo(line);
            $('<th/>', {id: 'cellLastName', html : "Last name"}).appendTo(line);
            $('<th/>', {id: 'cellPhones', html : "Phones"}).appendTo(line);
            $('<th/>', {id: 'cellMails', html : "Mails"}).appendTo(line);
            $('<th/>', {id: 'cellTags', html : "Tags"}).appendTo(line);
            $('<th/>', {id: 'cellActions', html : "Actions"}).appendTo(line);

            line.appendTo(table);

            table.appendTo($('#contacts'));

            var i;



            for (i = 0; i < model.size(); i++) {
                line = $('<tr/>',{id : "x"+model.getId(i)});

                $('<td/>', {id: 'cellFirstName', html : model.getFirstName(i)}).appendTo(line);
                $('<td/>', {id: 'cellLastName', html : model.getLastName(i)}).appendTo(line);
                $('<td/>', {id: 'cellPhones', html : model.getPhones(i)}).appendTo(line);
                $('<td/>', {id: 'cellMails', html : model.getMails(i)}).appendTo(line);
                $('<td/>', {id: 'cellTags', html : model.getTags(i)}).appendTo(line);
                $('<td/>', {id: 'cellActions', html : "Actions"}).appendTo(line);

                line.appendTo(table);


            }
        };



        init();

    };

    return self;
}(Contact || {}));

