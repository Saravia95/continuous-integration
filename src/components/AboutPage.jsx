import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

export function AboutPage() {
  const navigation = useNavigate();
  const [language, setLanguage] = useState("Language");
  const [development, setDevelopment] = useState("Development");

  // const [selectedLangIconSize, setSelectedLangIconSize] = useState("2.5vw");
  // const [selectedDevIconSize, setSelectedDevIconSize] = useState("2vw");

  const [languageIconSize, setLanguageIconSize] = useState("4vw");
  const [developmentIconSize, setDevelopmentIconSize] = useState("3.5vw");

  const languageIcons = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg",
      name: "C#",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg",
      name: "C++",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
      name: "Java",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name: "Javascript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      name: "Typescript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      name: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      name: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
      name: "JSON",
    },
  ];
  const developmentIcons = [
    {
      name: "Unity",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
    },
    {
      name: "React.JS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "React Router",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
    },
    {
      name: "Netlify",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
    },
    {
      name: "Three.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
    },
    {
      name: "Android Studio",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    },
    {
      name: "Atom",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/atom/atom-original.svg",
    },
    {
      name: "Axios",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
    },
    {
      name: "Bitbucket",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
    },
    {
      name: "Eclipse",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
    },
    {
      name: "Dotnet Core",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      name: "Express.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "Gradle",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
    },
    {
      name: "Jira",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    },
    {
      name: "JQuery",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
    },
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "NGINX",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
    },
    {
      name: "NPM",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    },
    {
      name: "Postman",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "Socket.io",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    },
    {
      name: "Sourcetree",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sourcetree/sourcetree-original.svg",
    },
    {
      name: "SQL Developer",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg",
    },
    {
      name: "SSH",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original.svg",
    },
    {
      name: "Supabase",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      name: "Tailwind CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    },
    {
      name: "Tomcat",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg",
    },
    {
      name: "Trello",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg",
    },
    {
      name: "Vercel",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
    },
    {
      name: "Visual Studio",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
    },
    {
      name: "VS Code",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Confluence",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg",
    },
  ];

  const contactPageButtonClick = () => {
    navigation("/contact");
  };

  const homePageButtonClick = () => {
    navigation("/");
  };

  const portfolioPageButtonClick = () => {
    navigation("/portfolio");
  };

  const languageNameExit = () => {
    setLanguage("Language");

    console.log(language);
  };

  const developmentNameExit = () => {
    setDevelopment("Development");

    console.log(development);
  };

  return (
    <>
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
              onClick={portfolioPageButtonClick}
            >
              Portfolio
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

        <div>
          <div
            style={{
              backgroundColor: "#0c0c0c",
              borderStyle: "inset",
              borderColor: "#00ccff",
              borderRadius: "12px",
              width: "auto",
              maxWidth: "95%",
              height: "78vh",
              marginTop: "1%",
              marginBottom: "0%",
              marginRight: "auto",
              marginLeft: "auto",
              maxHeight: "80vh",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                textShadow: "3px 3px #000000",
                fontSize: "30px",
              }}
            >
              Jonathan Saravia
            </h1>
            <hr
              style={{
                backgroundColor: "#00ccff",
                border: "none" /* Remove default border */,
                height: "1px" /* Set height of the line */,
                margin: "10px",
                marginLeft: "100px",
                marginRight: "100px",
                alignItems: "center",
              }}
            />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1.5%",
                }}
              >
                <img
                  src="/images/portfolio-photo.png"
                  style={{
                    //margin: "30px",
                    width: "35vh ",
                    aspectRatio: "1/1",
                    display: "flex",
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginBottom: "0px",
                    minHeight: "128px",
                    minWidth: "128px",
                  }}
                />
                <div
                  style={{
                    marginRight: "auto",
                    marginLeft: "auto",
                    width: "inherit",
                  }}
                >
                  <div
                    style={{
                      margin: "2vh",
                      textAlign: "center",
                      alignItems: "center",
                      fontSize: "15px",
                      width: "inherit",
                    }}
                  >
                    <span
                      style={{
                        color: language !== "Language" ? "cyan" : "white",
                      }}
                    >
                      {language}
                    </span>{" "}
                    Experience
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto auto auto",
                      gridGap: "5px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {languageIcons.map((icon, index) => (
                      <img
                        key={index}
                        src={icon.src}
                        alt={icon.name}
                        style={{
                          height: languageIconSize,
                          width: languageIconSize,
                          filter:
                            language !== icon.name
                              ? "saturate(0)"
                              : "saturate(1)",
                          alignItems: "center",
                          marginRight: "auto",
                          marginLeft: "auto",
                        }}
                        onMouseEnter={() => {
                          setLanguage(icon.name);
                        }}
                        onMouseLeave={languageNameExit}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1.5%",
                }}
              >
                <h3
                  style={{
                    marginRight: "auto",
                    marginLeft: "auto",
                    textAlign: "center",
                    width: "inherit",
                  }}
                >
                  <span
                    style={{
                      color: development !== "Development" ? "cyan" : "white",
                    }}
                  >
                    {development}
                  </span>{" "}
                  Experience
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                    gridGap: "5px",
                    justifyContent: "center",
                    height: "100%",
                    alignItems: "center",
                    marginLeft: "1.5%",
                  }}
                >
                  {developmentIcons.map((icon, index) => (
                    <img
                      key={index}
                      src={icon.src}
                      alt={icon.name}
                      style={{
                        height: developmentIconSize,
                        width: developmentIconSize,
                        filter:
                          development !== icon.name
                            ? "saturate(0)"
                            : "saturate(1)",
                        alignItems: "center",
                        marginRight: "auto",
                        marginLeft: "auto",
                      }}
                      onMouseEnter={() => setDevelopment(icon.name)}
                      onMouseLeave={developmentNameExit}
                    />
                  ))}
                </div>

                <div
                  style={{
                    width: "auto",
                    margin: "1.5%",
                    height: "auto",
                    lineHeight: "40px",
                    fontSize: "23px",
                    backgroundColor: "black",
                    border: "5px grey inset",
                    maxHeight: "25vh",
                    overflow: "auto",
                    //display: "flex",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      lineHeight: "1.5cm",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                      marginRight: "30px",
                      paddingRight: "10px",
                      paddingLeft: "20px",
                      backgroundColor: "#002025",
                      borderRadius: "0 20px 20px 0",
                    }}
                  >
                    I am a game developer with a strong foundation in Unity and
                    C#, experienced in all facets of game development. My
                    journey has led me through various projects, enhancing my
                    skills in design, programming, and problem-solving.
                  </p>

                  <p
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      lineHeight: "1.5cm",
                      textIndent: "50px",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                      paddingRight: "20px",
                      paddingLeft: "20px",
                      marginLeft: "30px",
                      backgroundColor: "#0e0e0e",
                      borderRadius: "20px 0 0 20px",
                    }}
                  >
                    During my 16-month co-op, I expanded my expertise into web
                    development, utilizing React, TypeScript, Three.js, and
                    React Three Fiber to create dynamic web applications. This
                    experience allowed me to develop a solid understanding of
                    user interface design and client-side programming.
                  </p>

                  <p
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      lineHeight: "1.5cm",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                      marginRight: "30px",
                      paddingRight: "10px",
                      paddingLeft: "20px",
                      backgroundColor: "#002025",
                      borderRadius: "0 20px 20px 0",
                    }}
                  >
                    While my passion lies in game development, I am open to
                    opportunities in web and software development, where I can
                    leverage my skills and continue to grow. I thrive in
                    collaborative environments and am always eager to learn new
                    technologies and methodologies to enhance my work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
