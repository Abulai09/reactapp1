import './pec.css'
import img1 from './images4/IMAGE (1).png'
import img2 from './images4/IMAGE (2).png'
import img3 from './images4/IMAGE (3).png'
import img4 from './images4/IMAGE (4).png'
import img5 from './images4/IMAGE (5).png'
import img6 from './images4/IMAGE (6).png'
import img7 from './images4/IMAGE (7).png'
import img8 from './images4/IMAGE.png'


const Peculiarity = () => {
  return (
    <div>
      <section id='peculiarity' className="peculiarity">
        <div className="peculiarity__container">
          <div className="peculiarity_head">
            <h2 className="title">The perfect escape.</h2>
          </div>
          <div className="peculiarity_items">
            <div className="peculiarity_item">
              <div className="item">
                <div className="item_img"><img src={img8} alt="img" srcset="" /></div>
                <div className="item_text"><span className="text">Modern Kitchen Appliances</span></div>
                <div className="item_text"><span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
              </div>
              <div className="item">
                <div className="item_img"><img src={img1} alt="img" srcset="" /></div>
                <div className="item_text"><span className="text">Outdoor Paths</span></div>
                <div className="item_text"><span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
              </div>
              <div className="item">
                <div className="item_img"><img src={img2} alt="img" srcset="" /></div>
                <div className="item_text"><span className="text">Coffee Maker</span></div>
                <div className="item_text"><span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
              </div>
              <div className="item">
                <div className="item_img"><img src={img3} alt="img" srcset="" /></div>
                <div className="item_text"><span className="text">Natural Scenery</span></div>
                <div className="item_text"><span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
              </div>
            </div>
            <div className="peculiarity_item">
              <div className="item">
                <div className="item_img"><img src={img4} alt="img" srcset="" /></div>
                <div className="item_text">
                  <span className="text">Air Conditioner</span>
                  <span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
              </div>
              <div className="item">
                <div className="item_img"><img src={img5} alt="img" srcset="" /></div>
                <div className="item_text"><span className="text">Storage Solutions</span></div>
                <div className="item_text"><span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
              </div>
              <div className="item">
                <div className="item_img"><img src={img6} alt="img" srcset="" /></div>
                <div className="item_text"><span className="text">Cutlery Selection</span></div>
                <div className="item_text"><span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
              </div>
              <div className="item">
                <div className="item_img"><img src={img7} alt="img" srcset="" /></div>
                <div className="item_text"><span className="text">Take-away Options</span></div>
                <div className="item_text"><span className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Peculiarity