import { useState } from 'react'
import './header.css'
import img from './IMAGE.svg'




const Header = () => {

  const [nav,setNav] = useState(false)


  return(
    <div>
      <header className="header">
        <div className="header__container">
          <a href="#" className="header__logo"><img src={img} alt="logo"  /></a>
          <div className="header__navigation">
            <nav className={ nav ? "header__menu menu _active" : "header__menu menu"}>
              <ul className="menu__body">
                <li class="menu__item"><a href="#about" className="menu__link">Start</a></li>
                <li class="menu__item"><a href="#contact" className="menu__link">Contact us</a></li>
                <li class="menu__item"><a href="#peculiarity" className="menu__link">Our history</a></li>
              </ul>
            </nav>
            <div class="header__buttons">
                <button class="header__btn register">Book now</button>
            </div>
            <div onClick={ () => setNav(!nav) } class={ nav ? "menu-icon _active" : "menu-icon"}>
                <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header