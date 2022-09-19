import { projectsList } from "./projectsList";

export function ProjectElement({
  Title = "",
  Description = "",
  Job = [],
  Id = "",

  PrincipalImageDesktop = "",
  PrincipalImageMobile = "",
  BackgroundImageDesktop = "",
  BackgroundImageMobile = "",
  GaleryImages = [],

  Links = [],
  Available = true,
  Developing = false,
  Date = "",
}) {
  this.Title = Title;
  this.Description = Description;
  this.Job = Job;
  this.Id = Id;

  this.PrincipalImageDesktop = PrincipalImageDesktop;
  this.PrincipalImageMobile = PrincipalImageMobile;
  this.BackgroundImageDesktop = BackgroundImageDesktop;
  this.BackgroundImageMobile = BackgroundImageMobile;
  this.GaleryImages = GaleryImages;

  this.Links = [
    [
      ["LinkedIn", "https://www.linkedin.com/in/srtager555/"],
      ["GitHub", "https://github.com/srtager555"],
    ],
    Links,
  ].flat();
  this.Date = Date;
  this.Available = Available;
  this.Developing = Developing;
}

// This prototype is used to add text in the image of the projects and verify if the image is intance of it
export function ImageWithText({ Image = "", Title = "", Description = "" }) {
  this.Image = Image;
  this.Title = Title;
  this.Description = Description;

  return {
    Image,
    Title,
    Description,
  };
}

function InstanceElementList(projects) {
  this.projects = projects || [];
}

InstanceElementList.prototype.getProjects = function () {
  return this.projects;
};
InstanceElementList.prototype.getAvailableProjects = function () {
  return this.getProjects().filter((projects) => projects.Available === true);
};

InstanceElementList.prototype.a = function () {
  return () => console.log(this.projects, "a");
};

InstanceElementList.prototype.getRecentProjects = function () {
  return this.getProjects().length >= 5
    ? this.getProjects().slice(
        this.getProjects().length - 5,
        this.getProjects().length
      )
    : this.getProjects();
};

InstanceElementList.prototype.getRecentProjectsAvailable = function (
  limit = 5
) {
  return this.getAvailableProjects().length >= limit
    ? this.getAvailableProjects().slice(
        this.getAvailableProjects().length - limit,
        this.getAvailableProjects().length
      )
    : this.getAvailableProjects();
};

InstanceElementList.prototype.getProjectById = function (id) {
  return this.getProjects().find((project) => project.Id === id);
};

InstanceElementList.prototype.getProjectIndexById = function (id) {
  return this.getProjects().findIndex((project) => project.Id === id);
};
InstanceElementList.prototype.getProjectIndexAvailableById = function (id) {
  return this.getAvailableProjects().findIndex((project) => project.Id === id);
};

InstanceElementList.prototype.getNextProjectAvailableById = function (id) {
  let postIndex = this.getProjectIndexAvailableById(id);

  return this.getAvailableProjects()[postIndex + 1] <=
    this.getAvailableProjects()
    ? this.getAvailableProjects()[postIndex + 1]
    : this.getAvailableProjects()[0];
};

InstanceElementList.prototype.getNextProjectById = function (id) {
  let postIndex = this.getProjectIndexById(id);

  return this[postIndex + 1] <= this ? this[postIndex + 1] : this[0];
};

export const ProjectsElementList = new InstanceElementList(projectsList);
