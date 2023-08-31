/*import React from "react";
import './Main.css';
function Main()
{
    return (
        <div>
            <img className="bg" src="https://apcoconcreteblocks.com/wp-content/uploads/2018/04/Homepage-Banner1-min.jpg" alt=" "/>
            <div className="text-block">
            <marquee width="100%" direction="left" height="510px">
              <p>WE ARE PIONEERS IN CONCRETE BLOCKS MANUFACTURING !!!</p>  
                         <p>             IT'S BEEN 35 YEARS SINCE WE STARTED OUR JOURNEY...</p> 
                    </marquee>
            </div>
        </div>
    );
}

export default Main;*/

import React from "react";
import './Slideshow.css';
import slide from './images/slide.jpg';
import show from './images/show.jpg';

const colors = ["violet", "#00C49F","violet"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        
          <div
            className="slide"
            key={index}
            style={{ backgroundImage : `url(${slide})`,
                      backgroundSize: 'cover'
                   }}
          ></div>
        <div
            className="slide"
            key={index}
            style={{ backgroundImage :` url(${show})`, 
                        backgroundSize: 'cover'

                    }}
          ></div>
          <div
            className="slide"
            key={index}
            style={{ backgroundImage :` url(${show})`, 
                        backgroundSize: 'cover'

                    }}
          ></div>
        
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}


export default Slideshow;