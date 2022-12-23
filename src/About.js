import { Component } from "react";
import { Accordion } from "react-bootstrap";

class Profile extends Component {

    render() {
        return (
        <Accordion className="accordion" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accHeader">
                Learn more about Sharmarke
            </Accordion.Header>
            <Accordion.Body>
            I am a Software Developer based in the Seattle Area with a focus in Java Development.  I have a strong foundation in JavaScript, React, REST API integration, HTML, CSS, and GitHub. I come from a retail and child care background, where I developed strong communication and problem-solving skills and gained experience working with a diverse range of individuals. Work well in a team environment and can reach deadlines.  I am confident that my technical skills and ability to work effectively with others make me well-suited for a career as a software
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="accHeader">
            Learn more about Ryan
            </Accordion.Header>
            <Accordion.Body>
            am a Software Developer based in the Arizona with a focus in Java Development. I am a US Army veteran and eager to continue learning and growing in my career. In the Army, I developed strong problem-solving skills and the ability to work effectively in a team environment.  I am proactive and passionate about using my skills to build hig-quality software solutions.  I believe that my military back and technical skills make me well-suited for a career in software development.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="accHeader">
            Learn more about Robert
            </Accordion.Header>
            <Accordion.Body>
            Aloha, my name is Robert Davis.  I am a Software Developer based in the Hawaii with a focus in Java Development. Prior to this I was in the hospitality industry as a Concierge providing the spirit of aloha and exceptional service to every guest.  A Veteran who proudly served in the US COAST GUARD.  I am eager to continue learning and growing my career.  I am passionate about using technology to solve problems and make a positive impact in the world.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        )
    }
};

export default Profile;
