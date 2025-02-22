import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const [pageState, setPageState] = useState(0);

  const navigation = useNavigate();

  const contactPageButtonClick = () => {
    navigation("/contact");
  };

  const portfolioPageButtonClick = () => {
    navigation("/portfolio");
  };

  const aboutPageButtonClick = () => {
    navigation("/about");
  };

  return (
    <>
      <div>
        <div className="header1">
          <h1 style={{ margin: "0" }}>Jonathan Saravia</h1>
        </div>
        <hr
          style={{
            backgroundColor: "#00ccff",
            border: "none" /* Remove default border */,
            height: "1px" /* Set height of the line */,
            margin: "10px",
          }}
        />
        <div className="header2" style={{ padding: "10px" }}>
          <h2 style={{ margin: "0" }}>Game Dev • Full-Stack • Software Dev</h2>
        </div>

        {/* <div className="container1"> */}
        <div className="portrait-wrapper">
          <button
            className="portrait"
            style={{
              overflow: "hidden",
              borderStyle: "outset",
              width: "100%",
            }}
            onClick={portfolioPageButtonClick}
          >
            Portfolio
          </button>
        </div>
        {/* </div> */}
        <hr
          style={{
            backgroundColor: "#00ccff",
            border: "none" /* Remove default border */,
            height: "1px" /* Set height of the line */,
            margin: "10px",
          }}
        />
        <div className="container2">
          <div className="portrait-wrapper">
            <button
              className="portrait"
              style={{
                overflow: "hidden",
                borderStyle: "outset",
              }}
              onClick={aboutPageButtonClick}
            >
              About Me
            </button>
          </div>
          <div className="portrait-wrapper">
            <button
              className="portrait"
              style={{
                overflow: "hidden",
                borderStyle: "outset",
              }}
              onClick={contactPageButtonClick}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="footer">Created by Jonathan Saravia - 2024</div>
      </div>
    </>
  );
}
