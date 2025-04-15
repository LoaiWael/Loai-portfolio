contactAnimation();
function contactAnimation() {
  const contactLinks = document.querySelectorAll(".contacts a");
  var timing = 1500;
  for (let i = 0; i < contactLinks.length; i++) {
    contactLinks[i].style.animationName = 'pop-up-contacts'
    contactLinks[i].style.animationTimingFunction = 'cubic-bezier(1, 0, 0, 1)'
    contactLinks[i].style.animationDuration = `${timing}ms`
    timing += 120
  }
}

$("#certificates").slideUp();

$("#certificate-button").click(function () {
  $("#certificates").slideDown("slow");
  document.getElementById("certificates").scrollIntoView();
  $("#certificates-header").addClass("certificates-animation-open");
  $(".certificates-container").addClass("certificates-animation-open");
  // $("#certificates-header").removeClass("certificates-animation-close");
  // $(".certificates-container").removeClass("certificates-animation-close");
});
$("#close-certificates").click(function () {
  $("#certificates").slideUp("slow");
  // $("#certificates-header").addClass("certificates-animation-close");
  // $(".certificates-container").addClass("certificates-animation-close");
  // $("#certificates-header").removeClass("certificates-animation-open");
  // $(".certificates-container").removeClass("certificates-animation-open");
});