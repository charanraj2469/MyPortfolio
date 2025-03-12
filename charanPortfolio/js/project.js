const projects = [
  {
    id: 1,
    title: "NxtWatch",
    live: "https://chandanxtwatch.ccbp.tech/login",
    github: "",
    img: "assets/projects/nxtwatchss.png",
    techs: ["HTML", "CSS", "JavaScript", "  React"],
    description: "Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark)"
  },
  {
    id: 2,
    title: "NxtTrendz",
    live: "https://charanxtrendz.ccbp.tech/login",
    github: "",
    img: "assets/projects/nxttrendz.jpeg",
    techs: ["HTML", "CSS", "JavaScript", "React"],
    description:"Created a modern e-commerce experience with a design inspired by Amazon and Flipkart."
  },
  {
    id: 3,
    title: "Jobby App",
    live: "https://chandajobby.ccbp.tech/login",
    github: "",
    img: "assets/projects/jobbyapp.jpeg",
    techs: ["HTML", "CSS", "JavaScript", "React"],
    description: "Developed a comprehensive job search solution, Jobby App.Designed pages for Login, Home, Jobs, and Job item details with React components and form inputs"
  },
  {
    id: 4,
    title: "Todo",
    live: "https://chandatodotasks.ccbp.tech/",
    github:"",
    img: "assets/projects/todoapp.jpeg",
    techs: ["HTML", "CSS", "JavaScript"],
    description:"Created a todo application where you can Add, Mark as Completed, Edit tasks, Delete tasks and Save tasks."
  }
];

const parentElement = document.querySelector(".carousel");

projects.forEach((project) => {
  const { title, live, github, img, techs, description } = project;

  // Create slide container
  const slideContainer = document.createElement("div");
  slideContainer.classList.add(
    "slide",
    "grid",
    "grid-template-columns-2",
    "gap-3"
  );

  // Create project image link
  const imageLink = document.createElement("a");
  imageLink.classList.add("project-img");
  imageLink.href = live;
  imageLink.target = "_blank";
  imageLink.rel = "noopener noreferrer";

  // Create project image
  const image = document.createElement("img");
  image.src = img;
  image.alt = `${title} Image`;

  // Append image to image link
  imageLink.appendChild(image);

  // Create project description container
  const projectDescription = document.createElement("div");
  projectDescription.classList.add("project-description");

  // Create project title
  const projectTitle = document.createElement("h4");
  projectTitle.textContent = title;

  // Create project description text
  const projectText = document.createElement("p");
  projectText.classList.add("section-text");
  projectText.textContent = description;

  // Create technology list
  const techList = document.createElement("ul");
  techList.classList.add("tech-use");

  // Create technology list items
  techs.forEach((tech) => {
    const techItem = document.createElement("li");
    techItem.textContent = tech;
    techList.appendChild(techItem);
  });

  // Create project links container
  const projectLinks = document.createElement("div");
  projectLinks.classList.add(
    "project-links",
    "flex",
    "align-items-center",
    "gap-2"
  );

  // Create source code link
  const sourceCodeLink = document.createElement("a");
  sourceCodeLink.classList.add("project-link");
  sourceCodeLink.title = "Source Code";
  sourceCodeLink.href = github;
  sourceCodeLink.target = "_blank";
  sourceCodeLink.rel = "noopener noreferrer";

  // Create source code icon
  const sourceCodeIcon = document.createElement("i");
  sourceCodeIcon.classList.add("fa-brands", "fa-github", "fa-lg");

  // Append source code icon to source code link
  sourceCodeLink.appendChild(sourceCodeIcon);

  // Create live demo link
  const liveDemoLink = document.createElement("a");
  liveDemoLink.classList.add("project-link");
  liveDemoLink.title = "Live Demo";
  liveDemoLink.href = live;
  liveDemoLink.target = "_blank";
  liveDemoLink.rel = "noopener noreferrer";

  // Create live demo icon
  const liveDemoIcon = document.createElement("i");
  liveDemoIcon.classList.add("fa-solid", "fa-arrow-up-right-from-square");

  // Append live demo icon to live demo link
  liveDemoLink.appendChild(liveDemoIcon);

  // Append all elements to project links container
  projectLinks.appendChild(sourceCodeLink);
  projectLinks.appendChild(liveDemoLink);

  // Append all elements to project description container
  projectDescription.appendChild(projectTitle);
  projectDescription.appendChild(projectText);
  projectDescription.appendChild(techList);
  projectDescription.appendChild(projectLinks);

  // Append image link and project description container to slide container
  slideContainer.appendChild(imageLink);
  slideContainer.appendChild(projectDescription);

  // Append slide container to desired parent element
  parentElement.appendChild(slideContainer);
});
