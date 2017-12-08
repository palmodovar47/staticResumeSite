$('.mybtn').on('click', function (e) {
    var mybtn = $(this);
    var mybtntext = mybtn.find('.navtext').text();
    var jobs = $('.job');
    var refs = $('.ref');
    var skills = $('.skills');
    var articles = $('article');
    var current = $('#navtitle');
    if (mybtntext == "References") {
        articles.hide(200);
        mybtn.find('.navtext').text(current.text());
        current.text('References')
        refs.show(200).css('display', 'grid');
    }
    if (mybtntext == "Education/Skills") {
        articles.hide(200);
        mybtn.find('.navtext').text(current.text());
        current.text('Education/Skills')
        skills.show(200).css('display', 'grid');
    }
    if (mybtntext == "Experience") {
        articles.hide(200);
        mybtn.find('.navtext').text(current.text());
        current.text('Experience')
        jobs.show(200).css('display', 'grid');
    }
});