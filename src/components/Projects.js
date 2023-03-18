import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/m1.jpg";
import projImg2 from "../assets/img/m2.jpg";
import projImg3 from "../assets/img/m3.jpg";
import projImg4 from "../assets/img/m4.jpg";
import projImg5 from "../assets/img/m5.jpg";
import projImg6 from "../assets/img/m6.jpg";
import projImg7 from "../assets/img/m7.jpg";
import projImg10 from "../assets/img/m10.jpg";
import projImg9 from "../assets/img/m9.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const events1 = [
    {
      description: "We are excited to invite you to a technical talk by Dr. Niloy Ganguly, a Professor in the Dept. of Computer Science and Engineering at IIT Kharagpur and a visiting professor at the Leibniz University of Hannover. Dr. Ganguly is a Fellow of the Indian Academy of Engineering and has a wealth of experience and expertise in Social Computing, Machine Learning, and Network Science.",
      imgUrl: projImg1,
    },
    {
      description: "Are you a proud member of the Computer Science department? Show off your love for coding and programming with our departmental t-shirt! Fill out the form given below to place your order. There is no restriction on the year of study and degree (BTech/MTech/PhD).",
      imgUrl: projImg2,
    },
    {
      description: "Happy MahaShivratri to all! Today, we celebrate Lord Shiva, one of the most important deities in Hinduism, and reflect on the importance of spirituality and faith in our lives. On this auspicious day, devotees visit Shiva temples, offer prayers, and perform rituals like Abhishekam to seek blessings. MahaShivratri is not just a religious festival, but also a time for cultural celebrations, with traditional folk dances and the exchange of greetings and sweets.",
      imgUrl: projImg3,
    },
  ];

  const events2 = [
    
    {
      description: "As they say Good dance for good moments, we CSS (CSE Student's Society) are thrilled to announce that the Dance Club will be performing on the eve of Fresher’s Party of the 2nd Years. So, mark your calendars and be ready to be entertained by some of the most talented dancers on campus. We look forward to seeing you there!",
      imgUrl: projImg4,
    },
    {
      description: "Unleash the fun and excitement as CSS (CSE Student's Society) throws a grand Fresher's party for the 2nd year CSE students!",
      imgUrl: projImg5,
    },
    {
      description: "The CSE Student's Society(CSS) is proud to announce the induction of the first batch of members(Batch '24). These individuals have demonstrated excellence in the fields of their expertise, and their passion for computer science shines through in all that they do. We are confident that they will bring new perspectives and energy to the society and contribute to its continued growth and success. Congratulations to the inductees, and welcome to the CSE Student's Society!",
      imgUrl: projImg6,
    },
  ];


  const events3 = [
    
    {
      description: "An infant requires proper care and guidance for optimal growth and development. Just as so, an organization at its infancy stage requires individuals who can guide it to excellence and prosperity.💪And we have found just that in the first Post Bearers 🚀of the CSS (CSE Student's Society) from the batch of '23! 💪Let's give them a round of applause and show our support!",
      imgUrl: projImg7,
    },
    {
      description: "The society is thrilled to announce auditions for 2nd Year CSE students! As our newly formed society continues to grow and expand, we require members who have sound technical knowledge and can contribute to the proper positioning and solid foundation of the society.We are auditioning for the following roles:1. Web Development 2. Graphic Designing 3. Video Editing 4. Alumni Outreach 5. Event Management 6. App Development 7. Content Writing",
      imgUrl: projImg10,
    },
    {
      description: "Knock Knock Who's there? CSS! CSS who? CSS (CSE Student's Society) is here and ready to connect you with the best! 🎉Get ready to build your network, develop your skills, and showcase your talents like never before! 💻 With regular seminars, career counseling, workshops, and social events, the sky's the limit for what you can achieve! 🚀So, what are you waiting for? Join us now and let's make the most of this amazing opportunity! 🙌 #WeAreCSS #CSS #NITDurgapur #CSE #StudentSociety #Networking #SkillDevelopment #TalentShowcase",
      imgUrl: projImg9,
    },
  ];



  return (
    <section className="events" id="events">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Events</h2>
                <p>The society is ecstatic to announce the auditions for the 2nd Year CSE students! As the newly formed society continues to grow and expand, we require members to join our team who have sound technical knowledge and will contribute towards the proper positioning and solid foundation of the society. We are auditioning for the following roles: Web Development, Graphic Designing, Video Editing, Alumni Outreach, Event Management, App Development, Content Writing. If you have what require to be a part of CSS, fill the form and be the part of the team.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          events1.map((events1, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...events1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          events2.map((events2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...events2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          events3.map((events3, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...events3}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
