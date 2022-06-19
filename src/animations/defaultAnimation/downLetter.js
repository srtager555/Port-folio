import anime from "animejs";

export default function moveDownLetterAnimation(element) {
    anime
       .timeline({
          duration: 500,
          easing: "easeInOutSine",
       })
       .add({
          targets: element.current.children[0].childNodes,
          translateY: ["-200%", 0],
          delay: anime.stagger(20),
       })
       .add(
          {
             targets: element.current.children[1].childNodes,
             translateY: [0, "200%"],
             delay: anime.stagger(20),
          },
          0
       );
 }