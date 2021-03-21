var ClassActive = 'active';

$('.menu a').first().addClass(ClassActive);
$('.item').first().addClass(ClassActive);

$('.menu a').click(function(e){
    e.preventDefault();
    var ItemId = $(this).attr('href');
    
    $('.menu a, .item').removeClass(ClassActive);
    
    $(this).addClass(ClassActive);
    $(ItemId).addClass(ClassActive);
    
    
});
