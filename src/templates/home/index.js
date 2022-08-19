import { HomeContainer } from "./home";
import { ProjectsContainer } from "./projects";
import { LestTalkContainer } from "./lestTalk";

export function HomeTemplate() {
  return (
    <>
      <HomeContainer />
      {typeof window !== "undefined" ? <ProjectsContainer /> : <></>}
      <LestTalkContainer />
    </>
  );
}
