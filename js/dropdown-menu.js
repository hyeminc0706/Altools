// Custom dropdown menu logic for header
// Show dropdown on hover/focus, hide on mouseleave/focusout

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('header li.gnb-dropdown');

  dropdowns.forEach(function (dropdown) {
    var menu = dropdown.querySelector('.dropdown-menu');
    if (!menu) return;

    // Helper to show/hide
    function showMenu() {
      menu.style.display = 'flex';
    }
    function hideMenu() {
      menu.style.display = 'none';
    }

    // Track mouse over both li and menu
    var overDropdown = false;
    var overMenu = false;

    dropdown.addEventListener('mouseenter', function () {
      overDropdown = true;
      showMenu();
    });
    dropdown.addEventListener('mouseleave', function () {
      overDropdown = false;
      setTimeout(function () {
        if (!overDropdown && !overMenu) hideMenu();
      }, 20);
    });

    menu.addEventListener('mouseenter', function () {
      overMenu = true;
      showMenu();
    });
    menu.addEventListener('mouseleave', function () {
      overMenu = false;
      setTimeout(function () {
        if (!overDropdown && !overMenu) hideMenu();
      }, 20);
    });

    // Also handle focus for accessibility
    dropdown.addEventListener('focusin', function () {
      showMenu();
    });
    dropdown.addEventListener('focusout', function (e) {
      // Only hide if focus moves outside the dropdown
      if (!dropdown.contains(e.relatedTarget)) {
        hideMenu();
      }
    });
  });
});
