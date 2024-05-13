// Automate define the page current ----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                history.pushState({}, null, `#${id}`);
            }
        });
    });

    // Track all divs that have an `id` applied
    ['page1', 'page2', 'page3'].forEach((id) => {
        observer.observe(document.getElementById(id));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select all links in the navbar
    const navLinks = document.querySelectorAll('#navBarPage1 .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();
        });
    });
});

// To Top Button -----------------------------------------------------------------------------------------
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTopButton").style.display = "block";
  } else {
    document.getElementById("toTopButton").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

