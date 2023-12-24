$('.box').on('click', (e)=>{
    $(e.target).hide();
})

$('#hide').on('click', ()=>{
    // $('.box').hide();
    // $('.box').fadeOut();
    $('.box').slideUp();
})

$('#show').on('click', ()=>{
    // $('.box').show();
    // $('.box').fadeIn();
    $('.box').slideDown();
})

$('#toggle').on('click', ()=>{
    // $('.box').toggle();
    // $('.box').fadeToggle();
    $('.box').slideToggle();
})

// ---------------------------
