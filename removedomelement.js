$(document).click(function () {
    $('*').hover(function (e) {
        $(e.target).css('border', '1px solid black').parents().css('border', 'none');
        return false
    }, function(e) {
        $(e.target).css('border', 'none')
        return false
    })
}
)


//next steps . on hover select elements of dom. 
// on click remove event listener. remove dom element targeted.

