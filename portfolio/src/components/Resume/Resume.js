import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Ausbildung", logoSrc: "education.svg" },
    { label: "Letzte Arbeitserfahrung", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projekte", logoSrc: "projects.svg" },
    { label: "Interessen", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 70 },
    { skill: "HTML / CSS", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Typescript", ratingPercentage: 35 },
    { skill: "Angular", ratingPercentage: 45 },
    { skill: "SQL", ratingPercentage: 40 },
    { skill: "Mongo DB", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "React JS Portfolio Website ",
      duration: { fromDate: "10.2022", toDate: "12.2022" },
      description:
        "React-Portfolio-Website zum alle wichtige Informationen über meine Persönlichkeit an einem Ort darstellen.",
      subHeading: "Angewendete Technologie: React JS, Bootsrap",
    },
    {
      title: "Discover Bern ",
      duration: { fromDate: "04.2022", toDate: "derzeitig" },
      description:
        "Ein interesantes Projekt für die Berner Fachhochschule, der dem User erlaubt einen QR-Code scannen und eine Information der angezeigte Denkmalen lesen.",
      subHeading: "Angewendete Technologie: Typescript, Angular, Firebase",
    },
    {
      title: "e-form.sg ",
      duration: { fromDate: "04.2022", toDate: "derzeitig" },
      description:
        "Webplatform, die studiumbegleitend für Steuerverwaltung der Kanton St.Gallen mit hilfe von Wordpress entwickelt wird und den steuerpflichtigen Personen eine digitale Formular- und Gesuchabgabe ermöglicht.",
      subHeading: "Angewendete Technologie:  Wordpress, HTML.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Berner Fachhochschule"}
        subHeading={"i.A. B.Sc. Wirtschaftsinformatik"}
        fromDate={"09.2020"}
        toDate={"derzeitig"}
      />

      <ResumeHeading
        heading={"Interkantonale Sicherheits- Ausbildung"}
        subHeading={"Fachkunde, Branchenkunde, Sozialkompetenz"}
        fromDate={"05.2017"}
        toDate={"05.2017"}
      />
      <ResumeHeading
        heading={"Gymnasiale Maturität "}
        subHeading={"Schwerpunktfach: Wirtschaft & Recht"}
        fromDate={"08.2013"}
        toDate={"07.2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"IT Consultant"}
          subHeading={"Digitalization & Innovation Services"}
          fromDate={"11.2022"}
          toDate={"befristet"}
        />
        {/*         <div className="experience-description">
          <span className="resume-description-text">
            Aktuell arbeite an der Projekten
          </span>
        </div> */}
        <div className="experience-description">
          <span className="resume-description-text">
            • Steuerung, Verwaltung sowie Programmierung ERP-System
          </span>
          <br />
          <span className="resume-description-text">
            • Umsetzung der Cloud Projekten
          </span>
          <br />
        </div>
      </div>
      <br />

      <div className="experience-container">
        <ResumeHeading
          heading={"Weiterbildung & Stellensuche"}
          subHeading={
            "Stellensuche im Bereich: IT Consulting /  Software Entwicklung"
          }
          fromDate={"04.2022"}
          toDate={"10.2022"}
        />
      </div>
      <br />
      <div className="experience-container">
        <ResumeHeading
          heading={"IT Teamleiter"}
          subHeading={"Projekt Management & Wartung Infrastruktur"}
          fromDate={"11.2021"}
          toDate={"04.2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            • Umsetzung IT Betriebsbezogene Projekte
          </span>
          <br />
          <span className="resume-description-text">
            • Wartung der Infrastruktur
          </span>
          <br />
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Schwimmen" />
      <ResumeHeading heading="Sound Design" />
      <ResumeHeading heading="Outdoor Aktivitäten" />
      <ResumeHeading heading="Lesen" />
      <ResumeHeading heading="Drohne pilotieren" />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Lebenslauf"} subHeading={"Über mich"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
