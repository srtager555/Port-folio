import anime from "animejs";

export default function moveUpLetterAnimation(
   element,
   callback = function () {}
) {
   callback()
   anime
      .timeline({
         duration: 500,
         easing: "easeInOutSine",
      })
      .add({
         targets: element[0].childNodes,
         translateY: [0, "100%"],
         delay: anime.stagger(20),
      })
      .add(
         {
            targets: element[1].childNodes,
            translateY: ["-100%", 0],
            delay: anime.stagger(20),
         },
         0
      );
}
