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
      "UI/UX Testing",
      "Test Planning",
      "Test Case Design",
      "Test Scenario",
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Postman", "Playwright", "GitHub", "Jira", "Trello", "Figma"],
  },
  {
    title: "Languages",
    icon: "Code2",
    skills: ["SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Concepts",
    icon: "BookOpen",
    skills: ["SDLC", "Bug Tracking", "Scrum"],
  },
  {
    title: "Soft Skills",
    icon: "Users",
    skills: [
      "Highly responsible and committed to work",
      "Eager to improve myself and always willing to learn",
      "Detail-oriented and dedicated to achieving goalsr",
      "Possess clear communication skills and able to work effectively in a team",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "e2e-practice-software-testing",
    category: "E2E Testing",
    title: "E2E Testing — Practice Software Testing",
    subtitle: "งาน Quiz วิชาการทดสอบซอฟต์แวร์ · Playwright",
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
    id: "easy-cook",
    category: "Web Application",
    title: "Easy Cook",
    subtitle: "Web Application",
    description:
      "A recipe management web application designed to help users discover, save, and organize their favorite recipes. Features include ingredient search, step-by-step cooking guides, and personalized meal planning.",
    highlights: [
      "ค้นหาสูตรอาหารจากชื่อเมนูและวัตถุดิบที่มีอยู่",
      "บันทึกและจัดหมวดหมู่สูตรอาหารโปรดเพื่อกลับมาใช้งานภายหลัง",
      "แสดงขั้นตอนการทำอาหารและข้อมูลวัตถุดิบอย่างเป็นลำดับ",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    githubUrl: "https://github.com",
    testCaseUrl: "https://example.com", // Project 1: Replace with your Test Case link
    gradient: "from-orange-400 to-rose-500",
  },
  {
    id: "software-testing-mini",
    category: "Software Testing",
    title: "Software Testing Mini Project",
    subtitle: "QA Project",
    description:
      "A comprehensive software testing project covering test plan creation, test case design, defect reporting, and regression testing for a student management system. Documented full QA lifecycle.",
    highlights: [
      "วิเคราะห์ requirement และจัดทำ Test Plan สำหรับระบบจัดการนักศึกษา",
      "ออกแบบ Test Scenario และ Test Case ครอบคลุมการทำงานหลักของระบบ",
      "บันทึก Defect Report ติดตามสถานะข้อผิดพลาด และทำ Regression Testing",
    ],
    technologies: ["Jira", "Postman", "Excel", "Test Planning"],
    githubUrl: "https://github.com",
    testCaseUrl:
      "https://docs.google.com/spreadsheets/d/1i7FceKrSK3k6qXVGE4AUoRTWCJsk2E7dSZvi2tQER5g/edit?usp=sharing",
    gradient: "from-[#40E0D0] to-[#087F78]",
  },
  {
    id: "easy-class-pay",
    category: "Web Application",
    title: "EasyClassPay",
    subtitle: "Payment Management System",
    description:
      "An educational payment management platform that simplifies tuition fee collection for educational institutions. Includes student registration, fee tracking, receipt generation, and payment history.",
    highlights: [
      "ลงทะเบียนและจัดการข้อมูลนักเรียนภายในสถานศึกษา",
      "ติดตามสถานะค่าธรรมเนียมและประวัติการชำระเงินของนักเรียน",
      "ออกใบเสร็จและตรวจสอบรายการชำระเงินย้อนหลังได้อย่างเป็นระบบ",
    ],
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    testCaseUrl: "https://example.com", // Project 4: Replace with your Test Case link
    gradient: "from-violet-400 to-purple-500",
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
