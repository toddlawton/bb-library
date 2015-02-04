var app = app || {};

$(document).ready(function(){

    var books = [
        { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
        { title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
        { title: 'Scala for the Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
        { title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' }
    ];

    new app.LibraryView( books );
});