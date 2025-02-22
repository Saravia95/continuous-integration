import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UnityWebGLBuild from "../UnityWebGLBuild";
import AudioAnalyzer from "./AudioAnalyzer";

export function PortfolioPage() {
  const navigation = useNavigate();
  const audioData = useRef(null);
  const [audioFilePath, setAudioFilePath] = useState(null);
  const [sfxFilePath, setSfxFilePath] = useState(null);
  const [mute, setMute] = useState(true);
  const [muteSfx, setMuteSfx] = useState(true);
  const [isWebGLBuildLoaded, setIsWebGLBuildLoaded] = useState(false);

  const handleAudioData = (data) => {
    audioData.current = data;
    //console.log("Audio Data: ", audioData.current);
    // Pass the data to Unity WebGL component here
    //UnityWebGLBuild.sendAudioData(data);
    //sendAudioData();
  };

  // const sendAudioData = () => {
  //   //latestAudioData.current = data;

  //   //console.log(data);
  //   return audioData.current;
  // };

  const toggleMute = () => {
    setMute(!mute);
  };
  const toggleMuteSfx = () => {
    setMuteSfx(!muteSfx);
  };
  // const handleFilePathChange = (event) => {
  //   setAudioFilePath("./audio/Magical-Moments.mp3");
  // };
  // const handleSfxFilePathChange = (event) => {
  //   setSfxFilePath("./audio/rainSFX.mp3");
  // };

  const contactPageButtonClick = () => {
    navigation("/contact");
  };

  const homePageButtonClick = () => {
    navigation("/");
  };

  const aboutPageButtonClick = () => {
    navigation("/about");
  };

  const onNavigationClick = (page) => {
    navigation("/" + page);
  };

  const onBuildLoaded = () => {
    setIsWebGLBuildLoaded(true);
  };

  useEffect(() => {
    if (!audioFilePath && !sfxFilePath) {
      setSfxFilePath("./audio/rainSFX.mp3");
      setAudioFilePath("./audio/Purple-Dream.mp3");
      console.log("audio loaded!");
    }
  }, [isWebGLBuildLoaded]);

  return (
    <>
      <button
        style={{
          zIndex: 10,
          position: "absolute",
          top: "25px",
          left: "25px",
          margin: "0px",
          padding: "5px",
          borderStyle: "outset",
          border: "1px solid #00ccff",
          borderRadius: "3px",
        }}
        onClick={toggleMute}
      >
        {mute ? (
          <img
            src="/images/music-muted.svg"
            style={{
              margin: "auto",
              width: "64px",
              height: "64px",
            }}
          />
        ) : (
          <img
            src="/images/music.svg"
            style={{
              margin: "auto",
              width: "64px",
              height: "64px",
            }}
          />
        )}
      </button>

      <div>{mute ? "" : ""}</div>

      <button
        style={{
          zIndex: 10,
          position: "absolute",
          top: "25px",
          right: "25px",
          margin: "0px",
          padding: "5px",
          border: "1px solid #00ccff",
          borderRadius: "3px",
          borderStyle: "outset",
        }}
        onClick={toggleMuteSfx}
      >
        {muteSfx ? (
          <img
            src="/images/storm-fx-muted.svg"
            style={{
              margin: "auto",
              width: "64px",
              height: "64px",
            }}
          />
        ) : (
          <img
            src="/images/storm-fx.svg"
            style={{
              margin: "auto",
              width: "64px",
              height: "64px",
            }}
          />
        )}
      </button>
      <AudioAnalyzer
        audioFilePath={audioFilePath}
        sfxFilePath={sfxFilePath}
        onAudioData={handleAudioData}
        mute={mute}
        muteSfx={muteSfx}
      />
      <div
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          className="container2"
          style={{
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "fill-content",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="portrait-wrapper" style={{ marginLeft: "auto" }}>
            <button
              className="portrait"
              style={{
                overflow: "hidden",
                borderStyle: "outset",
                width: "20vw",
                minWidth: "125px",
              }}
              onClick={homePageButtonClick}
            >
              Home
            </button>
          </div>
          <div className="portrait-wrapper">
            <button
              className="portrait"
              style={{
                overflow: "hidden",
                borderStyle: "outset",
                width: "20vw",
                minWidth: "125px",
              }}
              onClick={aboutPageButtonClick}
            >
              About
            </button>
          </div>

          <div className="portrait-wrapper" style={{ marginRight: "auto" }}>
            <button
              className="portrait"
              style={{
                overflow: "hidden",
                borderStyle: "outset",
                width: "20vw",
                minWidth: "125px",
              }}
              onClick={contactPageButtonClick}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <div>
        <UnityWebGLBuild
          onNavigationClick={onNavigationClick}
          onWebGLBuildLoaded={onBuildLoaded}
          onAudioData={audioData}
        />
      </div>
    </>
  );
}
