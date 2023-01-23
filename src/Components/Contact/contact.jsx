import './contact.css'
import img from './images/Combined-Shape (1).png'
import img1 from './images/Combined-Shape.png'
import img3 from './images/Shape (1).png'
import img2 from './images/Shape.png'


const Contact = () => {
  return(
    <div>
      <div id='contact' className="contact">
        <div className="contact_back"></div>
        <div className="contact_block">
          <div className="contact_block__container">
            <div className="contact_block_inf">
              <h2 className="contact_block_title">Come together.</h2>
              <p className="contact_block_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
            </div>
            <div className="contact_block_desc">
              <div className="desc_items">
                <div className="desc_item">
                  <img src={img} alt="img" srcset="" />
                  <p className="contact_block_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="desc_item">
                  <img src={img1} alt="img" srcset="" />
                  <p className="contact_block_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className="desc_items">
                <div className="desc_item">
                  <img src={img2} alt="img" srcset="" />
                  <p className="contact_block_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="desc_item">
                  <img src={img3} alt="img" srcset="" />
                  <p className="contact_block_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact