
    $(function() {
      $("#swipe").dragend({
        afterInitialize: function() {
          this.container.style.visibility = "visible";
        }
      })
    });