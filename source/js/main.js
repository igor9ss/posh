var servicesListLinksElements = document.querySelectorAll('.services__list-link');
      var sliderBoxElements = document.querySelectorAll(".slider-box");
      var tabLinksElements = document.querySelectorAll(".services__list-link");

      var map = {
        0: 'about',
        1: 'wedding',
        2: 'party',
        3: 'beauty-box',
        4: 'course'
      };

      servicesListLinksElements.forEach(function (servicesListLink, i) {
        servicesListLink.addEventListener('click', function (evt) {
          evt.preventDefault();
          hideSliderBoxesElements();
          removeTabLinksElementsClassCurrent();
          showSlide(evt, '.' + map[i])
        });
      });

      var hideSliderBoxesElements = function () {
        sliderBoxElements.forEach(function (sliderBoxElement) {
          sliderBoxElement.style.display = "none";
        });
      };

      var removeTabLinksElementsClassCurrent = function () {
        tabLinksElements.forEach(function (tabLinksElement) {
          tabLinksElement.classList.remove("services__list-link_current")
        });
      };

      var showSlide = function(evt, sliderBoxName) {
        document.querySelector(sliderBoxName).style.display = "flex";
        evt.currentTarget.classList.add('services__list-link_current');
      };

        var prev = document.querySelector('.galery-section__control_prev');
        var next = document.querySelector('.galery-section__control_next');

        prev.addEventListener('click', function(evt) {
          evt.preventDefault();
          plusSlides(-1);
        });

        next.addEventListener('click', function(evt) {
          evt.preventDefault();
          plusSlides(1);
        });

        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("galery-section__slide");

          if (n > slides.length) {slideIndex = 1};
          if (n < 1) {slideIndex = slides.length};
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          };
          slides[slideIndex-1].style.display = "flex";
        }

    window.addEventListener('scroll', scrollFunction);

    function scrollFunction() {
      if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
          document.querySelector(".main-footer__go-top").style.opacity = 1;
      } else {
          document.querySelector(".main-footer__go-top").style.opacity = 0;
      }
    }
