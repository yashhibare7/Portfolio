import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pool Karo"
              description="PoolKaro, my brainchild as a Full Stack Developer, revolutionizes commuting with its dynamic ride-sharing platform. Focused on creating seamless experiences, I crafted an intuitive interface using React.js, Node.js, Express.js, and MongoDB. The platform not only facilitates effortless ride discovery but also prioritizes scalability and responsiveness. CarPoolKaro reflects my commitment to leveraging technology for positive societal impact, exemplifying proficiency in full-stack development and innovative connectivity solutions."
              ghLink="https://github.com/yashhibare7/Pool-Karo"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Vehicle Parking Management System"
              description="Developed a comprehensive Vehicle Parking Management System utilizing the MERN stack. Single-handedly executed the entire project lifecycle, implementing features like user registration, parking spot allocation, and real-time monitoring. Demonstrated proficiency in full-stack development, delivering a robust and user-friendly solution."
              ghLink="https://github.com/yashhibare7/Vehical-Parking-Management-System"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Personal Desktop Jarvis"
              description="Designed and implemented a Personal Desktop Jarvis using Python, enabling voice-activated functionalities such as opening YouTube videos, launching the Snake game, providing location details, sharing jokes, capturing photos and screenshots, displaying the current time, and answering questions using Wikipedia. Showcased proficiency in natural language processing and integration of diverse functionalities into a single application."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Daily-Expenses"
              description="Developed an intuitive Daily Expenses Tracker using the MERN stack, offering a seamless solution for managing daily spending. This application enables users to effortlessly record and analyze their expenses, providing insights into spending patterns. Implemented features include expense categorization, interactive charts for visual analysis, and a user-friendly interface for a smooth experience."
              ghLink="https://github.com/yashhibare7/Daily-Expenses?tab=readme-ov-file"
              demoLink="https://daily-expenses-4c857.web.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TO-DO"
              description="Designed and implemented a dynamic To-Do Application using React.js for the front end and Node.js for the backend. This user-friendly application allows seamless task management with features like task creation, completion tracking, and real-time updates. Leveraged the power of React.js to create an interactive and responsive user interface, while Node.js ensured efficient server-side functionality for a smooth user experience."
              ghLink="https://github.com/yashhibare7/TO-DO?tab=readme-ov-file"
              demoLink="https://to-do-d454f.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="QR_Code_Generator"
              description="Developed a versatile QR Code Generator application using React.js for the frontend and Node.js for the backend. This tool allows users to generate QR codes for various purposes, such as URL links, contact information, or custom text. Implemented an intuitive user interface on the frontend to input data, while the backend processes the information and generates QR codes dynamically."
              ghLink="https://github.com/yashhibare7/QR_Code_Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Alz-Amigo"
              description="Developed Alz-Amigo, a compassionate project designed to support Alzheimer's patients. Utilized React.js for the frontend to create an accessible and user-friendly interface. Implemented Python on the backend to provide intelligent functionalities aimed at assisting patients and their caregivers. The application includes features such as memory prompts, daily reminders, and a personalized journey tracker, fostering a supportive environment for those affected by Alzheimer's."
              ghLink="https://github.com/yashhibare7/Alz-Amigo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
