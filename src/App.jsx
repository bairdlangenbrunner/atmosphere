import { useEffect } from "react";
import ButtonToBottom from "./components/ButtonToBottom";
import ButtonToTop from "./components/ButtonToTop";
import Ruler from "./components/Ruler";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      // behavior: "smooth"
    });
  });

  return (
    <>
      <div className="atmosphere-and-ruler">
        <div className="ruler-div">
          <ButtonToTop />
          <ButtonToBottom />
          <Ruler />
        </div>
        <div className="atmosphere-div">
          <div className="thermosphere">
            {/* <p style={{ color: "white" }}>
              we'll stop here, but it keeps going...
            </p> */}
          </div>
          <div className="mesopause"></div>
          <div className="mesosphere"></div>
          <div className="stratopause"></div>
          <div className="stratosphere"></div>
          <div className="tropopause"></div>
          <div className="troposphere"></div>
        </div>
      </div>
    </>
  );
}

export default App;
