import React from "react";
import Container from "./../../components/Container";

const About = () => {
  return (
    <div>
      <Container>
        <h1 className="pl-0 p-7 text-2xl text-center md:text-start md:text-4xl tracking-tight">
          Welcome to<span className="text-2xl md:text-3xl text-lightSky"> Valentain Marriage Mediya</span>
          .
        </h1>

        <p className="text-sm leading-7 tracking-tight p-2 pb-10">
          Valentain Marriage Mediya is a Bangladeshi matrimonial site established to
          match married people. Members who register for marriage on this site
          are profiled. These profiles are mainly organized locally and
          collected from different regions of Bangladesh.
          <br />
          <br />
          Valentain Marriage Mediya is an aggregation platform, providing matrimonial
          matching services for organizations. On this site you can create your
          own profile and search other people&apos;s profiles to find a partner. With
          the help of the information provided on this site you can contact the
          partner candidates and match the desired partner in real life.
          <br />
          <br />
          Our primary goal is to find the right partner based on personal
          preferences and values, not based on expansiveness, love, and
          expansionism. Our site provides a safe and secure environment, so that
          you can continue your marriage search with confidence.
          <br />
          <br />
          We have skilled and professional team to manage Valentain Marriage Mediya, who
          help every member to find the right partner using complete choice and
          organizational technology. Our main objective is to help you and make
          the process of finding your partner convenient and organized.
          <br />
          <br />
          Hope you succeed in finding your partner here and enjoy the bliss of
          marriage in your real life. If you have any questions or complaints,
          you can contact us directly. Thanks for using our site.
        </p>
      </Container>
    </div>
  );
};

export default About;
