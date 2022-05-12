import React, { useContext } from "react";
import { DataContext } from "../App";
import { Container, HomeLayout } from "../styles/styles";

function Home() {
  const data = useContext(DataContext);

  

  return (
    <Container>
      <h1>Home</h1>
      <hr />
      <HomeLayout style={{ margin: "2rem 0" }}>
        <img
          style={{ borderRadius: "10px" }}
          src={data.basics?.picture}
          alt={data.basics?.name}
        />
        <ul style={{ listStyle: "none" }}>
          <li style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            <strong>{data.basics?.name}</strong>
          </li>
          <li style={{ fontSize: "1.2rem" }}>
            {data.basics?.headline}
          </li>
        </ul>
      </HomeLayout>
    </Container>
  );
}

export default Home;
