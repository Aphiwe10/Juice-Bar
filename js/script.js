$(document).ready(function () {
  let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

  // Function to save item for later
  $(".save-for-later").click(function () {
    const item = $(this).data("item");
    savedItems.push(item);
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    alert(`You have ${savedItems.length} items saved for later.`);
  });

  // Function to display saved items
  function displaySavedItems() {
    const savedItemsList = $("#saved-items-list");
    savedItemsList.empty();
    savedItems.forEach((item) => {
      savedItemsList.append(`<li>${item}</li>`);
    });
  }

  // Display saved items on save-for-later.html
  if ($("#saved-items-list").length) {
    displaySavedItems();
  }

  // Form submission for comments
  $("#comment-form").submit(function (e) {
    e.preventDefault();
    const comment = $("#comment").val();
    alert(`Comment submitted: ${comment}`);
  });

  // Hiding/Showing function
  $("#toggle-gallery").click(function () {
    $(".juice-gallery").toggle();
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

  // Chained effects
  $(".juice-item").click(function () {
    $(this).fadeOut(300).fadeIn(300).slideUp(300).slideDown(300);
  });

  // Form submission for liking an item
  $("#like-form").submit(function (e) {
    e.preventDefault();
    const item = $("#like-item").val();
    alert(`You liked: ${item}`);
  });

  // Form submission for contacting
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
    alert(`Message from ${name} (${email}): ${message}`);
  });
});

$(document).ready(function () {
  // Dropdown menu functionality
  $("nav ul li").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).slideDown(200);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).slideUp(200);
    }
  );

  // Other functionalities like like button, save for later, animations, etc. can be added here.
});

$(document).ready(function () {
  // Dropdown menu functionality
  $(".dropdown > a").click(function (event) {
    event.preventDefault(); // Prevents the default anchor click behavior
    $(this).next(".dropdown-menu").slideToggle(); // Toggles the visibility of the dropdown menu
  });

 // Function to update the saved items list
// Retrieve saved items from localStorage or initialize an empty array if no items are found
let userSavedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

// Function to update the saved items list displayed on the page
function updateSavedItems() {
  // Clear the current content of the saved-items container
  $("#saved-items").empty();
  
  // Check if the userSavedItems array is empty
  if (userSavedItems.length === 0) {
    // If no items are saved, display a message
    $("#saved-items").append("<p>No items saved yet.</p>");
  } else {
    // If there are saved items, display each item inside a <p> element
    userSavedItems.forEach((savedItem) => {
      $("#saved-items").append(`<p>${savedItem}</p>`);
    });
  }
}


  // Update saved items on page load
  updateSavedItems();

  // Save an item to localStorage and update the saved items list
  $(".save-btn").click(function () {
    const item = $(this).data("item");
    if (!savedItems.includes(item)) {
      savedItems.push(item);
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      alert(
        `You have ${savedItems.length} items in your "Save for Later" folder.`
      );
      updateSavedItems();
    } else {
      alert("Item already saved.");
    }
  });

  // Submit comment form
  $("#comment-form").submit(function (event) {
    event.preventDefault();
    const comment = $("#comment").val();
    alert(`Comment submitted: ${comment}`);
  });

  // Like button form
  $("#like-form").submit(function (event) {
    event.preventDefault();
    alert("Thank you for liking our page!");
  });

  // Function to toggle visibility of content
  $("button.toggle").click(function () {
    $(".toggle-content").toggle();
  });

  // Animate elements
  $(".animate").click(function () {
    $(this).animate({ fontSize: "2em" }, 500).animate({ fontSize: "1em" }, 500);
  });

  // Chained effects
  $(".chained").click(function () {
    $(this).fadeOut(500).fadeIn(500).slideUp(500).slideDown(500);
  });
});

$(document).ready(function () {
  // Dropdown menu functionality
  $(".dropdown > a").click(function (event) {
    event.preventDefault(); // Prevents the default anchor click behavior
    $(this).next(".dropdown-menu").slideToggle(); // Toggles the visibility of the dropdown menu
  });

  // Hiding/Showing functionality
  $("button.toggle").click(function () {
    $(".toggle-content").toggle(); // Toggles visibility of elements with class 'toggle-content'
  });

  // Animation effects
  $(".animate").click(function () {
    $(this)
      .animate({ fontSize: "2em" }, 500) // Increases font size to 2em over 500ms
      .animate({ fontSize: "1em" }, 500); // Then reverts font size to 1em over 500ms
  });

  // Chained effects
  $(".chained").click(function () {
    $(this)
      .fadeOut(500) // Fades out over 500ms
      .fadeIn(500) // Fades in over 500ms
      .slideUp(500) // Slides up (hides) over 500ms
      .slideDown(500); // Slides down (shows) over 500ms
  });

  // Save for Later functionality
  let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

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

  updateSavedItems();

  $(".save-btn").click(function () {
    const item = $(this).data("item");
    if (!savedItems.includes(item)) {
      savedItems.push(item);
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      alert(
        `You have ${savedItems.length} items in your "Save for Later" folder.`
      );
      updateSavedItems();
    } else {
      alert("Item already saved.");
    }
  });

  // Comment form submission
  $("#comment-form").submit(function (event) {
    event.preventDefault();
    const comment = $("#comment").val();
    alert(`Comment submitted: ${comment}`);
  });

  // Like form submission
  $("#like-form").submit(function (event) {
    event.preventDefault();
    alert("Thank you for liking our page!");
  });
});
