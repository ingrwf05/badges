$(function() {
  $("#swipe").dragend({
    afterInitialize: function() {
      this.container.style.visibility = "visible";
    }
  })

  myInput = document.querySelectorAll(".input_login");
  for (element of myInput) {
  element.addEventListener("keyup", function() {
    this.size = this.value.length;
    //alert(this.value.length);
  });
  }
});