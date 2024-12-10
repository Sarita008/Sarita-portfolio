import React, { useState } from 'react'
import "./Project.css";
import Image from "../../assets/1.jpg";
import Income from "../../assets/income.png";
import Blog from "../../assets/blog.png";
import Weather from "../../assets/weather.png";
import Email from "../../assets/Email-sender.png";
import Todo from "../../assets/todo.png";
import Battery from "../../assets/batter-api.png";
import Calculator from "../../assets/calculator.png";
import flipkart from "../../assets/flipkart.png";
import snake from "../../assets/snake.png";
import AI from "../../assets/AI.png";
import Netflix from "../../assets/netflix.png";
import DineDash from "../../assets/DineDash.png";

const Project = () => {
    const [category, setCategory]=useState("All");

    const onclickAll = function(){
        setCategory("All");
    };
    const onclickBasic = function(){
        setCategory("Basic");
    };
    const onclickIntermediate = function(){
        setCategory("Intermediate");
    };
    const onclickAdvance = function(){
        setCategory("Advance");
    };

    

    return (
    <div id='myProjects' className='project-container'>
        <div className='project-content'>
        <h1>My Projects</h1>
        </div>
        
        <div className="project-buttons">
            <button className="button mixitup-control-active" onClick={onclickAll}>All Project</button>
            <button className="button" onClick={onclickBasic}>Basic Project</button>
            <button className="button"onClick={onclickIntermediate}>Intermediate Project</button>
            <button className="button" onClick={onclickAdvance}>Advance Project</button>
        </div>
        
        <div className='projectClass'>
            {category=="All"&& 
                <div className='projectClass'>
                    <div className='project-card'>
                    <a href='https://github.com/Sarita008/AI-Content-Generator'>
                    <img 
                            src= {AI}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>GenWrite AI Content Generator</h2>
                            <p> Developed an AI-powered content generation platform using the MERN Stack, incorporating OpenAI API for dynamic and automated content creation. Integrated Stripe API for secure payment solutions, optimizing transaction processes for an enhanced user experience. Designed an intuitive and visually appealing user interface, ensuring both aesthetic appeal and seamless functionality.</p>
                            <a href="https://github.com/Sarita008/AI-Content-Generator"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href="https://github.com/Sarita008/Netflix-clone">
                    <img 
                            src= { Netflix}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Netflix- UI clone</h2>
                            <p>Developed a Netflix clone using the MERN stack and Tailwind CSS, integrating user authentication (login and register) with secure session management. Implemented dynamic features, including a movie search section, TV series filtering, and person search by name, ensuring seamless user experience and responsiveness.
                            Designed and optimized a modern, visually appealing UI using Tailwind CSS, enhancing user engagement and accessibility across devices.</p>
                            <a href="https://github.com/Sarita008/Netflix-clone"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href="https://github.com/Sarita008/DineBot-Food-Chatbot">
                    <img 
                            src= { DineDash}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2> DineBot-Food Chatbot</h2>
                            <p>Developed an interactive food chatbot, DineBot, using React.js and CSS, integrating advanced conversational flows via Voiceflow for seamless user interactions.
                            Implemented personalized food suggestions based on mood, health, diet preferences, and available ingredients, enhancing user satisfaction and engagement.
                            Designed a responsive and intuitive UI for the chatbot, ensuring accessibility and cross-platform compatibility.</p>
                            <a href="https://github.com/Sarita008/DineBot-Food-Chatbot"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>



                    <div className='project-card'>
                    <a href="https://github.com/Sarita008/Flipkart-ecommerce">
                    <img 
                            src= {flipkart}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Flipkart- E-commerce</h2>
                            <p>Design and developed e-commerce platform using the MERN stack and Context API for global state management, with an intuitive admin panel for seamless product management. Engineered a user-friendly design with Material UI, optimizing the shopping experience and enhancing user
                                engagement through responsive and visually appealing interfaces.</p>
                            <a href="https://github.com/Sarita008/Flipkart-ecommerce"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                        <a href='https://income-expenses-tracker-g91b.vercel.app/'>
                        <img 
                            src= {Income} 
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Income-Expenses Tracker</h2>
                            <p>Developed Income-Expenses Tracker Web application using Node.js, Express.js, and React.js, MongoDB showcasing my proficiency in full-stack development and database management. Implemented features for tracking financial transactions and generating insights.
                            <br />
                            In this project, I leveraged Node.js and Express.js to build the backend infrastructure, implementing RESTful APIs for handling data requests and interactions with the MongoDB database.I utilized React.js to create a dynamic and responsive user interface, allowing users to seamlessly input, track, and analyze their income and expenses. 
                            </p>
                            <a href="https://github.com/Sarita008/Income-Expenses-Tracker"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://income-expenses-tracker-g91b.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href=' https://github.com/Sarita008/Blog-web-app'>
                    <img 
                            src= {Blog}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Blog</h2>
                            <p>Designed and developed a dynamic Blog website using Node.js, Express.js, EJS, and MongoDB. Integrated CRUD operations to manage blog posts and user interactions effectively. Proficient in backend development, database management, and templating engines.This Blog Web Application reflects my dedication to excellence in web development and my ability to create impactful solutions that meet the needs of modern users.</p>
                            <a href="https://github.com/Sarita008/Blog-web-app"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href='https://weather-web-app-taupe.vercel.app/'>
                    <img 
                            src= {Weather}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Weather Web App</h2>
                            <p>As a proficient React.js developer, I have designed and developed a Weather web application utilizing the Weatherbit.io API to fetch real-time weather data. Leveraging my expertise in React.js, I created a dynamic and intuitive user interface that provides users with up-to-date weather information.
                            <br />
                            In this project, I utilized React.js to build a responsive and interactive front-end interface, allowing users to easily input their location and view detailed weather forecasts. I integrated the Weatherbit.io API to fetch weather data, enabling the application to display accurate and timely information on temperature, humidity, wind speed, and more.
                            </p>
                            <a href="https://github.com/Sarita008/weather-web-app"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://weather-web-app-taupe.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href='https://snake-game-sepia-beta.vercel.app/'>
                    <img 
                            src= {snake}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Snake Game</h2>
                            <p>I developed a classic Snake Game using JavaScript, HTML, and CSS. Players navigate the snake to consume food, increasing their score while avoiding collisions with the walls and itself. <br/> The game features smooth animations, sound effects for actions, and a high score system stored in local storage. This project demonstrates my ability to create interactive web applications with real-time updates and responsive gameplay.
                            </p>
                            <a href="https://github.com/Sarita008/snake"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://snake-game-sepia-beta.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href='https://to-do-list-chi-rouge.vercel.app/'>
                    <img 
                            src= {Todo}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Todo List</h2>
                            <p>As a React.js developer, I have designed and developed a dynamic Todo list web application aimed at simplifying task management and enhancing productivity. In this project, I utilized React.js to create a user-friendly front-end interface, enabling users to seamlessly add task. Leveraging React components and react Hooks, I ensured that the Todo list web application provides a smooth and efficient user experience, allowing users to stay organized and focused on their goals.</p>
                            <a href="https://github.com/Sarita008/To-Do-List"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://to-do-list-chi-rouge.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href='https://github.com/Sarita008/E-MailSender-Web-App'>
                    <img 
                            src= {Email}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>E-mail Sender</h2>
                            <p>As a FullStack web developer, I have designed and developed an Email-sender web application using Node.js, EJS and using NodeMailer Package. Leveraging my expertise in both front-end and back-end technologies, I created a seamless user experience for sending emails efficiently and effectively..
                            <br />
                            In this project, I utilized Node.js for server-side scripting, enabling asynchronous handling of email sending processes. EJS was employed for templating, allowing for dynamic content generation and personalized email templates.
                            </p>
                            <a href="https://github.com/Sarita008/E-MailSender-Web-App"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href='https://battery-api-blue.vercel.app/'>
                    <img 
                            src= {Battery}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Battery API</h2>
                            <p>Designed and developed a Battery API project using HTML, CSS, and JavaScript, with the primary objective of providing users with real-time insights into their device's battery status.
                            <br />
                            I focused on creating a user-friendly interface that provides clear and concise information about the device's battery status.This project not only demonstrates my proficiency in HTML, CSS, and JavaScript but also showcases my ability to leverage web APIs to create practical and useful applications. 
                            </p>
                            <a href="https://github.com/Sarita008/Battery-API"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://battery-api-blue.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    
                    <div className='project-card'>
                    <a href='https://calculator-umber-three-31.vercel.app/'>
                    <img 
                            src= {Calculator}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Calculator</h2>
                            <p>As a web developer, I've created a dynamic Calculator web application using HTML, CSS, and JavaScript, showcasing my proficiency in front-end development and user interface design.
                             <br />
                             In this project, I leveraged HTML to structure the calculator's layout, CSS was utilized to style the interface and user experience with modern design elements, JavaScript served as the backbone of the application, enabling interactive functionality such as addition, subtraction, multiplication, and division.  
                            </p>
                            <a href="https://github.com/Sarita008/calculator"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://calculator-umber-three-31.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                </div>
            }

            {category=="Basic"&& 
                <div className='projectClass'>
                    <div className='project-card'>
                    <a href='https://snake-game-sepia-beta.vercel.app/'>
                    <img 
                            src= {snake}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Snake Game</h2>
                            <p>I developed a classic Snake Game using JavaScript, HTML, and CSS. Players navigate the snake to consume food, increasing their score while avoiding collisions with the walls and itself. <br/> The game features smooth animations, sound effects for actions, and a high score system stored in local storage. This project demonstrates my ability to create interactive web applications with real-time updates and responsive gameplay.
                            </p>
                            <a href="https://github.com/Sarita008/snake"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://snake-game-sepia-beta.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href='https://to-do-list-chi-rouge.vercel.app/'>
                    <img 
                            src= {Todo}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Todo List</h2>
                            <p>As a React.js developer, I have designed and developed a dynamic Todo list web application aimed at simplifying task management and enhancing productivity. In this project, I utilized React.js to create a user-friendly front-end interface, enabling users to seamlessly add task. Leveraging React components and react Hooks, I ensured that the Todo list web application provides a smooth and efficient user experience, allowing users to stay organized and focused on their goals.</p>
                            <a href="https://github.com/Sarita008/To-Do-List"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://to-do-list-chi-rouge.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                      <div className='project-card'>
                    <a href='https://github.com/Sarita008/E-MailSender-Web-App'>
                    <img 
                            src= {Email}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>E-mail Sender</h2>
                            <p>As a FullStack web developer, I have designed and developed an Email-sender web application using Node.js, EJS and using NodeMailer Package. Leveraging my expertise in both front-end and back-end technologies, I created a seamless user experience for sending emails efficiently and effectively..
                            <br />
                            In this project, I utilized Node.js for server-side scripting, enabling asynchronous handling of email sending processes. EJS was employed for templating, allowing for dynamic content generation and personalized email templates.
                            </p>
                            <a href="https://github.com/Sarita008/E-MailSender-Web-App"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                    <a href='https://battery-api-blue.vercel.app/'>
                    <img 
                            src= {Battery}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Battery API</h2>
                            <p>Designed and developed a Battery API project using HTML, CSS, and JavaScript, with the primary objective of providing users with real-time insights into their device's battery status.
                            <br />
                            I focused on creating a user-friendly interface that provides clear and concise information about the device's battery status.This project not only demonstrates my proficiency in HTML, CSS, and JavaScript but also showcases my ability to leverage web APIs to create practical and useful applications. 
                            </p>
                            <a href="https://github.com/Sarita008/Battery-API"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://battery-api-blue.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    <div className='project-card'>
                    <a href='https://calculator-umber-three-31.vercel.app/'>
                    <img 
                            src= {Calculator}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Calculator</h2>
                            <p>As a web developer, I've created a dynamic Calculator web application using HTML, CSS, and JavaScript, showcasing my proficiency in front-end development and user interface design.
                             <br />
                             In this project, I leveraged HTML to structure the calculator's layout, CSS was utilized to style the interface and user experience with modern design elements, JavaScript served as the backbone of the application, enabling interactive functionality such as addition, subtraction, multiplication, and division.  
                            </p>
                            <a href="https://github.com/Sarita008/calculator"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://calculator-umber-three-31.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                   
                   
                </div>
            }

            {category=="Intermediate"&& 
                <div className='projectClass'>
                    <div className='project-card'>
                        <a href='https://income-expenses-tracker-g91b.vercel.app/'>
                        <img 
                            src= {Income} 
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Income-Expenses Tracker</h2>
                            <p>Developed Income-Expenses Tracker Web application using Node.js, Express.js, and React.js, MongoDB showcasing my proficiency in full-stack development and database management. Implemented features for tracking financial transactions and generating insights.
                            <br />
                            In this project, I leveraged Node.js and Express.js to build the backend infrastructure, implementing RESTful APIs for handling data requests and interactions with the MongoDB database.I utilized React.js to create a dynamic and responsive user interface, allowing users to seamlessly input, track, and analyze their income and expenses. 
                            </p>
                            <a href="https://github.com/Sarita008/Income-Expenses-Tracker"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://income-expenses-tracker-g91b.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href=' https://github.com/Sarita008/Blog-web-app'>
                    <img 
                            src= {Blog}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Blog</h2>
                            <p>Designed and developed a dynamic Blog website using Node.js, Express.js, EJS, and MongoDB. Integrated CRUD operations to manage blog posts and user interactions effectively. Proficient in backend development, database management, and templating engines.This Blog Web Application reflects my dedication to excellence in web development and my ability to create impactful solutions that meet the needs of modern users.</p>
                            <a href="https://github.com/Sarita008/Blog-web-app"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                   <div className='project-card'>
                    <a href='https://weather-web-app-taupe.vercel.app/'>
                    <img 
                            src= {Weather}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Weather Web App</h2>
                            <p>As a proficient React.js developer, I have designed and developed a Weather web application utilizing the Weatherbit.io API to fetch real-time weather data. Leveraging my expertise in React.js, I created a dynamic and intuitive user interface that provides users with up-to-date weather information.
                            <br />
                            In this project, I utilized React.js to build a responsive and interactive front-end interface, allowing users to easily input their location and view detailed weather forecasts. I integrated the Weatherbit.io API to fetch weather data, enabling the application to display accurate and timely information on temperature, humidity, wind speed, and more.
                            </p>
                            <a href="https://github.com/Sarita008/weather-web-app"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                            <a href="https://weather-web-app-taupe.vercel.app/"><i className="fa fa-link" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>  
                </div>
            }

            {category=="Advance"&& 
                <div className='projectClass'>
                    
                    <div className='project-card'>
                    <a href='https://github.com/Sarita008/AI-Content-Generator'>
                    <img 
                            src= {AI}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>GenWrite AI Content Generator</h2>
                            <p> Developed an AI-powered content generation platform using the MERN Stack, incorporating OpenAI API for dynamic and automated content creation. Integrated Stripe API for secure payment solutions, optimizing transaction processes for an enhanced user experience. Designed an intuitive and visually appealing user interface, ensuring both aesthetic appeal and seamless functionality.</p>
                            <a href="https://github.com/Sarita008/AI-Content-Generator"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href="https://github.com/Sarita008/Netflix-clone">
                    <img 
                            src= { Netflix}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Netflix- UI clone</h2>
                            <p>Developed a Netflix clone using the MERN stack and Tailwind CSS, integrating user authentication (login and register) with secure session management. Implemented dynamic features, including a movie search section, TV series filtering, and person search by name, ensuring seamless user experience and responsiveness.
                            Designed and optimized a modern, visually appealing UI using Tailwind CSS, enhancing user engagement and accessibility across devices.</p>
                            <a href="https://github.com/Sarita008/Netflix-clone"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>

                    <div className='project-card'>
                    <a href="https://github.com/Sarita008/DineBot-Food-Chatbot">
                    <img 
                            src= { DineDash}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2> DineBot-Food Chatbot</h2>
                            <p>Developed an interactive food chatbot, DineBot, using React.js and CSS, integrating advanced conversational flows via Voiceflow for seamless user interactions.
                            Implemented personalized food suggestions based on mood, health, diet preferences, and available ingredients, enhancing user satisfaction and engagement.
                            Designed a responsive and intuitive UI for the chatbot, ensuring accessibility and cross-platform compatibility.</p>
                            <a href="https://github.com/Sarita008/DineBot-Food-Chatbot"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>



                    <div className='project-card'>
                    <a href="https://github.com/Sarita008/Flipkart-ecommerce">
                    <img 
                            src= {flipkart}
                            alt='project image'
                        />
                        </a>
                        <div className='project-info'>
                            <h2>Flipkart- E-commerce</h2>
                            <p>Design and developed e-commerce platform using the MERN stack and Context API for global state management, with an intuitive admin panel for seamless product management. Engineered a user-friendly design with Material UI, optimizing the shopping experience and enhancing user
                                engagement through responsive and visually appealing interfaces.</p>
                            <a href="https://github.com/Sarita008/Flipkart-ecommerce"><i className="fa fa-github" style={{fontSize:"48px", color:"black", margin:"5px"}}></i></a>
                        </div>
                    </div>
                    
                </div>  
            }         
        </div>
    </div>
    )
}

export default Project;