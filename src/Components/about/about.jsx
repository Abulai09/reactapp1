import './about.css'
import bed from './images/IMAGE.svg'
import door from './images/IMAGE (1).svg'
import bath from './images/IMAGE (2).svg'



const About = () => {
  return(
    <div>
      <section id='about' className="about">
        <div className="about_title">
          <div className="title__container">
            <h1 className="about_titlee">The Guest House is the perfect weekend getaway cabin.</h1>
          </div>
        </div>

        <div className="about_back"></div>

        <div className="about_desc">
          <div className="desc__container">
            <div className="desc_head">
              <h2 className="title">Sleeping arrangements.</h2>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
            </div>
            <div className="desc_items">
              <div className="desc_item">
                <img src={bed} alt="bed" srcset="" />
                <span className="title">Beds</span>
                <p className="text">The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds.</p>
              </div>
              <div className="desc_item">
                <img src={door} alt="bed" srcset="" />
                <span className="title">Bedrooms</span>
                <p className="text">Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room.</p>
              </div>
              <div className="desc_item">
                <img src={bath} alt="Bath" srcset="" />
                <span className="title">Bathrooms</span>
                <p className="text">The cabin has three bathrooms, all equipped with showers and one with a bath tub</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About