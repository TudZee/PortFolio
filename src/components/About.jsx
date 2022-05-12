import React, { useContext } from "react";
import { Container, SkillsCom } from "../styles/styles";
import { DataContext } from "../App";

function About() {
  const data = useContext(DataContext);

  return (
    <Container>
      <h1>About</h1>
      <hr />
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <img
          src={data.basics?.picture}
          width="200px"
          style={{ borderRadius: "100%" }}
          alt=""
        />
        <ul style={{ listStyle: "none" }}>
          <li style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            <strong>Name</strong> : {data.basics?.name}
          </li>

          {data.education?.map((val, idx) => (
            <li key={idx} style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              <strong>Education</strong> : {val.institution}
            </li>
          ))}

          <li>From {data.basics?.region}</li>
        </ul>
        <hr />

        <h3>My Skills</h3>
        <SkillsCom>
          {data.skills?.map((val, idx) => (
            <li key={idx} style={{ marginBottom: ".5rem" }}>
              <strong>{val.name}</strong>
              <br />
              Level: {val.level}
            </li>
          ))}
        </SkillsCom>
        <SkillsCom>
          {data.languages?.map((val, idx) => (
            <li key={idx} style={{ marginBottom: ".5rem" }}>
              <strong>{val.language}</strong>
              <br />
              Level: {val.fluency}
            </li>
          ))}
        </SkillsCom>
        <strong>{data.basics?.headline}</strong>
      </div>
    </Container>
  );
}

export default About;
