$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        $(e.target).css('outline', 'none')
        $('#snackbar').fadeOut();
        $('*').unbind()
    }
})

//TODO show identifier already defined. 
let snackbar = $('<div id="snackbar">Push ESC to exit</div>')

$('body').append(snackbar)

const showElement = () => {
    $("#snackbar").addClass("show");
    // After 3 seconds, remove the show class from DIV
}

showElement()

$('*').on('mouseover', function (e) {
    $(e.target).css('outline', '2px dashed #f39c12')
    $(e.target).on('click', function (e) {
        e.preventDefault();
        $(this).detach()
        return false
    })
    return false
}).on('mouseout', function (e) {
    $(e.target).css('outline', 'none')
    return false
})



//next steps 
//make snackbar undeleteable
//make look nicer
//remove outline on ESC