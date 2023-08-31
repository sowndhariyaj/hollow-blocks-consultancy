import React from "react";
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Test from './Contact';
import Center from './Center';
import Bottom from './bottom';
import './App.css';
function App1(){
    return (
        <div>
        <Navbar />
        <Slideshow />
        <marquee className="mark"  width="100%" direction="left" height="70px"> "IT'S BEEN MORE THAN 35 YEARS SINCE WE HAVE STARTED OUR JOURNEY ... WE ARE ONE OF THE LEAD PRODUCERS OF CONCRETE BLOCKS IN KARUR,TAMILNADU "</marquee>
        <Center />
        <Bottom />
        <Test />
        </div>
    );
}
export default App1;