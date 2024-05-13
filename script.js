// To Top Button -----------------------------------------------------------------------------------------
window.onscroll = function() {scrollButton()};

function scrollButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTopButton").style.display = "block";
  } else {
    document.getElementById("toTopButton").style.display = "none";
  }
}

function goToTop() {
  var top = document.body
  if (top) {
    top.scrollIntoView({behavior: "smooth"});
  }  
}

// Start Button on page 1 -----------------------------------------------------------------------------------------
function goToPage2() {
  var page2 = document.getElementById("page2");
  if (page2) {
    page2.scrollIntoView({behavior: "smooth"});
  }
}