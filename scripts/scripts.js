// Hamburger Menu Toggle
$(function() {
  const hamburger = $('#hamburger');
  const mobileNav = $('#mobile-nav');
  
  // Toggle menu on hamburger click
  hamburger.on('click', function() {
    hamburger.toggleClass('active');
    mobileNav.toggleClass('active');
  });
  
  // Close menu when a link is clicked
  mobileNav.find('a').on('click', function() {
    hamburger.removeClass('active');
    mobileNav.removeClass('active');
  });
});

// simple jQuery interactions
$(function(){
  // open modal
  $('#cta-subscribe, #cta-quick').on('click', function(e){
    e.preventDefault();
    $('#subscribe-modal').fadeIn(150);
  });
  $('.modal-close').on('click', function(){ $('#subscribe-modal').fadeOut(120); });
  // submit subscribe form
  $('#subscribe-form').on('submit', function(e){
    e.preventDefault();
    var name = $(this).find('[name=name]').val();
    var contact = $(this).find('[name=contact]').val();
    alert('Thanks, ' + name + '. We received your request. We will contact you at ' + contact + '.');
    $('#subscribe-modal').fadeOut(120);
    $(this)[0].reset();
  });

  // simple contact form demo handler
  $('#sendContact').on('click', function(e){
    e.preventDefault();
    alert('Thank you. Your message has been sent (demo).');
    $('#contactForm')[0].reset();
  });

  // nav toggle for small screens
  $('.nav-toggle').on('click', function(){
    $('.main-nav').slideToggle(150);
  });
});

/**
 * Calculates estimated daily revenue and total investment based on form inputs.
 */
function calculateProfit() {
  // Get input values (converting them to numbers)
  const cost = parseFloat(document.getElementById('cost').value) || 0;
  const machines = parseInt(document.getElementById('machines').value) || 0;
  const price = parseFloat(document.getElementById('price').value) || 0;
  const cleans = parseInt(document.getElementById('cleans').value) || 0;

  // Calculations: Daily Revenue = Machines * Price * Cleans per day
  const dailyRevenue = machines * price * cleans;
  const totalInvestment = cost * machines;

  // Display results, formatted as currency
  document.getElementById('daily-revenue').textContent = '$' + dailyRevenue.toFixed(2);
  document.getElementById('total-investment').textContent = '$' + totalInvestment.toFixed(2);
}

/**
 * Highlight active menu item based on scroll position - using jQuery
 */
$(function() {
  var navLinks = $('nav a:not(.cta-button)');
  var allNavLinks = $('nav a');
  
  // Highlight active link on click
  allNavLinks.on('click', function(e) {
    navLinks.removeClass('active');
    if (!$(this).hasClass('cta-button')) {
      $(this).addClass('active');
    } else {
      $(this).addClass('active');
    }
  });

  // Update active link on scroll
  $(window).on('scroll', function() {
    var current = '';
    var sections = $('section');
    
    sections.each(function() {
      var sectionTop = $(this).offset().top;
      if ($(window).scrollTop() >= (sectionTop - 200)) {
        current = $(this).attr('id');
      }
    });

    navLinks.removeClass('active');
    allNavLinks.removeClass('active');
    
    navLinks.each(function() {
      if ($(this).attr('href') === '#' + current) {
        $(this).addClass('active');
      }
    });
  });
  
  // Initialize - highlight home section on page load
  $('nav a[href="#home"]').addClass('active');
});
