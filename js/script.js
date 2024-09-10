$(document).ready(function () {
  // Initialize user saved items from localStorage or set to an empty array if not found
  let userSavedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

  // Function to update the display of saved items on the "Save for Later" page
  function updateSavedItems() {
    // Clear the current list of saved items
    $("#saved-items-list").empty();

    // Check if there are any saved items
    if (userSavedItems.length === 0) {
      // Display a message if no items are saved
      $("#saved-items-list").append("<p>No items saved yet.</p>");
    } else {
      // Iterate over each saved item and add it to the list
      userSavedItems.forEach((savedItem) => {
        $("#saved-items-list").append(`<li>${savedItem}</li>`);
      });
    }
  }

  // Display saved items when the page loads
  updateSavedItems();

  // Handle click event on the "Save for Later" button
  $(".save-btn").click(function () {
    const savedItem = $(this).data("item");

    // Check if the item is already saved
    if (!userSavedItems.includes(savedItem)) {
      // Add the new item to the saved items array
      userSavedItems.push(savedItem);
      // Save the updated array to localStorage
      localStorage.setItem("savedItems", JSON.stringify(userSavedItems));
      // Alert the user with the number of saved items
      alert(`You have ${userSavedItems.length} items in your "Save for Later" folder.`);
      // Update the display of saved items
      updateSavedItems();
    } else {
      // Alert the user if the item is already saved
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
