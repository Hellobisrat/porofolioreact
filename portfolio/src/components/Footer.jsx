//import { FaStackOverflow,FAGithub,FALinkedin } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import {FaGithub,FaLinkedinIn} from 'react-icons/fa'
import './style.css'



function Footer () {
  

  return (
   
    <Card   className="foot">
      <ul >
        <li><a href="https://github.com/Hellobisrat"><FaGithub/>Github</a></li>
        <li><a href="https://www.linkedin.com/in/bisrat-zerihun-6922a378/"><FaLinkedinIn/>Linkedin</a></li>
      </ul>
     

     
    </Card>
     
    
  )
}

export default Footer;
