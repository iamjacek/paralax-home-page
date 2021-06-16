var controller = new ScrollMagic.Controller()
var timeline = new TimelineMax()

timeline
  .fromTo(".man", 3, { y: -50 }, { y: -350 })
  .fromTo(".bg2", 3, { y: -50 }, { y: -200 }, "-=3")
  .fromTo(".bg1", 3, { y: -50 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=1")
  .fromTo(".par", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=2")
var scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller)
