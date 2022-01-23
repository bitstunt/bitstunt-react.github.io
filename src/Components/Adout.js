import React, { useState, useEffect } from 'react';
import './Script.js';
import './About.css';
import { debounce } from './Script.js';

function About () {
    const para = " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.";
    const stats = [{count: 127, text: "Awards Received"}, {count: 1505, text: "Cups of Coffee"}, {count: 109, text: "Projects Completed"}, {count: 102, text: "Happy Clients"}];
    const list = stats.map((item, index) => {return (<div key={index} className="stats-block">
    <div className="count">{item.count}</div>
    <h5>{item.text}</h5>
    </div>)});
    const [animated, setTruth] = useState([false, false, false]);
    const animate_counter = () => {
        let counters = document.querySelectorAll('.count');
        counters.forEach(element => {
            const target = parseInt(element.innerText);
            let count = 0;
            const updateCount = () => {
                if (count < target)
                {
                    element.innerText=++count;
                }
            }
            const speed = 1500/target;
            const interval = setInterval(updateCount, speed);
            if (count >= target)
            {
                clearInterval(interval);
            }
        });
    }
    const handleScroll = () => {
        let scroll_position = window.innerHeight;
        let elements = document.getElementsByClassName('fadeUp')
        var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i),
        isTablet = navigator.userAgent.toLowerCase().match(/tablet/i),
        isAndroid = navigator.userAgent.toLowerCase().match(/android/i),
        isiPhone = navigator.userAgent.toLowerCase().match(/iphone/i),
        isiPad = navigator.userAgent.toLowerCase().match(/ipad/i);
        if (isMobile || isTablet || isAndroid || isiPhone || isiPad )
        {
            for (let index = 0; index < 3; index++)
            {
                if (!animated[index]) 
                {
                    elements[index].classList.remove('fadeUp');
                    const newAnimated = [...animated];
                    newAnimated[index] = true;
                    setTruth(newAnimated);
                    if (elements[index].classList.contains('about-stats'))
                    {
                        animate_counter();
                    }
                }   
            }
        }
        else
        {
            for (let index = 0; index < 3; index++)
            {
                let element_position = elements[index].getBoundingClientRect().top;
                if (element_position < scroll_position && !animated[index]) 
                {
                    elements[index].classList.add('animate');
                    const newAnimated = [...animated];
                    newAnimated[index] = true;
                    setTruth(newAnimated);
                    if (elements[index].classList.contains('about-stats'))
                    {
                        animate_counter();
                    }
                }
            }
        }
    }
    window.addEventListener('scroll', debounce(handleScroll, ));
    return ( 
        <section className="about" id="about">
            <div className="about-header about-row fadeUp">
                <div className="about-full">
                    <h3 className="subhead-1">Hello There</h3>
                    <h1 className="subhead-2">We are Glint</h1>
                </div>
            </div>
            <div className="about-desc about-row fadeUp">
                <div className="about-full">
                    <p>
                        {para}
                    </p>
                </div>
            </div>
            <div className="about-stats about-row fadeUp">
                {list}
            </div>
            <div className="about-line"></div>
        </section>
     );
}

export default About ;