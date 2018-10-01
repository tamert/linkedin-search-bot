'use strict';
/**
 * @return {?}
 */
jQuery.fn.exists = function() {
  return this.length > 0;
};
/**
 * @return {undefined}
 */
function invite_actions2() {
  $(".send-invite .send-invite__actions").find("button").eq(1).trigger("click");
}
/**
 * @return {?}
 */
function invite_actions() {
  if ($("#email").length > 0) {
    $(".send-invite__cancel-btn").click();
    next_element = $("button[data-control-name='srp_profile_actions']").eq(0);
    next_element.remove();
  }
  $(".send-invite__actions").find("button").eq(0).trigger("click");
  $("#custom-message").val("your message");
  return setTimeout(invite_actions2, 300);
}
/**
 * @return {?}
 */
function next_client() {
  next_element = $("button[data-control-name='srp_profile_actions']").eq(0);
  console.log(next_element.exists());
  if (next_element.exists()) {
    next_element.trigger("click");
    return setTimeout(invite_actions, 300);
  } else {
    return false;
  }
}
setTimeout(function next() {
  if (next_client()) {
    setTimeout(next, 600);
    console.log("next");
  } else {
    console.log("next de\u011fil");
    $(".page-list .active").next().find("button").trigger("click");
    setTimeout(next, 2000);
  }
}, 300);
