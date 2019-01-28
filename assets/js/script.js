// back to Top
let top1 = document.getElementById("top-button");
top1.addEventListener("click", topFunction);

window.onscroll = function(){
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top1.classList.remove("none");
    top1.classList.add("block");
  } else {
    top1.classList.remove("block");
    top1.classList.add("none");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Change Active State on Scroll

let sections = $('section'),
    nav = $('header'),
    nav_height = nav.outerHeight();
$(window).on('scroll', function () {
  let cur_pos = $(this).scrollTop();
  sections.each(function() {
    let top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      // sections.removeClass('active');

      // $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

// change active state on clicks
nav.find('a').on('click', function () {
  let $el = $(this),
      id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height + 1
  }, 500);

  return false;
});


// Filter

$(document).ready(function() {
  // Initially showing social class <div> and hiding rest of them.
  $('#ourHolder').children('li.all').show();
  $('#ourHolder').children('li:not(.all)').hide();
	$('#filterOptions li span').click(function() {
		// fetch the class of the clicked item
		let ourClass = $(this).attr('class');

    // console.log(ourClass.children('div').outerHeight());
		// reset the active class on all the buttons
		$('#filterOptions li span').removeClass('active');
		// update the active state on our clicked button
		$(this).addClass('active');
    console.log(ourClass);
		if(ourClass == 'all') {
			// show all our items
			$('#ourHolder').children('li.all').show();

      // hide all elements that don't share ourClass
			$('#ourHolder').children('li:not(.' + ourClass + ')').hide();
    }
		else {
			// hide all elements that don't share ourClass
			$('#ourHolder').children('li:not(.' + ourClass + ')').hide();
			// show all elements that do share ourClass
			$('#ourHolder').children('li.' + ourClass).show();
		}
		return false;
	});
});

// progress bar
$(document).on('ready', function() {
  var winHeight = $(window).height(),
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
});
