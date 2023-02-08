import React from 'react'

const projectfield = (props) => {
  return (
            <div className="row" style={{padding:'3rem'}}>
                <div className="col-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="portfoliopic" data-aos="fade-up" data-aos-delay="100"><img src={props.image}alt="Potrait"/></div>
                </div>
                <div className="col-8" data-aos="fade-up" data-aos-delay="100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="projects-text-bubble service border-hover p-5 shadow rounded-5 bg-dark" >
                        <h2 className="fw-bold">{props.title}</h2>
                        <p className="mb-0">{props.description}</p>
                    </div>
                </div>
            </div>
  )
}

export default projectfield;