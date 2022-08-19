import WrapppingLetters from "wrapping-letters-react";

export function AboutMeContainer({ l }) {
  return (
    <div ref={l} id="aboutMe" className="container container-aboutMe">
      <WrapppingLetters
        word="Carlos Ponce"
        wordOptions={[
          {
            ClassToAdd: "title-letter",
          },
        ]}
      />
      <WrapppingLetters
        word="Front-end Developer"
        wordOptions={[
          {
            ClassToAdd: "subTitle-letter",
          },
        ]}
      />
    </div>
  );
}
