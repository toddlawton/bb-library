var app = app || {};

app.LibraryView = Backbone.View.extend({

    el: '.container',

    events: {
        'click #add': 'addBook'
    },

    initialize: function(initialBooks) {
        this.$booksList = this.$el.find('.book-list');
        this.collection = new app.Library( initialBooks );
        this.render();

        this.listenTo(this.collection, 'add', this.render);
    },

    render: function() {
        this.collection.each(function(item){
            this.renderBook(item);
        }, this);
    },

    renderBook: function(item) {
        var bookView = new app.BookView({
            model: item
        });
        this.$booksList.append(bookView.render().el);
    },

    addBook: function(e) {
        e.preventDefault();

        var newBookAttributes = {};

        this.$('input').each(function(index, el){
            if ($(el).val() !== '') {
                newBookAttributes[el.id] = $(el).val();    
            }
        });

        this.collection.add( new app.Book(newBookAttributes));
    }

});