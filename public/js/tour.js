$(function() {
  var newsletter = "";
  var $demo, duration, remaining, tour;
  $demo = $("#demo");
  duration = 5000;
  remaining = duration;
  tour = new Tour({
    onStart: function() {
      return $demo.addClass("disabled", true);
    },
    onEnd: function() {
      return $demo.removeClass("disabled", true);
    },
    debug: true,
    keyboard : true,
    backdrop : true,
    storage : window.localStorage,
    steps: [
      //  {
      //   path: "/emotions",
      //   element: ".tour-step.tour-step-zero",
      //   placement: "top",
      //   orphan: true,
      //   animation: true,
      //   title: "Welcome to <strong>Awake<sup>n</sup>Me</strong>",
      //   content: "<strong>The Emotional Transformer, Wisdom Portal, and Evolution Accelerator</strong><br><br>Feel free to take this Tour<br>Or Go & Explore!<br><br><em>The Tour can be taken at anytime<br>from the Menu Button at the Bottom of Every Page!</em>"
      // },
      // {
      //   path: "/emotions",
      //   redirect: true,
      //   element: ".tour-step.tour-step-nineteen",
      //   placement: "top",
      //   animation: true,
      //   orphan: true,
      //   title: "Surprise!",
      //   content: "Enter your Email for a <strong>Discount</strong> on Media that's arriving soon..<br><br><input class='form-control' type='text' name='your_email'>",
      //   onNext : function(tour){
      //       var email = $("input[name=your_email]").val();
      //       if ($.trim(email) !== ""){
      //           newsletter = email;
      //       }
      //   }
      // },
      // {
      //   path: "/emotions",
      //   redirect: true,
      //   element: ".tour-step.tour-step-twenty",
      //   placement: "top",
      //   animation: true,
      //   orphan: true,
      //   title: "Wondrous!",
      //   content: "<strong>Now go venture beyond, into the newness of truthness</strong>",
      //   onHide : function(tour){
      //       // changeColor();
      //   }
      // },

    ]
  }).init().start();
  $(document).on("click", "[data-demo]", function(e) {
    e.preventDefault();
    if ($(this).hasClass("disabled")) {
      return;
    }
    tour.restart();
  });
});