$(document).ready(function () {
  // Adding a new div called references before the footer and add a few references in it
  $("<div/>", {
    id: "references",
    html: `
      <main class="center-content">
        <div class="hidden">
          <h4>References</h4>
        </div>
        <ul class="list">
          <li>John Doe - Front-end Developer at Tech Corp</li>
          <li>Jane Smith - Senior Manager at XYZ Ltd.</li>
          <li>Michael Brown - Lead Developer at WebWorks</li>
        </ul>
      </main>
    `,
  }).appendTo("#mypage_centerContent");

  $("<aside>", {
    class: "leftnav",
    html: "<h4>References</h4>",
  }).appendTo("#mypage_leftnav");

  // Common styles
  const commonStyles = {
    "background-color": "#FFFF88",
    "border-color": "#FF1A00",
    color: "#CC0000",
  };

  $("#mypage_header nav, #mypage_leftnav aside, .hidden, #mypage_centerContent main, table, #mypage_footer").css(commonStyles);
  $(".leftnav h4, .hidden h4, .year").css("color", "#CC0000");
  $(".center-content, .list li").css("border-color", "#FF1A00");

  // Set initial height of nav and handle mouse events
  const $headerNav = $("#mypage_header nav");
  $headerNav.css("height", "10px");

  $("nav").hover(
    function () { $headerNav.stop().css("height", "100px"); },
    function () { $headerNav.stop().css("height", "10px"); }
  );

  // Initially hide the footer
  const $footer = $("#mypage_footer footer").hide();

  // Mouse enter: slide down
  $("#mypage_footer").hover(
    function () { $footer.stop(true, true).slideDown(10000, function () { alert("Animation complete"); }); },
    function () { $footer.stop(true).slideUp(500); }
  );
});
