

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        $(e.target).css('outline', 'none')
        $('*').unbind()
    }
})

let snackbar = $('<div id="snackbar">Push ESC to exit</div>')

$('body').append(snackbar)

const showElement = () => {
    x = $("#snackbar")
    x.addClass("show");

  // After 3 seconds, remove the show class from DIV
 setTimeout(function(){ x.removeClass("show"); }, 3000);
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



//next steps . on hover select elements of dom. 
// remove overflow hidden.
//business insider good page to test on

