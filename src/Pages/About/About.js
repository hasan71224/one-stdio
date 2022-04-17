import React from 'react';
import about from '../../images/about.jpg'
const About = () => {
    return (
        <div>
            <div class="card mb-3 w-100" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={about} className="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">Md. Mahmudul Hasan</h2>
                        <p class="card-text"> <strong>Goal: </strong> Assalamualaikum- I'm Mahmudul Hasan, This year i'm complete my graduation. now i'm trying to learn Front End Development. So, This year My Goal is SuccessFully Complete Programming hero course and find a job as a front end developer. and Learn some new topic Angular, Mongo DB, Note JS and More. I need to see me as Full Stack Developer. Robotics is my favorite subject, i need success in this site. in this year i'm trying to complete one certification in Robotic Process Automation. UI Path RPA Associate and UI Path RPA Advance is my target certification. </p>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;