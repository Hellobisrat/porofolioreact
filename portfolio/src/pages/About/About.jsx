
import './style.css'
import profilepicture from '../../assets/profilepicture.jpg'
export default function About () {
  return (
    <div className='container'>
       <h2 id='head'>About Me</h2>
       <img src={profilepicture} id='image' alt="profile picture"/>

   <p>  
        Bisrat mengesha a  full stack developer in 
        Boot comp working on different software projects 
        using  Html, Css, javascript,  Node js ,  sql, mongodb and other software
        and post my project in my Github account. some of
        my project  listed on Portofolio Page

   </p>

    </div>
  );
}
