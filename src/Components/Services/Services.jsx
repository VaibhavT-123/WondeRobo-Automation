import React from 'react'
import './Services.css'
import TrunkeyProjectEngineering from '../../assets/TrunkeyProject&Engineering.jpg';
import AutomationImage from '../../assets/AutomationSystem.jpeg';
import DCS2 from '../../assets/DCS2.jpg';
import Electrical_Control_Panel from '../../assets/Electrical Control Panel.jpg';

const servicesData = [
  {
    title: "Turnkey Project & Engineering",
    description:
      "End-to-end automation solutions from concept to commissioning. We handle complete project execution including design, engineering, installation, testing, and support — ensuring seamless integration and timely delivery.",
    image: TrunkeyProjectEngineering,
  },
  {
    title: "Automation System",
    description:
      "Advanced automation systems tailored to enhance productivity, safety, and quality. Our solutions integrate robotics, control systems, and smart technologies to streamline your entire manufacturing process.",
    image: AutomationImage,
  },
  {
    title: "PLC/ SCADA/ HMI",
    description:
      "Expertise in industrial control and monitoring systems. We design and program DCS, PLC, SCADA, and HMI platforms for real-time process control, data acquisition, and seamless plant operations.",
    image: DCS2,
  },
  {
    title: "Electrical & Control Panel",
    description:
      "Custom-built electrical and control panels designed for reliability, safety, and compliance. From MCCs to PLC panels, we deliver efficient power distribution and automation control solutions.",
    image: Electrical_Control_Panel,
  },
  {
    title: "Instrumentation",
    description:
      "Comprehensive instrumentation services including selection, installation, and calibration of sensors and devices. Our solutions ensure precise measurement, monitoring, and process optimization.",
    image: DCS2,
  },
  {
    title: "Machine Manufacturing",
    description:
      `1. Hydraulic Test Bench.                             
       2 Filling Machine .
       3. Leak Test Machine. 
       4. Brust Test Machine`,
    image: AutomationImage,
  },
];

const Services = () => {
  return (
    <div className='Services' id='services'>
        <p className='services-container-tag'>Services We Provide</p>
      {servicesData.map((service, index) => (
        <div key={index} className="services-container" style={index % 2 !== 0 ? { transform: "scaleX(-1)" } : {}}>
          
          {/* Image Section */}
          <div className="services-image-container">
            <div className="services-image-container-div1"></div>
            <div className="services-image-container-div2"></div>
            <div className="services-image-container-div3">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="services-main-img-container">
              <img src={service.image} alt={service.title} className='services-main-img' />
            </div>
          </div>

          {/* Text Section */}
          <div className="services-text-container"  style={index % 2 !== 0 ? { transform: "scaleX(-1)" } : {}}>
            <h2 className="services-text-container-heading">
              {service.title}
            </h2>
            <p className="services-text-container-para">
              {service.description}
            </p>
          </div>
        </div>
      ))}

      {/* Service Tag */}
      {/* <div className="service-tag-container">
        <div className="services-tag">
          Services
        </div>
      </div> */}

      {/* Show This For Small width */}
        <div className="Services-grid">
            {servicesData.map((service, index) => (
                <div key={index} className="Services-card">
                    {/* <div className="services-icon-container">
                        <img src={service.image} className="Services-svg" alt={service.title} />
                    </div> */}
                    <div className="Services-info">
                        <div className="Services-title">{service.title}</div>
                        <div className="Services-discription">{service.description}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services
