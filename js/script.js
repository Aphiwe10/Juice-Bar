$(document).ready(function () {
  let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

  // Dropdown menu functionality
  $(".dropdown > a").click(function (event) {
    event.preventDefault();
    $(this).next(".dropdown-menu").slideToggle();
  });

  // Save for later functionality
  function updateSavedItems() {
    const savedItemsList = $("#saved-items-list");
    savedItemsList.empty();
    if (savedItems.length === 0) {
      savedItemsList.append("<p>No items saved yet.</p>");
    } else {
      savedItems.forEach((item) => {
        savedItemsList.append(`<li>${item}</li>`);
      });
    }
  }

  if ($("#saved-items-list").length) {
    updateSavedItems();
  }

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

  // Like button functionality
  $(".like-btn").click(function () {
    const item = $(this).data("item");
    alert(`You liked: ${item}`);
  });

  // Hiding/Showing functionality
  $("button.toggle").click(function () {
    $(".toggle-content").toggle();
  });

  // Animation effects
  $(".animate").click(function () {
    $(this).animate({ fontSize: "2em" }, 500).animate({ fontSize: "1em" }, 500);
  });

  // Chained effects
  $(".chained").click(function () {
    $(this).fadeOut(500).fadeIn(500).slideUp(500).slideDown(500);
  });

  // Gallery image hover effect
  $(".juice-item img").hover(
    function () {
      $(this).animate({ width: "220px", height: "220px" }, 300);
    },
    function () {
      $(this).animate({ width: "200px", height: "200px" }, 300);
    }
  );
});
