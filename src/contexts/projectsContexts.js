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

   Link = "",
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

   this.Link = Link;
   this.Date = Date;
}

export function ProjectsElementList() {
   return [
      new ProjectElement({
         Title: " Title",
         Description: " Description",
         Id: "title",
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
         Id: "wrapping-letters",
         Job: ["code devepoler", "react"],
         PrincipalImageDesktop: "",
         PrincipalImageMobile: "https://i.ibb.co/k95B6Mm/Ahri-de-perfil.jpg",
         BackgroundImageDesktop:
            "https://i.ibb.co/gj3rmJ4/70411649-C476-447-C-8834-8-A0-F0-F3-F6186.jpg",
         BackgroundImageMobile: "https://i.ibb.co/7rS0L4Y/Ahri-de-perfil.jpg",
         GaleryImages: [
            "https://i.ibb.co/GQsrPwx/imagen-22222.jpg",
            [
               "https://i.ibb.co/NyHtQvP/1f27e04cf95f16d51ad26911036b848a95e939a7.jpg",
               {
                  title: "Simplify the code",
                  description:
                     "With wrapping-letters is very easy to use and reduce the code considerably in 95%",
               },
            ],
            "https://i.ibb.co/jg9tcpC/FLpwv-D7-Vg-AQxes7.jpg",
            "https://i.ibb.co/D7zxN2W/sample-0551ec7be9c60314a85918c1385b4172.jpg",
            "https://i.ibb.co/348wz9h/PACIAL-OWEN-FISICA.png",
            "https://i.ibb.co/Pz0fZY2/wenas.jpg",
         ],
         Link: "https://www.google.com",
         Date: "01 01 2020",
      }),
      new ProjectElement({
         Title: "Wrapping Letters HomePage",
         Description: " Description",
         Id: "wrapping-letters-homepage",
         PrincipalImageDesktop: "",
         PrincipalImageMobile: "https://i.ibb.co/b2JvX8R/coven-2x.jpg",
         BackgroundImageDesktop:
            "https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg",
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
         Id: "rynyk",
         PrincipalImageDesktop: "",
         PrincipalImageMobile: "https://i.ibb.co/X5Wg7S5/kda.jpg",
         BackgroundImageDesktop: "https://ttager.netlify.app/img/oaAhri4.jpg",
         BackgroundImageMobile: "https://i.ibb.co/X5Wg7S5/kda.jpg",
         GaleryImages: [
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            [
               "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
               {
                  title: "Simplify the code",
                  description:
                     "With wrapping-letters is very easy to use and reduce the code considerably in 95%",
               },
            ],
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
         ],
         Link: "https://www.google.com",
         Date: "01 01 2020",
      }),
      new ProjectElement({
         Title: "Port-folio",
         Description: " Description",
         Id: "port-folio",
         PrincipalImageDesktop: "",
         PrincipalImageMobile: "https://i.ibb.co/2Zcw0X4/flor.jpg",
         BackgroundImageDesktop:
            "https://i.ibb.co/tCVxqdT/project-portfolio-next-Post.jpg",
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
   ];
}

const ProjectList = ProjectsElementList();
export const recentProjects = ProjectList.slice(
   ProjectList.length - 4,
   ProjectList.length
);
