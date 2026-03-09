import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/portfolio.png";
import projImg2 from "../assets/img/Ecommerce_website.jpg";
import projImg3 from "../assets/img/Task_Manager_Microservice_System.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description:
        "Developed a responsive personal portfolio website to showcase my projects, skills, and contact information. The website features a modern UI design, smooth navigation, and interactive sections such as About, Skills, Projects, and Contact. Implemented responsive layouts to ensure compatibility across different devices and screen sizes. Technologies Used: HTML, CSS, JavaScript, React.js",
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce Platform-Backend  (inProgress)",
      description: "Currently developing a backend system for an E-Commerce platform using Java, Spring Boot, and MySQL to manage products, users, carts, and orders through RESTful APIs. Implementing secure authentication and role-based authorization using JWT while optimizing database interactions with JPA and Hibernate. The application is being containerized with Docker to support scalable and consistent deployment.",
      imgUrl: projImg2,
    },
    {
      title: "Task Manager Microservice System  (in Progress)",
      description: "Currently building a microservices-based task management system using Java and Spring Boot to manage task creation, assignment, and notifications. Implementing asynchronous communication between services using Apache Kafka and improving system performance with Redis caching. The architecture is being designed to ensure scalability, modularity, and efficient service communication.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here are some of the key projects I’ve worked on, showcasing my
                    skills in full-stack development and problem-solving.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <ProjectCard {...projects[0]} />
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard {...projects[1]} />
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard {...projects[2]} />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-right"
        src={colorSharp2}
        alt=""
      />
    </section>
  );
};