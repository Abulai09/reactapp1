import logo from './images/IMAGE.svg'
import img from './images/Frame.svg'
import './banner.css'

const Banner = () => {
  return(
    <div>
      <section className="banner">
        <div className="banner__container">
          <div className="banner_content">
            <div className="banner_item"><img src={logo} alt="logo" srcset="" /></div>
            <div className="banner_item "><h2 className='titlee'>Experience the perfect combination of modern housing & natural scenery.</h2></div>
            <h4 className="banner_item item">Located in Lofoten, norway</h4>
            <div className="banner_item"><img src={img} alt="img" srcset="" /></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner