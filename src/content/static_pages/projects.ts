// src/data/projects.ts

export interface Project {
  class: string;
  tag: string[];
  year: number;
  iconPath: string; // Nota: nel JSON era imgPath, qui lo mappiamo a iconPath
  title: string;
  description: string;
  githubLink?: string; // ? = opzionale
  blogLink?: string;   // ? = opzionale
  extLink?: string;    // ? = opzionale
}

export const projectsData: Project[] = [
  {
    class: "SW",
    tag: ["Blog", "Portfolio", "JavaScript"],
    year: 2025,
    iconPath:"projects/blogger",
    title: "My Old Webspace",
    description: "My personal website built with NextJS, JavaScript and MDX, showcasing my work, interests, and portfolio.",
    githubLink: "https://github.com/GppCalcagno/engineered_log",
    extLink: "https://engineeredlog.vercel.app"
  },
  {
    class: "SW",
    tag: ["Web App", "Foosball", "Ranking"],
    year: 2025,
    iconPath:"projects/soccer_match",
    title: "Table Tomic – Foosball Tracker",
    description: "A web app inspired by Playtomic to track foosball game records, monitor matches, and manage an adapted ranking system. Used for our working station at work :)",
    githubLink: "https://github.com/GppCalcagno/Table_Tomic"
  },
  {
    class: "SW",
    tag: ["LLM", "Web App", "Full Stack"],
    year: 2024,
    iconPath:"projects/library",
    title: "AI-Enhanced Web Bookstore",
    description: "A web-based bookstore with standard CRUD operations and an AI-powered feature. Frontend and backend communicate through REST APIs.",
    githubLink: "https://github.com/GppCalcagno/AI-Enhanced-Web-Bookstore"
  },
  {
    class: "ML",
    tag: ["RL", "Robotics", "DeepLearning"],
    year: 2024,
    iconPath:"projects/robotic_arm",
    title: "Intelligent Object Grasping in Industrial Robotics",
    description: "A Deep RL framework for industrial robots to grasp objects efficiently in diverse scenarios, maintaining low computational overhead.",
    extLink: "https://www.politesi.polimi.it/handle/10589/215163"
  },
  {
    class: "University",
    tag: ["TensorFlow", "Neural Networks", "Transfer Learning"],
    year: 2023,
    iconPath:"projects/plant",
    title: "Plant Image Classification Challenge",
    description: "Classified plant images (96x96) into 8 categories using TensorFlow. Compared models built from scratch with transfer learning approaches.",
    githubLink: "https://github.com/GppCalcagno/AN2DL-Project"
  },
  {
    class: "University",
    tag: ["Flutter", "Firebase", "Cross-platform"],
    year: 2023,
    iconPath:"projects/flutter_pack",
    title: "CommUNIty: Share Note App",
    description: "A Flutter app using Firebase to help students share notes and resources, enhancing collaboration and community building.",
    githubLink: "https://github.com/GppCalcagno/CommUNIty-Dima_PoliMi"
  },
  {
    class: "University",
    tag: ["Java", "SQL", "E-commerce"],
    year: 2022,
    iconPath:"projects/store_price_tag",
    title: "E-commerce with Java and SQL",
    description: "A Java-based app with relational DB featuring customer registration, service purchases, employee tools, and sales reporting.",
    githubLink: "https://github.com/GppCalcagno/Database2_JPA-project"
  },
  {
    class: "University",
    tag: ["IoT", "TinyOS", "Node-Red"],
    year: 2022,
    iconPath:"projects/wireless",
    title: "Smart Bracelets for Children",
    description: "Designed a smart bracelet system in TinyOS to track child-parent distance and trigger alerts when too far apart. Simulated with Tossim.",
    githubLink: "https://github.com/GppCalcagno/IOT-project"
  },
  {
    class: "University",
    tag: ["FPGA", "Image Processing", "VHDL"],
    year: 2021,
    iconPath:"projects/motherboard",
    title: "FPGA for Image Histogram Equalization",
    description: "Developed a VHDL module in VIVADO for contrast enhancement through histogram equalization of 256-level grayscale images.",
    githubLink: "https://github.com/GppCalcagno/Reti_Logiche-project"
  },
  {
    class: "University",
    tag: ["Security", "AES", "Performance"],
    year: 2021,
    iconPath:"projects/camera",
    title: "Cryptographic Performance Impact",
    description: "Tested different hardware architectures to evaluate how AES encryption affects execution performance on embedded systems.",
    githubLink: "https://github.com/GppCalcagno/Cryptographic_Performance-Project/tree/master"
  },
  {
    class: "University",
    tag: ["Java", "GameDevelopment", "System Design"],
    year: 2021,
    iconPath:"projects/game",
    title: "Java Board Game Porting",
    description: "Created a digital version of the board game *Masters of the Renaissance* as a Java web application with multiplayer logic.",
    githubLink: "https://github.com/GppCalcagno/Masters_of_Renaissance_BoardGame_porting_SoftEng_PoliMI"
  }
];
