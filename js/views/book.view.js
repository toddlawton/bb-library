var app = app || {};

app.BookView = Backbone.View.extend({
    
    tagName: 'div',

    className: 'book-container',

    bookTemplate: _.template($('#book-template').html()),

    events: {
    	'click .delete': 'deleteBook'
    },

    render: function() {
        this.$el.html( this.bookTemplate( this.model.attributes ) );
        return this;
    },

    deleteBook: function() {
    	this.model.destroy(); // Destroy the model
    	this.remove(); // Destroy the view
    }
});