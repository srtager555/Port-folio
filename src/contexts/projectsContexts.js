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
            BackgroundImageMobile: "https://i.ibb.co/2Zcw0X4/flor.jpg",
            GaleryImages: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
            Link: "https://www.google.com",
            Date: "01 01 2020",
        }),
        new ProjectElement({
            Title: "Wrapping Letters",
            Description: " Description",
            Id: "p01",
            PrincipalImageDesktop: "",
            PrincipalImageMobile: "https://i.ibb.co/rHtcHGY/bosque.jpg",
            BackgroundImageDesktop: "https://i.ibb.co/gj3rmJ4/70411649-C476-447-C-8834-8-A0-F0-F3-F6186.jpg",
            BackgroundImageMobile: "https://i.ibb.co/rHtcHGY/bosque.jpg",
            GaleryImages: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
            Link: "https://www.google.com",
            Date: "01 01 2020",
        }),
        new ProjectElement({
            Title: "Wrapping Letters HomePage",
            Description: " Description",
            Id: "p02",
            PrincipalImageDesktop: "",
            PrincipalImageMobile: "https://i.ibb.co/b2JvX8R/coven-2x.jpg",
            BackgroundImageDesktop: "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg",
            BackgroundImageMobile: "https://i.ibb.co/b2JvX8R/coven-2x.jpg",
            GaleryImages: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
            Link: "https://www.google.com",
            Date: "01 01 2020",
        }),
        new ProjectElement({
            Title: "Rynyk",
            Description: " Description",
            Id: "p03",
            PrincipalImageDesktop: "",
            PrincipalImageMobile: "https://i.ibb.co/X5Wg7S5/kda.jpg",
            BackgroundImageDesktop: "https://ttager.netlify.app/img/oaAhri4.jpg",
            BackgroundImageMobile: "https://i.ibb.co/X5Wg7S5/kda.jpg",
            GaleryImages: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
            Link: "https://www.google.com",
            Date: "01 01 2020",
        }),
        new ProjectElement({
            Title: "Port-folio",
            Description: " Description",
            Id: "p04",
            PrincipalImageDesktop: "",
            PrincipalImageMobile: "https://i.ibb.co/2Zcw0X4/flor.jpg",
            BackgroundImageDesktop: "https://i.ibb.co/tCVxqdT/project-portfolio-next-Post.jpg",
            BackgroundImageMobile:"https://i.ibb.co/2Zcw0X4/flor.jpg",
            GaleryImages: [
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            ],
            Link: "https://www.google.com",
            Date: "01 01 2020",
        }),

    ];
}

const ProjectList = ProjectsElementList()
export const recentProjects = ProjectList.slice(ProjectList.length - 4, ProjectList.length);