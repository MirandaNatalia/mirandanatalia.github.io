
 $(document).ready(function() {
  $(window).on('scroll', function() {
    if (Math.round($(window).scrollTop()) > 100) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
});





more-link[data-v-0ee9defb]:after {
  content: "";
  position: absolute;
  background: var(--primary-color);
  height: 0.8em;
  left: 0;
  right: 0;
  bottom: -0.2em;
  z-index: -1;
  opacity: .8;
  transition: opacity var(--transition),transform var(--transition);

  }


  root {
    --accent-color-1: #8edd9c;
    --accent-color-2: #5257f6;
    --accent-color-3: #ff9798;
    --primary-color: #5257f6;
    --z-header: 10;
    --content-width: 1080px;
    --text-max-width: 500px;
    --transition: .5s ease-in-out;

    }