// Select color input
// Select size input

let color = '#ffff00';

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function () {
    var values = $(this).serializeArray();
    event.preventDefault();
    $('tr').remove();
    //console.log(values);
    makeGrid(values);
});


function makeGrid(values) {

    var height = values[0].value;
    var width = values[1].value;

    for (i = 1; i <= height; i++) {
        $('table').append('<tr class="row ' + i + '"></tr>');
    }
    for (x = 1; x <= width; x++) {
        $('tr').append('<td class="column '+ x +'"></td>');
        
    }
   
    //Takes values from sizePicker and creates a table

    console.log(height, width);
}

$('#colorPicker').change(function () {
    color = $(this).val();
    return color;
});
$('table').on('click','td', function () {
    console.log(this);
    $(this).css('background-color', color);
});

// Nice! Made it with no cheating!