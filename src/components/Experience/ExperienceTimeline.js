import React from "react";
import { Container } from "react-bootstrap";
import "./ExperienceTimeline.css";

function ExperienceTimeline() {
  const experiences = [
    {
      year: "2025",
      role: "Software Engineer",
      company: "miniOrange",
      type: "Full Time",
      duration: "Feb 2025 – Present",
      location: "Pune, Maharashtra",
      description: [
        "Developed a role-based reporting module for the PAM system, enabling secure, role-specific data access.",
        "Automated Ubuntu deployment scripts, reducing setup time by 40% and improving efficiency.",
        "Designed and implemented EPM Dashboard features using React.js, Django, and REST APIs for streamlined privilege management.",
        "Contributed to Endpoint Privilege Management (EPM) agent modules in C# and C++, ensuring lightweight, secure application monitoring.",
        "Integrated real-time communication between the agent and dashboard to enforce policies before UAC prompts.",
      ],
      tech: ["React", "Django", "C#", "C++", "REST APIs", "Linux", "AWS"],
    },
    {
      year: "2024",
      role: "Software Engineer Intern",
      company: "miniOrange",
      type: "Internship",
      duration: "Aug 2024 – Jan 2025",
      location: "Pune, Maharashtra",
      description: [
        "Created a secure database GUI dashboard with React.js and Django, supporting multiple database types and auditing.",
        "Engineered optimized RESTful APIs in Django with advanced SQL queries, improving data retrieval speed by 30%.",
        "Designed and implemented the database schema for the EPM feature and integrated it with the dashboard.",
      ],
      tech: ["React", "Django", "REST APIs", "SQL"],
    },
    {
      year: "2023",
      role: "Web Development Intern",
      company: "Infringe Technologies",
      type: "Internship",
      duration: "Apr 2023 – May 2023",
      location: "Remote",
      description: [
        "Contributed to a live product by building production-grade full-stack features, improving scalability and user experience.",
        "Developed and integrated RESTful APIs with Node.js and MySQL, achieving 25% faster data processing.",
        "Implemented serverless solutions using AWS Lambda, API Gateway, S3, and Redis, ensuring high availability and scalability.",
      ],
      tech: ["Node.js", "MySQL", "AWS Lambda", "API Gateway", "S3", "Redis"],
    },
  ];

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <span className="timeline-year">{exp.year}</span>
              <div className="timeline-card">
                <div className="card-header">
                  <div className="role-badge">
                    <h3 className="role-title">{exp.role}</h3>
                    <span className="badge">{exp.type}</span>
                  </div>
                  <h4 className="company-name">{exp.company}</h4>
                  <p className="duration">{exp.duration}</p>
                  <p className="location">
                    <i className="fas fa-map-marker-alt"></i> {exp.location}
                  </p>
                </div>

                <div className="card-body">
                  <ul>
                    {exp.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="tech-icon">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default ExperienceTimeline;
