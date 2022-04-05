$(document).ready(function () {


$('#hamburger').click(function (e) {
    $('.dropDownMenu').fadeToggle();
    $(this).toggleClass('active');
});

// $(document).mouseup(function (e){ // событие клика по веб-документу
//   var div = $("#Topmenu"); // тут указываем ID элемента
//   if (!div.is(e.target) // если клик был не по нашему блоку
//       && div.has(e.target).length === 0 
//       && $('#hamburger').hasClass('active')) 
//       { // и не по его дочерним элементам
//     //div.hide(); // скрываем его
//     $('.dropDownMenu').fadeOut();
//     $('#hamburger').removeClass("active");
//   }	
// });



$(window).scroll(function(){
  var wScrTop =  $(window).scrollTop()
  if (wScrTop > 0) {
    $('.SticyNav').addClass('fixed')
  }else{
    $('.SticyNav').removeClass('fixed')
  }

});

$(".dropDownMenu a[href^='#'], .Foot__menu a.link[href^='#']").click(function(e){
  e.preventDefault();
  var id  = $(this).attr('href'), //забираем идентификатор бока с атрибута href
      top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь

      $("html, body").animate({scrollTop: (top - 70)}, 300);

  //$('body,html').animate({scrollTop: top}, 1500);
});

$('.Slider1').owlCarousel({
        // center: true,
        items:4,
        loop:true,
        margin:10,
        nav:true,
        dots: false,
      // margin:10,
        responsive:{
          0:{
            items:1,
            nav:false,
            dots: true
          },
          540:{
            nav:true,
            dots: false,
            items:2
          },
          768:{
            nav:true,
            dots: false,
            items:2
          },
          992:{
            nav:true,
            dots: false,
            items:3
          }
        }
      });

$('.Slider2').owlCarousel({
        // center: true,
        items:3,
        loop:true,
        margin:10,
        nav:true,
		lazyLoad:true,
        dots: false,
      // margin:10,
        responsive:{
          0:{
            items:1,
            nav:false,
            dots: true
          },
          768:{
            nav:true,
            dots: false,
            items:2
          }
        }
      });	


  $('.bpopup').click(function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $(href).bPopup({
      closeClass: 'Modalclose'
    });
  });
  //или

  $('.bpopup_').click(function (e) {
    e.preventDefault();
    $('#zakazzvonok').bPopup({
      closeClass: 'close'
    });
  });


  $("form#FormaModal").submit(function () {
    var formNm = $('#FormaModal');
    $.ajax({
        type: "POST",
        url: 'mail.php',
        data: formNm.serialize(),
        success: function (data) {
            // Вывод текста результата отправки
            $(formNm).html(data); 
        },
        error: function (jqXHR, text, error) {
            // Вывод текста ошибки отправки
            $(formNm).html(error);         
        }
    });
    return false;
});	

$("form#Forma1").submit(function () {
  var formNm = $('#Forma1');
  $.ajax({
      type: "POST",
      url: 'mail.php',
      data: formNm.serialize(),
      success: function (data) {
          // Вывод текста результата отправки
          $(formNm).html(data); 
      },
      error: function (jqXHR, text, error) {
          // Вывод текста ошибки отправки
          $(formNm).html(error);         
      }
  });
  return false;
});	


$(function(){

  $(".WrapTabs .WrapTabs__head .WrapTabs__tab").on("click", function(){
      var tabs = $(".WrapTabs .WrapTabs__head .WrapTabs__tab")
          cont = $(".WrapTabs .WrapTabs__body .WrapTabs__cont");
    // Удаляем классы active
      tabs.removeClass("active");
      cont.removeClass("active");
    // Добавляем классы active
      $(this).addClass("active");
      cont.eq($(this).index()).addClass("active");
      return false;
  });
});







});
//$(document).ready



// Accordion -1
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.Acc-Title');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the .Acc-Text
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.Acc-Text').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.Accardion'), false);
})

// Accordion -1
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.AccExpert__img');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the .Acc-Text
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.AccExpert__Text').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.AccExpert'), false);
})



