  $('*').on('mouseover', function (e) {
        $(e.target).css('outline', '1px solid black')
        $(e.target).on('click', function(e) {
            e.preventDefault();
            $(this).remove()
            return false
        })
        return false

    }).on('mouseout', function(e) {
        $(e.target).css('outline', 'none')
        return false
    })



//next steps . on hover select elements of dom. 
// on click remove event listener. remove dom element targeted.

