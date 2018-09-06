jQuery.fn.exists = function(){return this.length>0;}


function invite_actions(){
  $('.send-invite__actions').find('button').eq(1).trigger('click');
  return true;
}

function next_client() {
	next_element = $("button[data-control-name='srp_profile_actions']").eq(0);
	console.log(next_element.exists());
	if(next_element.exists()) {
		next_element.trigger('click');
		return setTimeout(invite_actions, 300);
		
	} else {
		return false;
	}
}


setTimeout(function next() {

    if(next_client()) {    
    	setTimeout(next, 600);
    	console.log('next');
    } else {
    	console.log('next değil')
    	$('.page-list .active').next().find('button').trigger('click');
    	setTimeout(next, 2000);

    }
    

}, 300);