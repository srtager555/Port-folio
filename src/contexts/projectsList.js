import { ProjectElement, ImageWithText } from "./projectsContexts";

export const projectsList = [
  new ProjectElement({
    Title: "Rynyk - DS bot",
    Description:
      "She is Rynyk, she is a Discord bot to moderate channels, her main goal is to remove spam and punish it.",
    Id: "rynyk-discord",
    Job: ["logic", "JS"],
    PrincipalImageDesktop: "https://i.ibb.co/dtbsZxt/RYNYK-TD.png",
    PrincipalImageMobile: "https://i.ibb.co/g7wjsF6/RYNYK-TM.png",
    BackgroundImageDesktop: "https://i.ibb.co/xXHxDTb/the-Future1.jpg",
    BackgroundImageMobile: "https://i.ibb.co/xXHxDTb/the-Future1.jpg",
    Date: "06 12 2022",
    Developing: true,
  }),
  new ProjectElement({
    Title: "Wrapping Letters - Demo Page",
    Description:
      "Here is the Wrapping Letters demo page, I made it together another devs, I was the team leader.",
    Id: "wrapping-letters-demo",
    Job: ["FrontEnd Developer", "Next JS"],
    PrincipalImageDesktop: "https://i.ibb.co/N37yL6q/WLD-TB.jpg",
    PrincipalImageMobile: "https://i.ibb.co/CMq9WRk/WLD-TM.jpg",
    BackgroundImageDesktop: "https://i.ibb.co/d01xYZB/WLD-TD.jpg",
    BackgroundImageMobile: "https://i.ibb.co/jfz4pG1/WLD-TM.jpg",
    Date: "09 08 2022",
    Developing: true,
    GaleryImages: [
      new ImageWithText({
        Title: "The Demo page",
        Description:
          "To will start I want to talk a little about the history of this project, is very interesant how I have delayed the project for 2 things, the content and the desing, the second is the raeason most important",
      }),
      new ImageWithText({
        Description:
          "A few months ago I made the demo page but Design and logic of the site were trash, I didn't like this result and I dropped this project to the trash, that why the project Wrapping Letters has a different brand design, I don't think change it because it's a good story to tell",
      }),
      new ImageWithText({
        Title: "Now with the current project",
        Description: `The new design and syntax is better in UX and UI, more light and sweet.

        More minimal and elegant design with smooth animation, I solved the problem with the previus home page "The content".

        When I did the first version of the site, the content of the home was very useless, its not give a real information about the project, just "what you can do"`,
        Image: "https://i.ibb.co/yN3nbv3/wld-mobile-version.png",
      }),
      new ImageWithText({
        Image: "https://i.ibb.co/GMRmNbT/wld-desktop-version.png",
      }),
      new ImageWithText({
        Title: "The previous version of the home page",
        Description:
          "The above design is not bad but for newbie but I am working on the Frontend since 4 years. It was not at my level.",
        Image:
          "https://i.ibb.co/pvZyJtK/Captura-de-Pantalla-2022-09-19-a-la-s-19-48-36.png",
      }),
      new ImageWithText({
        Image:
          "https://i.ibb.co/WcgVj0q/Captura-de-Pantalla-2022-09-19-a-la-s-19-45-21.png",
      }),
      new ImageWithText({
        Title: "Now the part moust important the documentation!",
      }),
      new ImageWithText({
        Title: "The new documentation design has a big update.",
        Description: `Starting in the mobile design is most minimal and elegant, the desktop too!
        
        The most important change is in the syntax, now the code will search each attribute optimization the load of the page and the manipulation of the code
        
        Obviously the scale of the page with the new structure is "infinite", if necessary I can put a navigator in the nav to make it easier to find documents if the page scales too much`,
        Image: "https://i.ibb.co/h12h5zC/wld-remastered-design-mobile.png",
      }),
      new ImageWithText({
        Image: "https://i.ibb.co/qjMk8N5/wld-remastered-design-desktop.png",
      }),
      new ImageWithText({
        Description:
          "The different with the previous version I put the documentation from NPM in this part, quite ugly the truth",
      }),
      new ImageWithText({
        Description: `I'm developing now the project, the hardest work is to make the API, I'm now working on the documentation to implement in the API and the API needs a structure that work with Wrapping Letters as well...`,
      }),
    ],
    Links: [
      ["The previus version", "https://wrapping-letters.netlify.app"],
      [
        "The project's Github",
        "https://github.com/enddne/wrapping-letters-demopage",
      ],
    ],
  }),
  new ProjectElement({
    Title: "Wrapping Letters",
    Description:
      "Wrap any letter, word or phrase(or text), with package this job is so easy, only you need called the componet!",
    Id: "wrapping-letters",
    Job: ["code devepoler", "react"],
    PrincipalImageDesktop: "https://i.ibb.co/6Hj7FS3/WL-TD.png",
    PrincipalImageMobile: "https://i.ibb.co/GvtMC7r/WL-TM.png",
    BackgroundImageDesktop: "https://i.ibb.co/yqG0jMS/WL-BGD.png",
    BackgroundImageMobile: "https://i.ibb.co/hMRHSQw/WL-BGM.png",
    Developing: true,
    GaleryImages: [
      new ImageWithText({
        Title: "Wrapping Letters",
        Description:
          "Well, this project has a page but this is not the important thing here, the main content is the package that I made.",
        Image: "https://i.ibb.co/YD0k8Qc/wl-1.png",
      }),
      new ImageWithText({
        // Title: "Wrapping Letters",
        Description:
          "As you can imagine, the package is just code, if you are interested visit the github. I'll use examples of what you can do with the package :3",
        // Image:
        // "https://i.ibb.co/YD0k8Qc/wl-1.png",
      }),
      new ImageWithText({
        Title: "The objective of WL (Wrapping Letters)",
        Description:
          "It's simple, simplify the code when you wrap the letters or words for an animation or anything else, to be evit this problem.",
        Image: "https://i.ibb.co/p2mqgJ0/WL-2.png",
      }),
      new ImageWithText({
        Title: "The package",
        Description:
          "The sintaxis of the package is simple, just call the component and pass the text you want to wrap, and the package will do the rest. the package has more options, add a general or special class, strucutre of the wrapper, and more.",
        Image: "https://i.ibb.co/CmcxfJ3/WL-3.png",
      }),
      new ImageWithText({
        Title: "Why use the package?",
        Description:
          "As you can imagine, the use of the package is very interesting, you can use the package for animation, ... and more Xd here are a example.",
        Image: "https://i.ibb.co/cXxk5T5/WL-4.gif",
      }),
      new ImageWithText({
        Description:
          "This is my main personal project, I work on it every day, not always in the code, but every day I have ideas about it in my head.",
      }),
    ],
    Links: [
      ["NPM", "https://www.npmjs.com/package/wrapping-letters-react"],
      ["WL", "https://wrapping-letters.vercel.app/"],
      ["WL's Github", "https://github.com/srtager555/wrapping-letters"],
    ],
    Date: "12 10 2021",
  }),
  new ProjectElement({
    Title: "Port-folio",
    Description:
      "This project started my 2022. I hope you like my portfolio :D",
    Id: "port-folio",
    Job: ["Front devepoler", "react"],
    PrincipalImageDesktop: "https://i.ibb.co/KjX78L4/Port-folio-TD.png",
    PrincipalImageMobile: "https://i.ibb.co/M9t65X1/Port-folio-TM.jpg",
    BackgroundImageDesktop: "https://i.ibb.co/TDGXGfB/Port-folio-BGD.png",
    BackgroundImageMobile: "https://i.ibb.co/qY8Qdpk/Port-folio-BGM.jpg",
    GaleryImages: [
      new ImageWithText({
        Title: "How started this?",
        Description:
          "I started this project in 2020, but my little web design experience was not enough to carry out this project. This problem forced me to design by trial and error until I reached this result.",
        Image: "https://i.ibb.co/7bkT04d/Portfolio-image-1.jpg",
      }),
      new ImageWithText({
        Title: "Why this design?",
        Description:
          "I am not referring to the visual aspect of the portfolio, I want to talk to you about what happens inside the page.\n\nThe problem was that the layouts weren't remarkable in the logic of the code, they didn't demonstrate mastery in JS.\n\nWhen I understood that I was able to focus on the real objective of my portfolio and achieve the goal, something simple, but with a decent algorithm in the background.",
        Image: "https://i.ibb.co/gSBb9qx/why-This-Design-Gif.gif",
      }),
      // "https://i.ibb.co/98WbcPM/why-This-Design-Gif2.gif",
      "https://i.ibb.co/pwxsjnM/whythis-Design-Gif2-plus.gif",
      "https://i.ibb.co/vmSvzbc/why-This-Design3.jpg",
      new ImageWithText({
        Title: "Why this style?",
        Description: `To get to this design I had to make many sketches and get inspired by the designs of others, until I found a pair that made the difference between the others and I liked them a lot.\n\nI mean 2 portfolios, one personal and the other is from an agency, I took reference from them because I had what I needed, I just needed to apply my style.`,
        Image: "https://i.ibb.co/9cfc5d4/why-This-Style1.jpg",
      }),
      new ImageWithText({
        Title: "reynato.tokyo",
        Description:
          "This is the principal concept of the project, clean and direct.",
        Image: "https://i.ibb.co/rp9zJhG/why-This-Style6.jpg",
      }),
      new ImageWithText({
        // Title: "Why this style?",
        Description:
          "I based the presentation of the projects and the contact section on the main example, the idea seemed very good to me.",
        Image: "https://i.ibb.co/DD1qpQ4/why-This-Style4.jpg",
      }),
      "https://i.ibb.co/qY0xcPM/why-This-Style5.jpg",
      new ImageWithText({
        Title: "henriheymans",
        Description:
          "I like the way the projects are presented, I based my projects design in that.",
        Image: "https://i.ibb.co/jZDbR1r/why-This-Style8.jpg",
      }),
      "https://i.ibb.co/Z2KxD19/why-This-Style7.jpg",
      new ImageWithText({
        Title: "What is the future of my Port-folio?",
        Description: `This question is very personal, but the truth is that I am aiming for the stars because I hope by 2023 to be able to implement a beautiful design with 3D objects, this will be a great challenge for me, but with the results I have had, I know it will be a piece of cake.`,
        Image: "https://i.ibb.co/0GGc8fw/the-Future1.jpg",
      }),
    ],
    Date: "03 04 2022",
    Links: [
      ["Portfolio", "https://ttager.page/"],
      ["Port-folio's Github", "https://github.com/srtager555/Port-folio"],
    ],
  }),
  new ProjectElement({
    Title: "Carlos && Ponce",
    Description:
      "This is my personal mark, I love my job, is beautiful, but always I love more to Ahri, her is me reason to exits Xd",
    Id: "carlos-ponce",
    Job: ["Front devepoler", "react"],
    PrincipalImageDesktop: "https://i.ibb.co/HnqQk3C/Orbeeana-Face.jpg",
    PrincipalImageMobile: "https://i.ibb.co/b56T388/Orianna-full-body.jpg",
    BackgroundImageDesktop: "https://i.ibb.co/jg9tcpC/FLpwv-D7-Vg-AQxes7.jpg",
    BackgroundImageMobile: "https://i.ibb.co/b56T388/Orianna-full-body.jpg",
    GaleryImages: [
      "https://i.ibb.co/GQsrPwx/imagen-22222.jpg",
      new ImageWithText({
        Image:
          "https://i.ibb.co/NyHtQvP/1f27e04cf95f16d51ad26911036b848a95e939a7.jpg",
        Title: "Simplify the code",
        Description:
          "With wrapping-letters is very easy to use and reduce the code considerably in 95%",
      }),
      "https://i.ibb.co/jg9tcpC/FLpwv-D7-Vg-AQxes7.jpg",
      new ImageWithText({
        Image: "https://i.ibb.co/9nP0vGK/coven.jpg",
        Title: "This is another test",
        Description:
          "I love my job, is beautiful, but always I love more to Ahri, her is me reason to exits Xd",
      }),
      new ImageWithText({
        Image: "https://i.ibb.co/9nP0vGK/coven.jpg",
        Title: "This is another test",
        Description:
          "I love my job, is beautiful, but always I love more to Ahri, her is me reason to exits Xd",
      }),
      new ImageWithText({
        Image: "https://i.ibb.co/xSQbqVd/hu-Tao-background-mobil.jpg",
        Title: "This is another test",
        Description:
          "I love my job, is beautiful, but always I love more to Ahri, her is me reason to exits Xd",
      }),
      "https://i.ibb.co/348wz9h/jijija.png",
      new ImageWithText({
        Image:
          "https://i.ibb.co/D7zxN2W/sample-0551ec7be9c60314a85918c1385b4172.jpg",
        Title: "I want money",
        Description: "I want money for my projects",
      }),
      "https://i.ibb.co/Pz0fZY2/wenas.jpg",
      new ImageWithText({
        Image: "https://i.ibb.co/HnqQk3C/Orbeeana-Face.jpg",
        Title: "This is a test",
        Description:
          "Una vaca se valanceaba en la tela de una araña, y como miraba que la tela aguataba llamo a otra vaca y eran, dos vacas que se valanceaban en la tela de una araña y como miraban que aguantaban llamaron a otra vaca.",
      }),
    ],
    Link: "https://www.google.com",
    Date: "01 01 2020",
    Available: false,
  }),
];
