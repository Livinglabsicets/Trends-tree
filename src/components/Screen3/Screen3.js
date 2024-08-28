import React, {  useState } from 'react';
import './screen3.css'; 
import video1 from '../../Asserts/Planet2.mp4';
import video2 from '../../Asserts/Planet2.mp4';
import video3 from '../../Asserts/Planet2.mp4';
import video4 from '../../Asserts/Planet2.mp4';
import video5 from '../../Asserts/Planet2.mp4';
import sunVideo from '../../Asserts/Sun.mp4';
import { useNavigate } from 'react-router-dom';


const Screen3 = () => {
    const [openButtonIndex, setOpenButtonIndex] = useState(null);
    const navigate = useNavigate();
 
    const videoUrls = [video1, video2, video3, video4, video5];
 
    // Define the number of surrounding buttons for each main button
    const surroundingButtonsConfig = [
        ["left-button", "right-button", "top-left-button", "top-right-button"], // 4 buttons
        ["left-button", "right-button", "top-left-button", "top-right-button"], // 4 buttons
        ["top-button", "top-right-button", "right-button", "bottom-right-button", "bottom-button", "bottom-left-button", "left-button", "top-left-button"], // 8 buttons
        ["top-button", "top-right-button", "right-button", "bottom-right-button", "bottom-button", "bottom-left-button", "left-button", "top-left-button"], // 8 buttons
        ["top-button", "top-right-button", "right-button", "bottom-right-button", "bottom-button", "bottom-left-button", "left-button", "top-left-button"], // 8 buttons
    ];
    

    const mainButtonLabels = [
        "Sustainable Insurance",    // Label for Button 1
        "Security G Risk Assessment",     // Label for Button 2
        "Customer Experience",    // Label for Button 3
        "Insurance Transformation",       // Label for Button 4
        "Sharing Economy"
    ];
    const handleClick = (index) => {
        // Toggle the openButtonIndex state
        setOpenButtonIndex(prevIndex => prevIndex === index ? null : index);
    };
    const MoonhandleClick = () => {
        navigate('/trend');
      };
    

    return (
      
        <div className="toggle-container">
            <div className='planets'>
            {[0, 1, 2, 3, 4].map((index) => (
                <div key={index} className="button-group">
                   <div className="main-button-container">
                            <button
                                onClick={() => handleClick(index)}
                                className="main-toggle-button"
                            >
                                <video
                                    className="button-video"
                                    src={videoUrls[index]}
                                    loop
                                    muted
                                    autoPlay
                                />
                            </button>
                            <span className="main-button-label">{mainButtonLabels[index]}</span>
                        </div>
                    {openButtonIndex === index && (
                        <div className="button-wrapper">
                         {surroundingButtonsConfig[index].map((buttonClass, i) => (
                                <div>
                                    <button key={i} className={buttonClass} onClick={MoonhandleClick}></button>
                                    <div className='green-insurance-moon'>
                                        {
                                            (i==0) ? 'Green Insurance':''
                                        }
                                        
                                    </div>
                                </div>    
                                
                            ))}
                        
                    </div>
                    )}
                </div>
            ))}
            </div>
            <div className="sun-screen3">
            <video
                 className="sun-video-screen3"
                 src={sunVideo}
                 loop
                 muted
                 autoPlay
            />
      </div>
    </div>
       
        
    );
}

export default Screen3;