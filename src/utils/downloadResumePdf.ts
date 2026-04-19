import { jsPDF } from 'jspdf';

export function downloadResumePdf() {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const marginX = 48;
  let y = 48;

  const line = (text: string, size = 11, bold = false, gap = 16) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    const maxWidth = 500;
    const wrapped = doc.splitTextToSize(text, maxWidth);
    doc.text(wrapped, marginX, y);
    y += wrapped.length * gap;
  };

  const section = (title: string) => {
    y += 6;
    line(title, 12, true, 18);
    doc.setDrawColor(90, 90, 90);
    doc.line(marginX, y - 8, 548, y - 8);
    y += 4;
  };

  line('GIRIDHAR KUMAR', 18, true, 22);
  line('Bangalore, India | +91 8969485658 | giridhar.sharma.web@gmail.com', 10);
  line('LinkedIn: linkedin.com/in/kumar-giridhar | GitHub: github.com/giridhar-bot', 10);

  section('SUMMARY');
  line(
    'Full Stack Engineer with 4.6+ years of experience building scalable microservices-based enterprise applications using Java, Spring Boot, and React.js. Strong in API design, performance optimization, caching strategies, and distributed workflow automation.',
    10
  );

  section('TECHNICAL SKILLS');
  line('Frontend: React.js, Redux, Context API, Material UI, JavaScript, TypeScript, Responsive UI', 10);
  line('Backend: Java, Spring Boot, Microservices, REST APIs, Redis, SQL, Multithreading, Async Processing, JWT/Spring Security', 10);
  line('Tools & Core: Docker, Git, GitHub Copilot, CI/CD, Postman, DSA, OOP, System Design, DB Indexing', 10);

  section('EXPERIENCE');
  line('Capgemini | Consultant – Full Stack Engineer (Java + React) | Dec 2025 – Present | Bangalore, India', 10, true);
  line('Client: Mercedes-Benz Research & Development India (MBRDI)', 10);
  line('• Developing microservices-based IT Controlling platform for financial planning, cost allocation, and billing automation.', 10);
  line('• Designed REST APIs integrating workflow (C-FMP -> ServCat -> Billing4IT) ensuring seamless cross-system data flow.', 10);
  line('• Reduced manual financial processing by automating approval and billing workflows across platforms.', 10);
  line('• Built dynamic Hierarchy Management module with Spring Boot + React for secure CRUD and batch operations.', 10);

  line('Infinite Computer Solutions | Software Engineer – Java Full Stack | Jul 2021 – Sept 2025 | Bangalore, India', 10, true);
  line('• Led end-to-end development of enterprise applications using Java, Spring Boot, and React.js.', 10);
  line('• Designed and developed RESTful microservices handling billing, order tracking, and reporting workflows serving 15K+ monthly transactions.', 10);
  line('• Reduced backend response time by 40% using Redis caching, async processing, and DB indexing.', 10);
  line('• Built reusable React component libraries improving UI development speed by 30%.', 10);
  line('• Enhanced frontend performance via code splitting, lazy loading, and memoization reducing load time by 40%.', 10);

  if (y > 740) {
    doc.addPage();
    y = 48;
  }

  section('PROJECTS');
  line('1. IT Controlling (ITC) Platform — Mercedes-Benz Research & Development India', 10);
  line('2. Smart Analytics System (4G/5G Monitoring Platform) — Verizon', 10);
  line('3. Enterprise Customer Portal — Brightspeed', 10);
  line('4. Drone Monitoring Platform — Qualcomm', 10);

  section('CERTIFICATIONS');
  line('• Front-end Developer (React) – HackerRank (Jun 2024)', 10);
  line('• Java (Basic) Certificate – HackerRank (Oct 2024)', 10);

  section('ACHIEVEMENTS');
  line('• Performer of the Month (Jul 2023): Recognized for redesigning UI achieving 100% responsiveness.', 10);

  doc.save('Giridhar_Kumar_Resume.pdf');
}
