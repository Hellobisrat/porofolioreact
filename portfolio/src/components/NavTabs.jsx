import {Link, useLocation} from 'react-router-dom'


function NavTabs(){

  const currentPage = useLocation().pathname;
  return (
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">

    
     <h1>Bisrat </h1>
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
      <Link to='/' className={currentPage==='/'?'nav-link active':'nav-link'}>
        About
      </Link>
      </li>
      <li className='nav-item'>
      <Link to='/Portofolio' className={currentPage==='/Portofolio'?'nav-link active':'nav-link'}>
      Portofolio
      </Link>
      </li>
      <li className='nav-item'>
      <Link to='/Contact' className={currentPage==='/Contact'?'nav-link active':'nav-link'}>
       Contact
      </Link>
      </li>
      <li className='nav-item'>
      <Link to='/Resume' className={currentPage==='/Resume'?'nav-link active':'nav-link'}>
       Resume
      </Link>
      </li>
    </ul>
  
  </div>
</nav>
  
  )

}

export default NavTabs;









