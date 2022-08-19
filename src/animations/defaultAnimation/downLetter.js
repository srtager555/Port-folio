export default function moveDownLetterAnimation(element, callback) {
  element[0].childNodes.forEach((target, index) => {
    target.style.transition = `all 500ms ease ${20 * index}ms`;
    target.style.transform = `translateY(0%) translateX(0px) rotate(0deg)`;
  });
  element[1].childNodes.forEach((target, index) => {
    target.style.transition = `all 500ms ease ${20 * index}ms`;
    target.style.transform = `translateY(-100%) translateX(-20px) rotate(15deg)`;
  });
  callback();
}
