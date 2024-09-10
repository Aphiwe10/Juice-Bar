$(document).ready(function () {
  // Initialize saved items
  let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

  // Function to update the saved items list
  function updateSavedItems() {
    $("#saved-items").empty();
    if (savedItems.length === 0) {
      $("#saved-items").append("<p>No items saved yet.</p>");
    } else {
      savedItems.forEach((item) => {
        $("#saved-items").append(`<p>${item}</p>`);
      });
    }
  }

  // Display saved items on page load
  updateSavedItems();

  // Save item for later
  $(".save-btn").click(function () {
    const item = $(this).data("item");
    if (!savedItems.includes(item)) {
      savedItems.push(item);
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      alert(`You have ${savedItems.length} items in your "Save for Later" folder.`);
      updateSavedItems();
    } else {
      alert("Item already saved.");
    }
  });

  // Dropdown menu functionality
  $("nav ul li").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).slideDown(200);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).slideUp(200);
    }
  );

  $(".dropdown > a").click(function (event) {
    event.preventDefault();
    $(this).next(".dropdown-menu").slideToggle();
  });

  // Form submission for comments
  $("#comment-form").submit(function (e) {
    e.preventDefault();
    const comment = $("#comment").val();
    alert(`Comment submitted: ${comment}`);
  });

  // Like button form
  $("#like-form").submit(function (e) {
    e.preventDefault();
    alert("Thank you for liking our page!");
  });

  // Contact form submission
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
    alert(`Message from ${name} (${email}): ${message}`);
  });

  // Hiding/Showing functionality
  $("#toggle-gallery").click(function () {
    $(".juice-gallery").toggle();
  });

  $("button.toggle").click(function () {
    $(".toggle-content").toggle();
  });

  // Animation effects
  $(".juice-item img").hover(
    function () {
      $(this).animate({ width: "220px", height: "220px" }, 300);
    },
    function () {
      $(this).animate({ width: "200px", height: "200px" }, 300);
    }
  );

  $(".animate").click(function () {
    $(this)
      .animate({ fontSize: "2em" }, 500)
      .animate({ fontSize: "1em" }, 500);
  });

  // Chained effects
  $(".juice-item").click(function () {
    $(this).fadeOut(300).fadeIn(300).slideUp(300).slideDown(300);
  });

  $(".chained").click(function () {
    $(this)
      .fadeOut(500)
      .fadeIn(500)
      .slideUp(500)
      .slideDown(500);
  });
});
