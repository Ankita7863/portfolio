export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  status: string;
  scoreLabel: string;
  scoreValue: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: 'Python' | 'Java & Web' | 'Spring Boot';
  shortDescription: string;
  detailedOverview: string;
  technologies: string[];
  features: string[];
  themeVariant?: 'standard' | 'dark-neon';
  imageUrl?: string;
  placeholderLabel: string;
}

export interface InterestItem {
  id: string;
  title: string;
  summary: string;
  focusAreas: string;
}

export interface LearningTopic {
  id: string;
  index: string;
  topic: string;
  focusDescription: string;
  domain: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_tech_illustration_1790671388889.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_student_workspace_1790671403032.jpg';

export const ABOUT_HIGHLIGHTS: { label: string; detail: string }[] = [
  { label: 'Academic Program', detail: 'Computer Science & Engineering Student' },
  { label: 'Academic Standing', detail: 'CGPA 8.16' },
  { label: 'Core Focus', detail: 'Interested in Web Development & Software Engineering' },
  { label: 'Learning Mindset', detail: 'Passionate about learning new technology' },
  { label: 'Emerging Tech', detail: 'Interested in Artificial Intelligence & Machine Learning' },
  { label: 'Technical Foundation', detail: 'Experience with Java, Python, SQL & Web Technologies' },
  { label: 'Practical Approach', detail: 'Project-oriented learner' },
  { label: 'Career Vision', detail: 'Aspiring software professional' },
];

export const CAREER_OBJECTIVE =
  'I am looking for opportunities where I can apply my programming and problem-solving skills, gain practical industry experience, and contribute to meaningful software projects while continuously learning and growing as a technology professional.';

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'be-cse',
    degree: 'Bachelor of Engineering – Computer Science and Engineering',
    institution: 'Engineering Degree Program, Karnataka, India',
    status: 'Currently Pursuing',
    scoreLabel: 'CGPA',
    scoreValue: '8.16',
    highlights: [
      'Focused on Data Structures, Object-Oriented Programming, Database Management Systems, and Web Technologies.',
      'Actively building full-stack Java, JSP/Servlet, Spring Boot, and Python academic projects.',
    ],
  },
  {
    id: 'puc',
    degree: 'Pre-University Course (PUC – Science)',
    institution: 'Diamond PUC Science College, Bhalki',
    status: 'Completed',
    scoreLabel: 'Percentage',
    scoreValue: '84%',
    highlights: [
      'Strong foundation in Mathematics, Physics, Chemistry, and analytical problem-solving.',
    ],
  },
  {
    id: 'sslc',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Kittur Rani Chennamma Residential School, Ghatboral',
    status: 'Completed',
    scoreLabel: 'Percentage',
    scoreValue: '89.60%',
    highlights: [
      'Graduated with distinction and consistent academic discipline.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    category: 'Languages',
    description: 'Core programming and query languages used for problem-solving and application logic.',
    skills: [
      { name: 'Java', context: 'Object-oriented programming, backend logic, enterprise web apps' },
      { name: 'Python', context: 'Scripting, application development, AI/ML fundamentals' },
      { name: 'C', context: 'Structured programming, memory fundamentals, algorithmic logic' },
      { name: 'JavaScript', context: 'Interactive frontend behavior and DOM manipulation' },
      { name: 'SQL', context: 'Relational queries, joins, schema design, data manipulation' },
    ],
  },
  {
    id: 'web-technologies',
    category: 'Web Technologies',
    description: 'Server-side and client-side technologies for building structured web applications.',
    skills: [
      { name: 'HTML', context: 'Semantic document structure and accessible web forms' },
      { name: 'CSS', context: 'Responsive layouts, styling, and modern interface design' },
      { name: 'JSP', context: 'Dynamic server-rendered Java web pages' },
      { name: 'Servlets', context: 'HTTP request handling, session management, controller logic' },
      { name: 'Web Development', context: 'End-to-end client-server application architecture' },
    ],
  },
  {
    id: 'frameworks',
    category: 'Frameworks',
    description: 'Modern enterprise frameworks for scalable REST APIs and data persistence.',
    skills: [
      { name: 'Spring Boot', context: 'RESTful API development, Spring Data JPA, layered architecture' },
    ],
  },
  {
    id: 'databases',
    category: 'Databases',
    description: 'Relational database management and Java database connectivity.',
    skills: [
      { name: 'MySQL', context: 'Relational schema design, indexing, and persistent storage' },
      { name: 'JDBC', context: 'Java Database Connectivity for SQL execution and transactions' },
      { name: 'Database Management', context: 'Normalization, CRUD operations, data integrity' },
    ],
  },
  {
    id: 'tools-concepts',
    category: 'Tools & Core Concepts',
    description: 'Version control tools and foundational computer science principles.',
    skills: [
      { name: 'Git & GitHub', context: 'Version control, repository management, code tracking' },
      { name: 'Object-Oriented Programming', context: 'Encapsulation, inheritance, polymorphism, abstraction' },
      { name: 'Data Structures', context: 'Arrays, linked lists, stacks, queues, trees, algorithmic thinking' },
      { name: 'Basics of Artificial Intelligence and Machine Learning', context: 'Foundational concepts in intelligent systems and data-driven models' },
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'art-exhibition',
    index: '01',
    title: 'Art Exhibition',
    category: 'Python',
    shortDescription: 'A Python-based project related to an art exhibition.',
    detailedOverview:
      'An academic Python application designed around organizing and managing an art exhibition workflow. Focuses on clean modular programming, structured data handling, and practical application logic.',
    technologies: ['Python'],
    features: [
      'Exhibition artwork and artist record organization',
      'Structured Python program logic and modular workflows',
      'Clean user interaction for browsing exhibition details',
    ],
    themeVariant: 'standard',
    imageUrl: '/src/assets/images/project_art_exhibition_1790671415591.jpg',
    placeholderLabel: '[GitHub / Project Placeholder]',
  },
  {
    id: 'employee-salary-management',
    index: '02',
    title: 'Employee Salary Management System',
    category: 'Java & Web',
    shortDescription: 'A web-based application for managing employee salary information.',
    detailedOverview:
      'A full-featured Java web application built with JSP, Servlets, JDBC, and MySQL to streamline employee records and payroll processing with structured reporting.',
    technologies: ['Java', 'JSP', 'Servlet', 'JDBC', 'MySQL', 'HTML/CSS'],
    features: [
      'Add employee',
      'Update employee',
      'Delete employee',
      'Display employee details',
      'Salary management',
      'Reports',
    ],
    themeVariant: 'standard',
    placeholderLabel: '[GitHub / Project Placeholder]',
  },
  {
    id: 'hospital-web-application',
    index: '03',
    title: 'Hospital Web Application',
    category: 'Java & Web',
    shortDescription: 'A web application for managing patient information.',
    detailedOverview:
      'A relational healthcare web application designed to digitize patient intake, hospital admission records, and doctor assignments using Java Servlets, JSP, and MySQL.',
    technologies: ['Java', 'JSP/Servlet', 'JDBC', 'MySQL', 'HTML/CSS'],
    features: [
      'Patient registration',
      'Patient information management',
      'Admission details',
      'Assigned doctor information',
    ],
    themeVariant: 'standard',
    placeholderLabel: '[GitHub / Project Placeholder]',
  },
  {
    id: 'smart-queue-management',
    index: '04',
    title: 'Smart Queue Management System',
    category: 'Java & Web',
    shortDescription: 'A web-based system designed to manage queues efficiently.',
    detailedOverview:
      'A responsive web-based queue orchestration system engineered with Java Servlets, MySQL, and Bootstrap to organize service tokens, reduce waiting bottlenecks, and provide clear live status visibility.',
    technologies: ['Java', 'Servlet', 'MySQL', 'Bootstrap', 'CSS'],
    features: [
      'Digital queue token generation and tracking',
      'Efficient service counter queue management',
      'Real-time queue status organization backed by MySQL',
      'Responsive dark/neon operator and visitor interface',
    ],
    themeVariant: 'dark-neon',
    imageUrl: '/src/assets/images/project_smart_queue_1790671427605.jpg',
    placeholderLabel: '[GitHub / Project Placeholder]',
  },
  {
    id: 'student-jpa-project',
    index: '05',
    title: 'Student Management / Student JPA Project',
    category: 'Spring Boot',
    shortDescription: 'A Spring Boot based project for managing student information using JPA and REST APIs.',
    detailedOverview:
      'A modern backend and data persistence project built with Spring Boot and Spring Data JPA, exposing clean RESTful endpoints connected to a MySQL database for complete student lifecycle management.',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST API'],
    features: [
      'RESTful API endpoints for student CRUD operations',
      'Object-relational mapping using Spring Data JPA and Hibernate',
      'Persistent MySQL database integration',
      'Clean layered architecture (Controller, Service, Repository)',
    ],
    themeVariant: 'standard',
    placeholderLabel: '[GitHub / Project Placeholder]',
  },
];

export const INTERESTS_DATA: InterestItem[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    summary: 'Building responsive, accessible, and interactive web applications from frontend interfaces to server-side logic.',
    focusAreas: 'HTML · CSS · JavaScript · JSP/Servlets',
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    summary: 'Designing reliable, maintainable software systems using clean architecture and object-oriented principles.',
    focusAreas: 'Java · Python · C · Modular Design',
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    summary: 'Exploring foundational intelligent algorithms, automated reasoning, and practical AI applications.',
    focusAreas: 'AI Fundamentals · Python · Problem Formulation',
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    summary: 'Understanding how data-driven models learn patterns and make predictions from structured datasets.',
    focusAreas: 'ML Basics · Data Analysis · Python',
  },
  {
    id: 'dbms',
    title: 'Database Management',
    summary: 'Structuring relational schemas, writing optimized SQL queries, and maintaining data integrity.',
    focusAreas: 'MySQL · SQL · JDBC · Normalization',
  },
  {
    id: 'java-dev',
    title: 'Java Development',
    summary: 'Developing robust enterprise and web applications using Core Java, J2EE (JSP/Servlets), and Spring Boot.',
    focusAreas: 'Core Java · OOP · JDBC · J2EE',
  },
  {
    id: 'backend-dev',
    title: 'Backend Development',
    summary: 'Creating RESTful APIs, business logic layers, and seamless database persistence with modern frameworks.',
    focusAreas: 'Spring Boot · Spring Data JPA · REST APIs',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    summary: 'Breaking down complex engineering challenges using data structures, logical reasoning, and iterative coding.',
    focusAreas: 'Data Structures · Algorithms · Debugging',
  },
];

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    id: 'learn-1',
    index: '01',
    topic: 'Database Structures and Management with MySQL',
    focusDescription: 'Relational database design, table relationships, constraints, and practical MySQL administration.',
    domain: 'Databases',
  },
  {
    id: 'learn-2',
    index: '02',
    topic: 'SQL and Database Concepts',
    focusDescription: 'Writing structured queries, joins, aggregations, normalization, and transactional integrity.',
    domain: 'Query Languages',
  },
  {
    id: 'learn-3',
    index: '03',
    topic: 'Java and Web Development',
    focusDescription: 'Building dynamic web applications using Core Java, JSP, Servlets, JDBC, HTML, and CSS.',
    domain: 'Full-Stack Web',
  },
  {
    id: 'learn-4',
    index: '04',
    topic: 'Spring Boot',
    focusDescription: 'Developing modern REST APIs and database-backed services using Spring Boot and Spring Data JPA.',
    domain: 'Enterprise Frameworks',
  },
  {
    id: 'learn-5',
    index: '05',
    topic: 'Python',
    focusDescription: 'Scripting, application development, and building academic projects like the Art Exhibition system.',
    domain: 'Programming',
  },
  {
    id: 'learn-6',
    index: '06',
    topic: 'Artificial Intelligence and Machine Learning Fundamentals',
    focusDescription: 'Understanding core concepts in AI/ML, data workflows, and intelligent system basics.',
    domain: 'Emerging Tech',
  },
  {
    id: 'learn-7',
    index: '07',
    topic: 'Professional English and Communication Skills',
    focusDescription: 'Strengthening technical presentation, collaborative communication, and workplace readiness.',
    domain: 'Professional Skills',
  },
];
