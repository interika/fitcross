const menuButton = $(".menu-button");
const menuContainer = $(".container-menu");

function initMobile() {
  window.onscroll = function() {};
  menuContainer.hide();
  menuButton.show().removeClass("active");
}

function initTablet() {
  window.onscroll = function() {};
  menuContainer.hide();
  menuButton.show().removeClass("active");
}

function counerStart(offset) {
  var counterMemberOffset = $("#counter-member").offset();
  if (offset + 500 >= counterMemberOffset.top) {
    console.log("запустить ");
  }
}

function initDesktop() {
  menuContainer.show();
  menuButton.hide();

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 100) {
      menuContainer.show();
      menuButton.hide();
    } else {
      menuButton.show().removeClass("active");
      menuContainer.hide();
    }
  };
}

$(document).ready(function() {
  const counterMember = $("#counter-member");
  const counterTrainer = $("#counter-trainer");
  const counterClass = $("#counter-class");
  const counterEquip = $("#counter-equip");

  let counterMemberEnabled = false;
  let counterTrainerEnabled = false;
  let counterClassEnabled = false;
  let counterEquipEnabled = false;

  function getScrollToElem(counterBlock) {
    var targetPos = counterBlock.offset().top;
    var winHeight = $(window).height();
    let scrollToElem = targetPos - winHeight;

    return scrollToElem;
  }

  function initCounter(
    counterBlock,
    counterLimit,
    counterStep = 1,
    callback = function() {}
  ) {
    let scrollToElem = getScrollToElem(counterBlock);
    let winScrollTop = $(this).scrollTop();

    if (winScrollTop > scrollToElem) {
      //сработает когда пользователь доскроллит к элементу с классом .elem
      $(function() {
        callback();
        var count = 0,
          interval = setInterval(function() {
            count += counterStep;
            counterBlock.text(count);

            if (count > counterLimit) {
              clearInterval(interval);
            }
          }, 10);

        counterBlock.text(count);
      });
    }
  }

  $(window).scroll(function() {
    if (!counterMemberEnabled) {
      initCounter(counterMember, 1550, 15, function() {
        counterMemberEnabled = true;
      });
    }

    if (!counterTrainerEnabled) {
      initCounter(counterTrainer, 777, 7, function() {
        counterTrainerEnabled = true;
      });
    }

    if (!counterClassEnabled) {
      initCounter(counterClass, 55, 1, function() {
        counterClassEnabled = true;
      });
    }

    if (!counterEquipEnabled) {
      initCounter(counterEquip, 12, 1, function() {
        counterEquipEnabled = true;
      });
    }
  });
});
//===================================================3
ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function() {
      initMobile();
    }
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function() {
      initTablet();
    }
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function() {
      initDesktop();
    }
  }
]);

//======================================== MENU

function handleMenu(e) {
  e.stopPropagation();
  e.preventDefault();
  menuButton.toggleClass("active");
  menuContainer.toggle("slide");
}

menuButton.on("click", handleMenu);

function hideMenu() {
  menuButton.toggleClass("active");
  menuContainer.toggle("slide");
}
$(".menu-nav__item a").on("click", hideMenu);
// =====================================SLIDER
$(".slider").slick({
  infinite: true,
  adaptiveHeight: true,
  slidesToScroll: 1,

  mobileFirst: true,
  appendArrows: $(".slider-arrows"),
  prevArrow: '<i class="fa fa-angle-left slick-arrow__left"></i>',
  nextArrow: '<i class="fa fa-angle-right slick-arrow__right"></i>',

  responsive: [
    {
      breakpoint: 460,
      settings: {
        arrows: true
      }
    },
    {
      breakpoint: 1153,
      settings: {
        arrows: true
      }
    }
  ]
});

// =====================================SLIDER BLOG

$(".blog-slider").slick({
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: true,
  appendDots: $(".dotts-pagination"),
  responsive: [
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4
      }
    }
  ]
});
// =====================================SLIDER BLOG
$(".gallery-slider").slick({
  autoplay: true,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: true,
  appendDots: $(".dotts-gallery"),
  responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1076,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4
      }
    }
  ]
});
//====================================== SLIDER GALLERY

new SmoothScroll('a[href*="#"]', {
  speed: 1000
});

//====================================== SCROLL

$(".coaches-slider").slick({
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: true,
  appendDots: $(".coaches-dotts"),
  responsive: [
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4
      }
    }
  ]
});

//==================================SLIDER COACHES
//===================================FORM
var form = $("#contact-form"),
  nameField = $('.cont-form_pos input[name="name"]'),
  nameError = $(".cont-form_pos .error-name"),
  emailField = $('.cont-form_pos input[name="email"]'),
  emailError = $(".cont-form_pos .error-email"),
  phoneField = $('.cont-form_pos input[name="phone"]'),
  phoneError = $(".cont-form_pos .error-phone");

var validate = function() {
  var errorExists = false;
  // очищаем все старые ошибки.
  nameError.text("");
  emailError.text("");
  phoneError.text("");

  // name validation
  var name = nameField.val().length;
  if (name < 3) {
    errorExists = true;
    addErrorMessage(nameError, "Имя должно быть больше чем 3 символа!");
  }
  if (name > 20) {
    errorExists = true;
    addErrorMessage(nameError, "Имя должно быть меньше 20 символов!");
  }

  // email validation
  var email = emailField.val();
  if (!validateEmail(email)) {
    errorExists = true;
    addErrorMessage(emailError, "Неверный емэйл!");
  }

  // phoneValidation
  var phone = phoneField.val();
  if (!validatePhone(phone)) {
    errorExists = true;
    addErrorMessage(phoneError, "Неверный телефон");
  }

  return !errorExists;
};

var addErrorMessage = function(errorBlock, errorText) {
  errorBlock.html(errorText);
};

$(".cont-form_pos input").on("change", function() {
  validate();
});

$(".cont-form_pos input").keyup(function() {
  validate();
});

form.submit(function(e) {
  console.log(validate());

  if (validate()) {
    //отправляем запрос
    alert("Данные отправлены. Мы с вами свяжемся.");
    return true;
  }

  return false;
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhone(phone) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(phone);
}
