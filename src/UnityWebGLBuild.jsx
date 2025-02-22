import { Unity, useUnityContext } from "react-unity-webgl";
import { Fragment, useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Vortex } from "react-loader-spinner";
function UnityWebGLBuild({
  onNavigationClick,
  onWebGLBuildLoaded,
  onAudioData,
}) {
  const location = useLocation();
  const latestAudioData = useRef(onAudioData);
  const { unityProvider, sendMessage, loadingProgression, isLoaded, unload } =
    useUnityContext({
      loaderUrl: "/build/production/WebGL.loader.js",
      dataUrl: "/build/production/WebGL.data.br",
      frameworkUrl: "/build/production/WebGL.framework.js.br",
      codeUrl: "/build/production/WebGL.wasm.br",
      productName: "Jonathan Saravia - Work Portfolio",
      productVersion: "1.0.0",
      companyName: "Jonathan Saravia",
    });

  // useUnityContext({
  //   loaderUrl: "/build/development/WebGL.loader.js",
  //   dataUrl: "/build/development/WebGL.data",
  //   frameworkUrl: "/build/development/WebGL.framework.js",
  //   codeUrl: "/build/development/WebGL.wasm",
  //   productName: "Jonathan Saravia - Work Portfolio",
  //   productVersion: "1.0.0",
  //   companyName: "Jonathan Saravia",
  // });
  const navigate = useNavigate();

  const pathChanged = async () => {
    console.log("Unity App Closed.");
    await unload();
  };

  useEffect(
    function () {
      if (location.pathname === "/portfolio" && isLoaded === true) {
        pathChanged();
      }
    },
    [location]
  );

  useEffect(() => {}, [onAudioData]);

  const handleAudioDataChange = (data) => {
    if (isLoaded) {
      sendMessage("AudioPeer", "SetAudioData", data);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      onWebGLBuildLoaded();
      let animationFrameId;
      const logAudioData = () => {
        if (onAudioData.current) {
          latestAudioData.current = onAudioData.current;
          const stringData = onAudioData.current.join(",");
          handleAudioDataChange(stringData);
        }
        animationFrameId = requestAnimationFrame(logAudioData);
      };

      logAudioData();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isLoaded]);

  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  useEffect(() => {
    // Function to update the state based on the new devicePixelRatio
    const updateDevicePixelRatio = () => {
      setDevicePixelRatio(window.devicePixelRatio);
    };

    // Add a global resize event listener to detect pixel ratio changes
    window.addEventListener("resize", updateDevicePixelRatio);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("resize", updateDevicePixelRatio);
    };
  }, []); // Run only once when the component mounts

  return (
    <Fragment>
      {!isLoaded && (
        // <div style={{ position: "relative", width: "inherit" }}>
        <div
          style={{
            //position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "fill-content",
            minWidth: "500px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{ margin: "0px" }}
              wrapperClass="vortex-wrapper"
              colors={["cyan", "cyan", "cyan", "cyan", "cyan", "cyan"]}
            />
            <br />
            Loading Application...
            <br />
            {Math.round(loadingProgression * 100)}%
          </p>
        </div>
        //  </div>
      )}

      {
        <Unity
          unityProvider={unityProvider}
          style={{
            // border: isLoaded ? "1px solid #00ccff" : "",
            // borderRadius: "3px",
            visibility: isLoaded ? "visible" : "visible",
            width: "95vw",
            marginLeft: "1.5vw",
            marginRight: "1.5vw",
            maxHeight: "1000px",
            position: "absolute",
            top: "12.5vh",
            left: "1vw",
          }}
          devicePixelRatio={devicePixelRatio}
        />
      }
    </Fragment>
  );
}

export default UnityWebGLBuild;
