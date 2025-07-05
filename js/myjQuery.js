$(document).ready(function () {

  // Toggle mobile menu
  $('.menu-toggle').click(function () {
    $('.nav-links').toggleClass('active');
  });

  // Smooth scroll + auto-close menu on link click
  $('.nav-links a').click(function (e) {
    e.preventDefault(); // stop default jump

    const target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top - 100
    }, 800);

    if ($(window).width() <= 768) {
      $('.nav-links').removeClass('active');
    }
  });

  

    // Click actions for each icon
    $(".phone").click(function () {
      $(".contact-info-display").hide().html("+91-9579437409").fadeIn(1500);
    });

    $(".email").click(function () {
      $(".contact-info-display").hide().html("vaishnavshinde186@gmail.com").fadeIn(1500);
    });

    $('.linkedin').click(function() {
        window.open('https://www.linkedin.com/in/vaishnav-shinde-815871260/', '_blank');
    });

    $('.github').click(function() {
        window.open('https://github.com/vs227', '_blank');
    });
    


  // Function to check elements on scroll
  function checkInView() {
    $('.scroll-left, .scroll-right, .reveal-left, .reveal-right, .reveal-bottom, .fade-in').each(function () {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop + 50 && elementTop < viewportBottom - 50) {
        $(this).addClass('visible');
      } else {
        $(this).removeClass('visible');
      }
    });
  }

  // Optimize scroll event handling
 $(window).on('scroll load', function () {
    checkInView();
});

$('#emiProject').on('click', function () {
    window.open("https://vs227.github.io/LoanEMICal/", "_blank");
});



setInterval(() => {
      $('.loadingText').each(function () {
        let current = $(this).text().replace(/\.*$/, ''); // remove old dots
        let dots = $(this).data('dots') || 0;
        dots = (dots + 1) % 6;
        $(this).data('dots', dots);
        $(this).text(current + '.'.repeat(dots));
      });
    }, 500);


});
