
$('article').on('mouseover', function (e) {
    var that = $(this);
    var titleText = that.find('.titleText');
    var subtitleText = that.find('.subTitleText');
    var jobbar = that.find('.jobbar');
    var jobsite = that.find('.jobsite');

    jobsite.css('border-color', '#0069c0')
    titleText.css('color', 'white');
    subtitleText.css('color', '#0069c0');
    jobbar.css('background-color', '#0069c0');
    that.animate({ boxShadow: '0 20 20px gray', bottom: 3 }, 150);
});

$('article').on('mouseleave', function (e) {
    var that = $(this);
    var titleText = that.find('.titleText');
    var subtitleText = that.find('.subTitleText');
    var jobbar = that.find('.jobbar');
    var jobsite = that.find('.jobsite');

    jobsite.css('border-color', 'black')
    subtitleText.css('color', 'black');
    titleText.css('color', 'black');
    jobbar.css('background-color', '#808e95');
    that.animate({ boxShadow: '0 3 3px black', bottom: 0 }, 150);
});
