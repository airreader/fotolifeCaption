Hatena.Star.SiteConfig.entryNodes['span.fotoStar']  = {
     			uri: 'span.fotoCaption a',
      			title: 'span.fotoCaption',
      			container: 'span.fotoCaption'
};

$(function(){
    $.getScript("http://dl.dropbox.com/u/673184/caius-jquery-captify-242e714/captify2.js", function(){
        $('img').each(function(){
            var fotoAlt = $(this).attr('alt');
            if (/f:id/.test(fotoAlt)){ 
                var title = $(this).next('span.capt').text();
                if (title == ""){
                       title = "この画像にスターをつける";
                }
                var str = fotoAlt.match("^f:id:(.+?):(.+?).:");
                var fotoUsr = str[1];
                var fotoNum = str[2];
                var fotoUrl = "http://f.hatena.ne.jp/"+ fotoUsr +"/"+ fotoNum; 
                $(this).attr({'title':title});
                $(this).addClass('captify');
                $(this).attr({'rel':fotoNum});

                
                $(this).parent().append($('<span>').attr({'id':fotoNum})
                       .append($('<span>').addClass('fotoStar')
                       .append($('<span>').addClass('fotoCaption')
                       .append($('<a>').attr({'href':fotoUrl}).css({'color':'#fff'}).text(title)))));

                window.hoge = $('figcantion.caption-bottom');
                window.huga = $(this).next();

                //$(this).append('<span id="'+fotoNum+'"><span class="fotoStar"><span class="fotoCaption"><a href="'+fotoUrl+'"><span  style="color: #fff">'+title+'</span></a></span></span></div>');
                $('img.captify').captify({
                    // all of these options are... optional
                    // ---
                    // speed of the mouseover effect
                    speedOver: 'fast',
                    // speed of the mouseout effect
                    speedOut: 'normal',
                    // how long to delay the hiding of the caption after mouseout (ms)
                    hideDelay: 500,   
                    // 'fade', 'slide', 'always-on'
                    animation: 'fade',      
                    // text/html to be placed at the beginning of every caption
                    prefix: '',      
                    // opacity of the caption on mouse over
                    opacity: '0.7',               
                    // the name of the CSS class to apply to the caption box
                    className: 'caption-bottom',   
                    // position of the caption (top or bottom)
                    position: 'bottom',
                    // caption span % of the image
                    spanWidth: '100%'
                });
            }
        });
    });
});
