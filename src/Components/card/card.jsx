import './card.css'

const Card = () => {
  return (
    <div>
      <section className="card">
        <div className="card__container">
          <div className="card_content">
          <h2 className="title">We're already booked up for the spring — hurry up & secure your stay for the summer.</h2>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
          <div class="card__buttons">
                <button class="btn">Contact</button>
                <button class="btn2">Book now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card