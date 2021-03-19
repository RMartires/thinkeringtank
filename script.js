(function ($) {
  // variables
  (elementWidth = $('ul').width()),
    (containerWidth = $('nav').width()),
    (difference = elementWidth - containerWidth),
    (finalWidth = difference * 1.5),
    (element = $('ul'));

  // active on click
  $('li').on('click', function () {
    $('li').removeClass('active');
    $(this).addClass('active');
  });
})(jQuery);

function home() {
  var home = `<section id="page"><div class="title"><span>Thinkering Tank</span><span>Building <br> for the<a target="_blanck" href="https://www.atelierventures.co/content/the-passion-economy-and-the-future-of-work">passion economy</a></span></div></section>`; //it can be anything
  var Obj = document.getElementById('page'); //any element to be fully replaced
  if (Obj.outerHTML) {
    //if outerHTML is supported
    Obj.outerHTML = home; ///it's simple replacement of whole element with contents of str var
  }
}

function about() {
  var about = `<section id="page">
  <div class="title2"><span>About</span>
    <p class="content">Thinkering tank is a think tank/research group exploring monetary problems faced by creators.
      We want to explore diffrent monetization tools for creators so as to not limit them to the exsisting ones, 
      what we've observed is that a bunch of the exsisting tools (superfans, adsense) dont work as well with lower income demographics.
      our mission is to explore diffrent solutions and engage in dialogue about this problem to gain better insight with anyone intrested.
    </p>
  </div>
</section>`;
  var Obj = document.getElementById('page'); //any element to be fully replaced
  if (Obj.outerHTML) {
    //if outerHTML is supported
    Obj.outerHTML = about; ///it's simple replacement of whole element with contents of str var
  }
}

function contact() {
  var contact = `<section id="page">
  <div class="title2"><span>Contact us</span>
    <p class="content">
      Hey wanna chat about this, ping me <a class="link" target='_blanck' href="https://twitter.com/RohitMartires">@RohitMartires</a>
      <br>
      if you in Banglore ill buy you a coffe if you can tolerate me bouncing ideas of you 😉.
    </p>
</section>
`;

  var Obj = document.getElementById('page'); //any element to be fully replaced
  if (Obj.outerHTML) {
    //if outerHTML is supported
    Obj.outerHTML = contact; ///it's simple replacement of whole element with contents of str var
  }
}
