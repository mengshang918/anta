$(function() {
    $('.selector_line').each(function() {
        var _this = $(this);
        var str = '';
        $(this).find('.list_operation a').eq(0).click(function() {
            _this.toggleClass('selected');
        }).next().click(function() {
            _this.toggleClass('current');
            _this.find('.sl_btns').css('display', 'block');
            _this.find('.list_operation').css('display', 'none');
        })
        // 多选中a点击变色以及确定按钮样式判断
        $(this).find('li a').click(function() {
            $(this).toggleClass('current');
            if (_this.find('li a.current').length > 0) {
                _this.find('.sure-ckd').removeClass('disabled');
                _this.find('.sure-ckd').addClass('current');
            } else {
                _this.find('.sure-ckd').addClass('disabled');
                _this.find('.sure-ckd').removeClass('current');
            }
            flag = true;
            console.log(flag);
            return false;
        })
        $('.sure-ckd ').click(function() {
            var html = '';
            console.log(1);
            console.log($(this).parent().prev().find('li a.current').length);
            _this.find('li a.current').each(function() {
                html += $(this).text() + '-';
            })
            // html += _this.find('li a.current').text()+'-';
            str = html.slice(0, -1);
            html1 = '<li class="sub_classify ">' +
                '<a href="/list/">' +
                '<span class="duoxuan">' + str + '</span>' +
                '<span class="sub_classify_close"></span>' +
                '</a>' +
                '</li>';
            $('.produ_title ul').append(html1);
            _this.removeClass('current');
            _this.find('.list_operation').css('display', 'block');
            _this.find('li a').removeClass('current');
            _this.find('.sure-ckd').removeClass('current');
            _this.find('.sure-ckd').addClass('disabled');
            _this.find('.sl_btns').css('display', 'none');


        })
        _this.find('.cancel-ckd').click(function() {
            _this.find('.list_operation').css('display', 'block');
            _this.find('.sl_btns').css('display', 'none');
            _this.find('li a').removeClass('current');
            _this.find('.sure-ckd').removeClass('current');
            _this.find('.sure-ckd').addClass('disabled');
            _this.toggleClass('current');
            // return false;
        })
    })


    $.get('json/produlist.json',function(data){
        var html = template('produlist',data);
        $('.pro_list').html(html);
        move();
    })


    function move(){
        $('.pro_list .pro_item').each(function(){
            var _this = $(this);
            var len = $(this).find('.pro_wrap ul li').length;
            $(this).find('.pro_wrap ul').css('width',len*36);
            if(len>5){
                $(this).find('.pro_prev').css('display','block');
                $(this).find('.pro_next').css('display','block');
                $(this).find('.pro_scroll').addClass('current');
            }else{
                $(this).find('.pro_prev').css('display','none');
                $(this).find('.pro_scroll').removeClass('current');
                $(this).find('.pro_next').css('display','none');
            }
            $(this).find('.pro_wrap ul li').each(function(){
                $(this).mouseover(function(){
                    var str = $(this).find('img').attr('src').replace(/w_30_h_30/,'w_220_h_220')
                    _this.find('.pro_img img').attr('src',str);
                    $(_this).find('.pro_img').attr('href','details.html?id='+$(this).find('img').attr('data-col'));
                })
            })
            var i=0;
            $(this).find('.pro_next').click(function(){
                i++;
                if(i+5>=len){
                    i=1;
                }
                // console.log(_this.find('.pro_wrap ul'));
                _this.find('.pro_wrap ul').animate({'left':-36*i},300);
            })
            $(this).find('.pro_prev').click(function(){
                i--;
                if(i<=0){
                    i=0;
                }
                // console.log(_this.find('.pro_wrap ul'));
                _this.find('.pro_wrap ul').animate({'left':-36*i},300);
            })
        })
    }
})