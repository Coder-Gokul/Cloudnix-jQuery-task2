$(document).ready(function () {
  //Adding a new div called references before the footer and add a few references in it.
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
    html: `<h4>References</h4>`,
  }).appendTo("#mypage_leftnav");

  //Changing the background color to #FFFF88 | border color to #FF1A00 | text to #CC0000.
  $("#mypage_header nav").css({
    "background-color": "#FFFF88",
    "border-color": "#FF1A00",
    color: "#CC0000",
  });

  $("#mypage_leftnav aside").css({
    "background-color": "#FFFF88",
    "border-color": "#FF1A00",
  });

  $(".leftnav h4 ").css({
    color: "#CC0000",
  });

  $(".hidden").css({
    "background-color": "#FFFF88",
  });

  $(".hidden h4").css({
    color: "#CC0000",
  });

  $("#mypage_centerContent main").css({
    "background-color": "#FFFF88",
    color: "#CC0000",
  });

  $(".year").css({
    color: "#CC0000",
  });

  $(".center-content").css({
    "border-color": "#FF1A00",
  });

  $(".list li").css({
    "border-color": "#FF1A00",
  });

  $("table").css({
    "border-color": "#FF1A00",
    color: "#CC0000",
  });

  // Hiding the element with ID mypage_footer
  // $("#mypage_footer").hide();

  //--------------------------jQuery Exercise 2-----------------------------------------

  //changing the mypage-header to have height of 10px
  $("#mypage_header nav").css({
    height: "10px",
  });

  //adding an "mouseenter" event handler to increase the size to the normal when mouse enters header
  $("nav").mouseenter(function () {
    $("#mypage_header nav").css({
      height: "100px",
    });
  });

  //adding an "mouseleave" event handler to reduce back the size to 10px when mouse leaves header

  $("nav").mouseleave(function () {
    $("#mypage_header nav").css({
      height: "10px",
    });
  });

  // Initially hide the footer

  const $footer = $("#mypage_footer footer");
  $footer.css({
    display: "none",
  });

  
  // Mouse enter: slide down
  $("#mypage_footer").on("mouseenter", function () {
    $footer.stop(true, true).slideDown(10000, function () {
      alert("Animation complete");
    });
  });


  // Mouse leave: slide up
  $("#mypage_footer").on("mouseleave", function () {
    $footer.stop(true).slideUp(500); // Adjust speed as needed
  });

});
