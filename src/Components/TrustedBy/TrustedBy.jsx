import React from 'react'
import trustedByLogo1 from '../../assets/trustedByImg1.png'
import trustedByLogo2 from '../../assets/trustedByImg2.png'
import trustedByLogo3 from '../../assets/trustedByImg3.png'
import trustedByLogo4 from '../../assets/trustedByImg4.png'
import trustedByLogo5 from '../../assets/trustedByImg5.png'
import trustedByLogo6 from '../../assets/trustedByImg6.png'
import './TrustedBy.css'

const TrustedBy = () => {
  const trustedLogos = [
    trustedByLogo1,
    trustedByLogo2,
    trustedByLogo3,
    trustedByLogo4,
    trustedByLogo5,
    trustedByLogo6
  ]

  return (
    <div className="trustedby">
      <div className="trustedby-container">
        <h2 className="trustedby-heading">Trusted By Leading Companies</h2>
        
        {/* Infinite Scroll Wrapper */}
        <div className="trustedby-logo-slider">
          <div className="trustedby-track">
            {trustedLogos.concat(trustedLogos).map((logo, id) => (
              <div className="trustedby-slide" key={id}>
                <img src={logo} alt={`Company logo ${id + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBy
