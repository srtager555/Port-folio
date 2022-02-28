export function ProjectElement({
    Title = "",
    Description = "",
    Id = "",

    PrincipalImageDesktop = "",
    PrincipalImageMobile = "",
    BackgroundImageDesktop = "",
    BackgroundImageMobile = "",
    GaleryImages = [],

    Link = "",
    Date = "",
}) {
    this.Title = Title;
    this.Description = Description;
    this.Id = Id;

    this.PrincipalImageDesktop = PrincipalImageDesktop;
    this.PrincipalImageMobile = PrincipalImageMobile;
    this.BackgroundImageDesktop = BackgroundImageDesktop;
    this.BackgroundImageMobile = BackgroundImageMobile;
    this.GaleryImages = GaleryImages;

    this.Link = Link;
    this.Date = Date;
}


export function ProjectsElementList() {
    return [
        new ProjectElement({
            Title: " Title",
            Description: " Description",
            Id: "p00",
            PrincipalImageDesktop: "",
            PrincipalImageMobile: "https://i.ibb.co/2Zcw0X4/flor.jpg",
            BackgroundImageDesktop: "",
            BackgroundImageMobile: "",
            GaleryImages: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
            Link: "https://www.google.com",
            Date: "2020-01-01",
        }),
        new ProjectElement({
            Title: "Wrapping Letters",
            Description: " Description",
            Id: "p01",
            PrincipalImageDesktop: "",
            PrincipalImageMobile: "https://i.ibb.co/rHtcHGY/bosque.jpg",
            BackgroundImageDesktop: "",
            BackgroundImageMobile: "",
            GaleryImages: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
            Link: "https://www.google.com",
            Date: "2020-01-01",
        }),
        new ProjectElement({
            Title: "Wrapping Letters HomePage",
            Description: " Description",
            Id: "p02",
            PrincipalImageDesktop: "",
            PrincipalImageMobile: "https://i.ibb.co/b2JvX8R/coven-2x.jpg",
            BackgroundImageDesktop: "",
            BackgroundImageMobile: "",
            GaleryImages: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
            Link: "https://www.google.com",
            Date: "2020-01-01",
        }),
        new ProjectElement({
            Title: "Rynyk",
            Description: " Description",
            Id: "p03",
            PrincipalImageDesktop: "",
            PrincipalImageMobile: "https://i.ibb.co/X5Wg7S5/kda.jpg",
            BackgroundImageDesktop: "",
            BackgroundImageMobile: "",
            GaleryImages: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
            Link: "https://www.google.com",
            Date: "2020-01-01",
        }),
        new ProjectElement({
            Title: "Port-folio",
            Description: " Description",
            Id: "p04",
            PrincipalImageDesktop: "",
            PrincipalImageMobile: "https://i.ibb.co/2Zcw0X4/flor.jpg",
            BackgroundImageDesktop: "",
            BackgroundImageMobile: "",
            GaleryImages: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
            Link: "https://www.google.com",
            Date: "2020-01-01",
        }),

    ];
}

const ProjectList = ProjectsElementList()
export const recentProjects = ProjectList.slice(ProjectList.length - 4, ProjectList.length);