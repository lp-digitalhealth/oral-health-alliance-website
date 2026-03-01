// OHIA Strategic Priorities Expand/Collapse Functionality

document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.priority-toggle');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const detailsId = toggle.getAttribute('aria-controls');
      const details = document.getElementById(detailsId);
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      // Collapse all other cards
      document.querySelectorAll('.priority-details').forEach(function (d) {
        d.hidden = true;
      });
      document.querySelectorAll('.priority-toggle').forEach(function (t) {
        t.setAttribute('aria-expanded', 'false');
      });
      // Toggle current card
      if (!expanded) {
        details.hidden = false;
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        details.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    // Keyboard accessibility: Enter/Space
    toggle.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.click();
      }
    });
  });
});
