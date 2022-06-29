import anime from "animejs";

export default function moveDownLetterAnimation(element, callback) {
   anime
      .timeline({
         duration: 500,
         easing: "easeInOutSine",
      })
      .add({
         targets: element[0].childNodes,
         translateY: ["100%", 0],
         translateX: ["-20px", 0],
         rotate: ['15deg', '0deg'],
         delay: anime.stagger(20),
      })
      .add(
         {
            targets: element[1].childNodes,
            translateY: [0, "-100%"],
            translateX: [0, "-20px"],
            rotate: ['0deg', '15deg'],
            delay: anime.stagger(20),
            complete: function (anim) {
               if (anim.completed) callback();
            },
         },
         0
      );
}
