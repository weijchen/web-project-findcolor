// Check Off Specific Todos by clicking (only add to the element that already exist)
$("ul").on("click", "li", function() {
  // ***better method
  $(this).toggleClass("completed");

  // ***origin method
  // if($(this).css("color") === "rgb(128, 128, 128)") {
  //   $(this).css({
  //     textDecoration: "none",
  //     color: "black"
  //   });
  // } else {
  //   $(this).css({
  //     textDecoration: "line-through",
  //     color: "gray"
  //   });
  // }
})

// Click on X to delete Todo
$("ul").on("click", "span", function() {
  if ($(this).hasClass("trash")) {
    $(this).parent().fadeOut(500, function() {
      $(this).remove();  // 'this' refer to the parent
    });
  } else {
    $(this).parent().toggleClass("star");
    $(this).parent().toggleClass("completed");
    // $(this).parent().css("color", "yellow");
  }
  event.stopPropagation();  // stop bubble up the event listener
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    // create a new li and add to ul
    $("ul").append("<li><span class='trash'><i class='fas fa-trash'></i></span><span class='star'><i class='far fa-star' id='star'></i></span> " + todoText + "</li>");
    // clear val in the input box
    $(this).val("");
  }
});

// $(".fa-plus").on("click", function() {
//   $("input[type='text']").fadeToggle();
//   $(this).addClass("fa-minus");
//   $(this).removeClass("fa-plus");
// }) 

// $(".fa-minus").on("click", function() {
//   $("input[type='text']").fadeToggle();
//   $(this).addClass("fa-plus");
//   $(this).removeClass("fa-minus");
// }) 

$(".toggle").on("click", function() {
  $("input[type='text']").fadeToggle();
  console.log($(this).hasClass("fa-plus"));
  if ($(this).hasClass("fa-plus")) {
    $(this).removeClass("fa-plus");
    $(this).addClass("fa-minus");
  } else {
    $(this).removeClass("fa-minus");
    $(this).addClass("fa-plus");
  }
  event.stopPropagation();  // stop bubble up the event listener
}) 