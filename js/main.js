/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

$('#change-content').on('click', function(){
    var selected = $('#selector').val();
    var change = $('#newContent').val();
    $(selected).text(change);

});

$('#add-at-end').on('click', function(){
    var selected = $('#selector').val();
    var change = $('#newContent').val();
    $(selected).append(change);
});

$('#add-at-start').on('click', function(){
    var selected = $('#selector').val();
    var change = $('#newContent').val();
    $(selected).prepend(change);
});

$('#insert-before').on('click', function(){
    var selected = $('#selector').val();
    var change = $('#newContent').val();
    $(selected).before(change);
});

$('#move-after').on('click', function(){
    var toBeMoved = $('#selector').val();
    var stay = $('#newContent').val();
    $(toBeMoved).insertAfter(stay); 
});

$('#surround-class').on('click', function(){
    var toBeSurrounded = $('#selector').val();
    var newClass = $('#newContent').val();
    var div = $("<div class=" + newClass + "></div>");
    $(toBeSurrounded).wrap(div);
});
