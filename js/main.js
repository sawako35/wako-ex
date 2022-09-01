$(function () {
    $('#shop').each(function(){
        var $tabList = $(this).find('.tab_nav'),
            $tabAnchors = $tabList.find('a'),
            $tabPanels = $(this).find('.tabs_panel');
        $tabList.on('click', 'a', function(event){
            event.preventDefault();
            var $this = $(this);
            if($this.hasClass('active')){
                return;
            }
                $tabAnchors.removeClass('active');
                $this.addClass('active');
                $tabPanels.hide();
                $($this.attr('href')).fadeIn(1500);
            
        });
        $tabAnchors.eq(0).trigger('click');
    })
    $("#h_menu").on('click', function () { //ハンバーガーメニューをクリックしたら
        $("#h_menu span").toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
        $("#top nav").toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
      });
});