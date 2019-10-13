document.addEventListener('click', function () {
    console.log('click')
    document.addEventListener('mouseover', (e) => {
        console.log(e.target)
    })
}
)


//next steps . on hover select elements of dom. 
// on click remove event listener. remove dom element targeted.

