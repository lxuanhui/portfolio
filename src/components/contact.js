import React from 'react';



const Contact = () => (
    <section id='contact'className="contact-section section-padding">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title text-center" data-aos="fade-up" data-aos-delay="100">
                        <br></br>
                        <h1>Contact</h1>
                        <hr
                            style={{
                            background: 'antiquewhite',
                            color: 'antiquewhite',
                            borderColor: 'antiquewhite',
                            height: '7px',
                            width: '30%',
                            display:'inline-block'
                            }}
                        />
                        <h2 style={{textAlign:"center", color:"white", fontSize:"1.5rem", padding:'5px'}}>Let's Connect!</h2>
                    </div>
                </div>                         
            </div>
            <div className="row" style={{padding:'3rem'}}>
                <div className="col-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a href="https://www.linkedin.com/in/xuanhui-lee/" class="btn btn-light" role="button" aria-pressed="true" style={{borderRadius:"25px"}}>
                    <img src="/LinkedIn-Logos/LI-Logo.png" alt="LinkedIn" width={200} height={60} style={{margin:'20px'}}/>
                </a>
                </div>
                <div className="col-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a href="https://github.com/lxuanhui" class="btn btn-light" role="button" aria-pressed="true" style={{borderRadius:"25px"}}>
                    <img src="/GitHub-Logos/GitHub_Logo.png" alt="Github" width={200} height={60} style={{margin:'20px'}}/>
                </a>
                </div>
                <div className="col-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a href="https://t.me/lxuanhui" class="btn btn-light" role="button" aria-pressed="true" style={{borderRadius:"25px"}}>
                    <img src="/telegram.png" alt="Telegram" width={200} height={60} style={{margin:'20px'}}/>
                </a>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
