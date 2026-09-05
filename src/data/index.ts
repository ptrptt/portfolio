import { NavLink, SkillCategory, Project, Education, ContactItem } from "@/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Testing Skills",
    icon: "TestTube",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "UI/UX Testing",
      "Test Planning",
      "Test Case Design",
      "Test Scenario",
      "Requirement Analysis",
      "Regression Testing",
    ],
  },
  {
    title: "Automation Tools (Basic)",
    icon: "Bot",
    skills: ["Playwright", "k6", "Robot Framework"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Postman", "GitHub", "Jira", "Figma", "Trello", "Codex"],
  },
  {
    title: "Languages & Database",
    icon: "Code2",
    skills: ["SQL", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Concepts & Methodologies",
    icon: "BookOpen",
    skills: [
      "SDLC",
      "Agile",
      "Scrum",
      "Bug Tracking",
      "API Testing",
      "Automated Testing",
      "Performance Testing",
    ],
  },
  {
    title: "Soft Skills",
    icon: "Users",
    skills: [
      "Detail-Oriented",
      "Responsible",
      "Eager to Learn",
      "Teamwork",
      "Communication",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "nutri-journey",
    category: "Senior Project / Capstone Project",
    title: "Nutri-Journey — ระบบติดตามสุขภาพและการทำ Intermittent Fasting",
    subtitle: "Senior Project / Capstone Project",
    status: "กำลังพัฒนา (In Development)",
    role: "Team Leader / Scrum Master / Software Tester",
    lineOfficialAccount: "@988yvqaz",
    description:
      "เว็บไซต์สำหรับติดตามสุขภาพและการทำ Intermittent Fasting (IF) ช่วยให้ผู้ใช้งานวางแผนและติดตามการทำ IF ดูความคืบหน้าด้านสุขภาพ และรับการแจ้งเตือนผ่าน LINE Official Account",
    highlights: [
      "ทำหน้าที่หัวหน้าทีมและ Scrum Master วางแผนและติดตามการทำงานของทีม",
      "วิเคราะห์ Requirement, Project Scope และจัดทำเอกสารของโครงการ",
      "จัดทำและบริหาร Product Backlog และวางแผนงานในแต่ละ Sprint",
      "ออกแบบ Test Scenario และ Test Case พร้อมดำเนินการ Manual Testing",
      "ทำ Automated Testing ด้วย Playwright",
      "ทำ Performance Testing ด้วย k6",
    ],
    technologies: ["Playwright", "k6", "Figma", "GitHub", "Agile/Scrum"],
    githubUrl: "https://github.com/BunyawatCharnwechsart/Nutri-Journey.git",
    gradient: "from-[#40E0D0] to-[#087F78]",
  },
  {
    id: "software-testing-mini",
    category: "Software Testing",
    title: "Software Testing Mini Project",
    subtitle: "Mini Project รายวิชา Software Testing",
    description:
      "โปรเจกต์ฝึกปฏิบัติด้าน Software Testing โดยนำ Requirement และ UX/UI จากโปรเจกต์ของนิสิตรหัส 68 มาใช้เป็นกรณีศึกษา เพื่อวิเคราะห์และออกแบบการทดสอบระบบก่อนนำไปทดสอบจริง",
    highlights: [
      "ศึกษาและวิเคราะห์ Requirement ของระบบเพื่อทำความเข้าใจฟังก์ชันที่ต้องทดสอบ",
      "ตรวจสอบ Requirement และให้ Comment / ข้อเสนอแนะ ในประเด็นที่ไม่ชัดเจนหรือข้อมูลไม่ครบถ้วน",
      "วิเคราะห์ UX/UI และ User Flow เพื่อกำหนดแนวทางการทดสอบ",
      "ออกแบบและเขียน Test Case จาก Requirement และ UX/UI",
      "กำหนด Test Steps, Test Data และ Expected Result",
      "ดำเนินการ Manual Testing และเปรียบเทียบผลการทำงานจริงกับ Expected Result",
      "บันทึกผลการทดสอบและปัญหาที่พบจากการทดสอบ",
    ],
    technologies: [
      "Manual Testing",
      "Test Case Design",
      "Test Data",
      "Functional Testing",
    ],
    githubUrl: "https://github.com",
    testCaseUrl:
      "https://docs.google.com/spreadsheets/d/1i7FceKrSK3k6qXVGE4AUoRTWCJsk2E7dSZvi2tQER5g/edit?usp=sharing",
    gradient: "from-[#40E0D0] to-[#087F78]",
  },
  {
    id: "e2e-practice-software-testing",
    category: "E2E Testing",
    title: "E2E Testing — Practice Software Testing",
    subtitle: "งาน Quiz รายวิชา Advance Software Testing · Playwright",
    description:
      "เขียนสคริปต์ทดสอบอัตโนมัติด้วย Playwright สำหรับ practicesoftwaretesting.com ครอบคลุม 3 Test Case ตั้งแต่การค้นหาสินค้า การจัดการตะกร้า ไปจนถึงการตรวจสอบ validation ตอนลงทะเบียน พร้อมแคปหน้าจอทุกขั้นตอนเป็นหลักฐาน โดยเริ่มจาก Playwright Codegen แล้วปรับโครงสร้างและเพิ่ม assertion ด้วยตนเอง",
    highlights: [
      "ใช้ Playwright Codegen บันทึกการกระทำเบื้องต้นบนเว็บ แล้วนำสคริปต์มาปรับแก้ เพิ่ม assertion และจัดโครงสร้างทดสอบเอง",
      "TC-01: ค้นหาสินค้าด้วยคำว่า Hammer แล้วตรวจสอบว่าผลลัพธ์ทั้ง 6 รายการมีคำค้นหาอยู่จริง",
      "TC-02: เพิ่มสินค้าลงตะกร้า ตรวจสอบจำนวนและยอดรวมในตะกร้าก่อนไปหน้า Checkout",
      "TC-03: กรอกฟอร์มลงทะเบียนด้วยรหัสผ่านที่ไม่ตรงเงื่อนไข ตรวจสอบสถานะ Weak และข้อความ error ใต้ช่อง password",
    ],
    technologies: ["Playwright", "Playwright Codegen", "TypeScript", "E2E"],
    githubUrl: "https://github.com/ptrptt/Quiz.git",
    testCaseUrl: "https://github.com/ptrptt/Quiz.git",
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    id: "easy-class-pay",
    category: "Web Application",
    title: "EasyClassPay",
    subtitle: "Project รายวิชา Software Process × Fundamental of Database Systems",
    description:
      "เว็บแอปพลิเคชันสำหรับจัดการค่าใช้จ่ายร่วมกันภายในกลุ่ม ผู้ใช้งานสามารถบันทึกรายการค่าใช้จ่าย แบ่งค่าใช้จ่ายระหว่างสมาชิก และติดตามสถานะการชำระเงินของแต่ละคน ช่วยให้การจัดการและแบ่งค่าใช้จ่ายร่วมกันสะดวกและเป็นระบบมากขึ้น",
    highlights: [
      "จัดทำเอกสาร System Requirement และกำหนดขอบเขตของโครงการ (Project Scope)",
      "ทำหน้าที่เป็น Scrum Master ประสานงานกระบวนการ Agile/Scrum และการประชุม Sprint",
      "จัดทำและบริหาร Product Backlog พร้อมจัดลำดับความสำคัญของงาน",
      "ออกแบบ Test Scenario และ Test Case จาก Requirement ของระบบ",
      "ดำเนินการ Manual Testing เพื่อตรวจสอบการทำงานของฟีเจอร์และค้นหา Defect",
      "วางแผนและติดตามความคืบหน้าของโครงการ เพื่อให้งานเป็นไปตามแผนและระยะเวลาที่กำหนด",
    ],
    technologies: [
      "Scrum",
      "Product Backlog",
      "Test Scenario",
      "Test Case",
      "Manual Testing",
      "Database",
    ],
    githubUrl: "https://github.com/BunyawatCharnwechsart/EasyClassPay.git",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    id: "easy-cook",
    category: "Website",
    title: "Easy Cook",
    subtitle: "Project วิชา Back-End Software Development X Software Development Operation",
    description:
      "เว็บไซต์สำหรับจัดการสูตรอาหาร ออกแบบมาเพื่อช่วยให้ผู้ใช้งานสามารถค้นหา บันทึก และจัดระเบียบสูตรอาหารที่ชื่นชอบได้อย่างสะดวก พร้อมรองรับการค้นหาจากวัตถุดิบ ขั้นตอนการทำอาหารแบบเป็นลำดับ และการวางแผนมื้ออาหารให้เหมาะกับผู้ใช้งาน",
    highlights: [
      "ร่วมคิด Concept, Requirement และฟีเจอร์หลักของระบบ Easy Cook",
      "ออกแบบ UX/UI และ Prototype ด้วย Figma",
      "ออกแบบ Test Scenario และ Test Case สำหรับฟีเจอร์หลัก",
      "ทดสอบระบบแบบ Manual Testing เพื่อตรวจสอบการทำงานและค้นหา Defect",
      "เขียนและรัน Automated Test ด้วย Playwright เพื่อทดสอบการทำงานของเว็บไซต์",
    ],
    technologies: [
      "Figma",
      "Manual Testing",
      "Playwright",
      "Test Case",
      "Test Scenario",
    ],
    githubUrl: "https://github.com/BunyawatCharnwechsart/Easycook.git",
    gradient: "from-orange-400 to-rose-500",
  },
];

export const education: Education[] = [
  
  {
    id: "up",
    institution: "University of Phayao",
    degree: "Bachelor of Science (Information Technology)",
    field: "Bachelor of Engineering (Software Engineering)",
    gpa: "2.50",
    period: "2024 – Present",
    current: true,
    logo: "/Logo_of_University_of_Phayao.svg",
    
  },
  {
    id: "obac",
    institution: "วิทยาลัยอาชีวศึกษาเอกวิทย์บริหารธุรกิจ (OBAC)",
    degree: "สาขาคอมพิวเตอร์ธุรกิจ",
    gpa: "3.66",
    period: "2021 – 2024",
    current: false,
    logo: "/obaclogo.png",
    internship: {
      organization: "ฝึกงาน สำนักงานเขตลาดกระบัง กรุงเทพมหานคร",
      department: "ฝ่ายการคลัง งานบัญชีและธุรการ",
      description:
        "ปฏิบัติงานด้านบัญชีและเอกสารทางการเงินภายในฝ่ายการคลัง โดยมีหน้าที่บันทึกข้อมูลทางบัญชี จัดเตรียมและตรวจสอบเอกสารทางการเงิน และสนับสนุนงานธุรการภายในฝ่ายการคลัง",
    },
  },
];

export const contactItems: ContactItem[] = [
  {
    id: "email",
    label: "Email",
    value: "phattharaphon@example.com",
    href: "mailto:phattharaphon@example.com",
    icon: "Mail",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/ptrptt",
    href: "https://github.com/ptrptt",
    icon: "Github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/phattharaphon",
    href: "https://www.linkedin.com/in/phattharaphon-tangtaeng-a1a624427/",
    icon: "Linkedin",
  },
  {
    id: "phone",
    label: "Phone",
    value: "096-350-5763",
    href: "tel:096-350-5763",
    icon: "Phone",
  },
];
