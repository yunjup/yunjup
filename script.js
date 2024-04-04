$(function() {
    var $menu = $('#header ul li'),
        $contents = $('#section1, #section2, #section3, #section4');

    // 탭 클릭 이벤트
    $menu.click(function(x) {
        x.preventDefault();
        var idx = $(this).index();
        var section = $contents.eq(idx);
        var sectionDistance = section.offset().top;

        $('html,body').stop().animate({scrollTop: sectionDistance}, function () {
            setFontWeight(idx); // 해당 섹션에 도달했을 때 폰트 굵기 변경
        });
    });

    // 현재 화면에 보이는 섹션에 따라 폰트 굵기 변경
    $(window).scroll(function() {
        var currentScrollTop = $(window).scrollTop();
    
        $contents.each(function(index, element) {
            var sectionTop = $(element).offset().top;
            var sectionBottom = sectionTop + $(element).outerHeight();
            var offset = (index === 3) ? 300 : 0;
    
            if (currentScrollTop >= sectionTop - offset && currentScrollTop < sectionBottom) {
                setFontWeight(index);
            }
        });
    });

    // 탭 간의 활성화 상태를 추적하고 폰트 색상 변경
    $(".menu > a").on("click", function(e) {
        e.preventDefault(); 

        const tabId = $(this).index(); 

        $(".menu-cont > div").hide(); 
        $(".menu-cont > div").eq(tabId).show(); 

        $(".menu > a").removeClass("active"); 
        $(this).addClass("active"); 
        
        // PUBLISHING 창이 열려져 있으면 폰트 색상 변경
        if (tabId === 0) {
            $(".menu a").css("color", "#333");
            $(".active").css("color", "#ED6A00");
        } else if (tabId === 1) {
            $(".menu a").css("color", "#333");
            $(".active").css("color", "#ED6A00");
        }
    });

    // 초기에 첫 번째 탭을 보여주기 위해 첫 번째 탭 클릭 이벤트를 강제로 발생
    $(".menu > a:first-child").trigger("click");

    // 해당 섹션에 도달했을 때 폰트 굵기 변경하는 함수
    function setFontWeight(idx) {
        $menu.removeClass('on');
        $menu.eq(idx).addClass('on');
    }


    // 
    $('.posterthumb').click(function(){
        $('#poster').show();
        $('.modal').show();
    });
    $('.brandthumb').click(function(){
        $('#brand').show();
        $('.modal').show();
    });
    $('.modal').click(function(){
        $('.portfolio').hide();
        $('.modal').hide();
    });


});