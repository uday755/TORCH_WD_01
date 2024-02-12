import React from 'react'

export default function Introduction() {
    return (
        <>
        <div>
            <div className="container my-5">
                <h2>Hello There !</h2>
                <h3>I am <strong className='text-success'>Uday Singh</strong> - Web Developer , Programmer, Technology Enthusiast and a Nature Lover</h3>
                <div className="container my-3">
                    <h4>Currently Persuing My B.Tech in -</h4>
                    <h5 className='text-secondary'>Computer Science and Engineering from - </h5>
                    <h3 className='text-info font-italic'>Indian Institute of Technology Guwahati </h3>
                    <h5>Assam , <strong>INDIA</strong></h5>
                </div>
                <div className="container my-3">
                    <h3 className='text-success'><strong>Web Technologies</strong> - in which I am Working</h3>
                    <hr />
                    <ul>
                        <li><strong>React </strong> - most Popular Single Page Library often called as Framework</li>
                        <li><strong >MongoDB</strong> - Classified as NoSQL document-oreinted Database program </li>
                        <li><strong>Express</strong> - a back end web application framework for building RESTful APIs with Node.js</li>
                        <li><strong>Node.js</strong> - a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine</li>
                        <li><strong>Bootstrap</strong> - a free and open-source CSS framework directed at responsive, mobile-first front-end web development.</li>
                        <li><strong>HTML5, CSS3, Vanilla JavaScript</strong> - Basic Ingredients of a Web Page for structuring , designing and dynamic updations respecitvely.</li>
                    </ul>
                </div>
                <div className="container my-3">
                        <h4><strong className='text-danger'>Programming Skills </strong></h4>
                        <hr />
                        <ul>
                            <li><strong>C and C++ </strong> - for Problem Solving i.e. Data Structures and Algorithms</li>
                            <li><strong>Core Java </strong> - for android app development</li>
                            <li><strong>JavaScript</strong> - for web development</li>
                            <li><strong>LaTeX</strong> - for production of technical and scientific documents.</li>
                            <li><strong>SQL i.e. Structued Query Language</strong> for database creation and manipulations </li>
                        </ul>
                </div>
                <div className="container my-3">
                    <h4><strong className='text-warning'> Projects on which I am currently Working Now :</strong> </h4>
                    <hr />
                    <ul>
                        <li><strong ><a rel='noreferrer' href="https://uday755.github.io/TextUtils/" target={"_blank"}>TextUtils</a></strong> - a text Utility application built using <strong>MERN Stack</strong> that can be used for text manipulation i.e. converting to uppercase/lowercase or word count / line count etc.</li>
                        <li><strong><a rel='noreferrer' href="https://uday755.github.io/Uday-Portfolio/" target='{"_blank"}'> Uday-Portfolio</a></strong> - My Personal Portfolio Website using <strong>React and Bootstrap</strong></li>
                        <li><strong> MagicNotes </strong>- a Notes Taking Application using MERN Stack where user can save or edit or update Notes</li>
                        <li><strong>NewsWorld </strong> - a News Application built with <strong>HTML , JavaScript, Bootstrap, News API</strong> which features daily Updates for personal purpose <strong>(Runs only in Local Host)</strong> </li>
                    </ul>
                </div>
                <div className="container my-3">
                    <h4 className='text-center text-secondary'><strong>Educational Qualifications</strong>:</h4>
                    <ul>
                        <li><h4>Done 12th Grade from D.A.V Public School, Tohana (125120) Haryana India</h4></li>
                        <li><h4>Qualified JEE Mains 2018,JEE Mains 2019</h4></li>
                        <li><h4>Qualified JEE Advanced 2018,JEE Advanced 2019</h4></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
