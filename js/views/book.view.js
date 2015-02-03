var app = app || {};

app.BookView = Backbone.View.extend({
    
    tagName: 'div',

    className: 'book-container',

    bookTemplate: _.template($('#book-template').html()),

    render: function() {
        this.$el.html( this.bookTemplate( this.model.attributes ) );
        return this;
    }
});