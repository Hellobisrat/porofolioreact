import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style.css'
export default function Resume () {
  return (
    <>
    <div>
       <h2>Resume </h2>
       <h5> Downloaded my resume</h5>
       <Card  className='proficiency'>
      <Card.Header>Front-end Proficiencies</Card.Header>
      <ListGroup variant="flush" className='list'>
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>JQuery</ListGroup.Item>
        <ListGroup.Item>responsive design</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
      </ListGroup>
    </Card>
    <Card className='proficiency' >
      <Card.Header>Back-end Proficiencies</Card.Header>
      <ListGroup variant="flush" className='list'>
        <ListGroup.Item>APIs</ListGroup.Item>
        <ListGroup.Item>Node</ListGroup.Item>
        <ListGroup.Item>Express</ListGroup.Item>
        <ListGroup.Item>JQuery</ListGroup.Item>
        <ListGroup.Item>Mongo DB</ListGroup.Item>
        <ListGroup.Item>Mysql Sequelize</ListGroup.Item>
        <ListGroup.Item>others</ListGroup.Item>
        
      </ListGroup>
    </Card>
      
    

    </div>
    <button type="button" className="btn btn-outline-success">
    <a
     className="button"
     href="../src/assets/cv.pdf"
     download
     >
     Download Resume
     </a>
    </button>
    </>
  );
}