  $('*').on('mouseover', function (e) {
        $(e.target).css('outline', '2px dashed #f39c12')
        $(document).keyup(function (e) {
            console.log(e)
            if (e.keyCode === 27) {
                console.log('esc hit')
            }
        })
        $(e.target).on('click', function(e) {
            e.preventDefault();
            $(this).detach()
            $('*').unbind()
            return false
        })
        return false
    }).on('mouseout', function(e) {
        $(e.target).css('outline', 'none')
        return false
    })



//next steps . on hover select elements of dom. 
// remove overflow hidden.
//business insider good page to test on

