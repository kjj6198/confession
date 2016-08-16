var typeSetting = {
	strings: [],
	stringsElement: null,
	typeSpeed: 200,
	startDelay: 400,
	backSpeed: 200,
	shuffle: false,
	backDelay: 400,
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
	$('#Introduction').animate({opacity: 0});
  $('#Confession1').animate({opacity: 1});
})
 
function buttonHandler(e) {

  if(handler[e.currentTarget.dataset.action] && typeof handler[e.currentTarget.dataset.action] === 'function') {
    handler[e.currentTarget.dataset.action].call(null, e);
  }
}

$(document).on('click', 'button', buttonHandler);