var show = { opacity: 1 };
var hidden = { opacity: 0 };

var z0 = { zIndex: -1 };
var z1 = { zIndex: 1 };

var typeSetting = {
	strings: [],
	stringsElement: null,
	typeSpeed: 300,
	startDelay: 100,
	backSpeed: 100,
	shuffle: false,
	backDelay: 100,
	loop: false,
	loopCount: false,
	showCursor: false,
	attr: null,
	contentType: 'text',
	callback: function() {
	},
	preStringTyped: function() {},
	onStringTyped: function() {},
	resetCallback: function() {}
};

var handler = {
	set: function(methodName, implementation) {
		if(typeof implementation === 'function') {
		  this[methodName] = implementation;
		}
	}
}


handler.set('nextPage', function() {
	$('#Introduction').animate(hidden).css(z0);
  $('#Confession1').animate(show).css(z1);

  typeSetting.strings = [
    "其實，一直不知道該準備怎樣的禮物給你",
    "因為你很難取悅，而且又吹毛求疵",
    "後來想想，其實能夠一起相處，才是最重要的。",
    "對吧！"
  ];

  typeSetting.callback = function() {
  	$('#yesButton').animate(show);
  }

  $('#ConfessionString').typed(typeSetting);
});

handler.set('memoryPage', function() {
	$('.heart').css({
		WebkitAnimationDuration: '0.7s'
	});
	$('#MemoryPage').animate(show).css(z1);
  $('#Confession1').animate(hidden).css(z0);

  typeSetting.strings = ["比如說..."];
  typeSetting.callback = startImageDisplay();

  $('#ConfessionString2').typed(typeSetting);

});

handler.set('touchingPage', function() {
	$('.heart').css({
		WebkitAnimationDuration: '0.5s'
	});
  $('#ConfessionStart').animate(hidden).css(z0);
  $('#TouchingSection').animate(show).css(z1);

  typeSetting.strings = [
    "糟糕，我的心越跳越快了。",
    "妳說",
    "有些時候做某件事情之所以會覺得開心並不是因為那件事而是因為那個人",
    "謝謝妳這麼對我說",
    "我也是",
    "那麼..."
   ];

   typeSetting.callback = function() {
     $('#TouchingSection').animate(hidden).css(z0);
     $('#ConfessionGo').animate(show).css(z1);
   }

  $('#ConfessionTalk').typed(typeSetting);

  $('#avatar').on('click', function(e) {
  	$('.heart').css({
			WebkitAnimationDuration: '0.3s'
		});
  	$('#ConfessionGo').animate(hidden).css(z0);
    $('#ConfessionGo2').animate(show).css(z1);

    typeSetting.strings = [
      "那...",
      "跟 我 在 一 起 好 嗎 ？",
    ];

    typeSetting.callback = function() {
    	$('#agree').animate(show);
    };

		$('#myConfession').typed(typeSetting);
  });

});

function buttonHandler(e) {
  if(handler[e.currentTarget.dataset.action] && typeof handler[e.currentTarget.dataset.action] === 'function') {
    handler[e.currentTarget.dataset.action].call(null, e);
  }
}

$(document).on('click', 'button', buttonHandler);


$('#yesSelect').on('click', function(e) {
  $('#ConfessionGo2').animate(hidden).css(z0);
  $('#End').animate(show).css(z1);
  $('#avatar').hide();
});

/* */

function startImageDisplay() {
  $('#imageTitle').text('象山');
  $('#image1').attr('src', './img/elephant-mountain.jpg').css(show);

  setTimeout(function(){
  	$('#image1').attr('src', './img/elephant-mountain-2.jpg').css(show);
  }, 3000);

  setTimeout(function() {
  	$('#imageTitle').text('饒河');
  	$('#image1').attr('src', './img/image2.jpg').css(show);
  }, 6000);

  setTimeout(function() {
  	$('#imageTitle').text('咖啡廳');
  	$('#image1').attr('src', './img/image3.jpg').css(show);
  }, 9000);

  setTimeout(function() {
  	$('#imageTitle').text('宜蘭之旅');
  	$('#image1').attr('src', './img/image4.jpg').css(show);

  	setTimeout(function() { $('#image1').attr('src', './img/image5.jpg').css(show); }, 2000);
  	setTimeout(function() { 
  		typeSetting.strings = ["當然，還有更多..."];
	  	$('#MemoryPage').animate(hidden).css(z0);
	  	$('#ConfessionStart').animate(show).css(z1);
	  	$('#More').animate(show);
	  	$('#moreString').typed(typeSetting);

	  	$('#touchPage').animate(show);
  	}, 4000);
  }, 12000);
}