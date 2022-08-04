import styles from "../styles/About.module.css";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={styles.about}>
        <div className={styles.about_page}>
          <h1>About Me</h1>
        </div>
        <div className={styles.about_info}>
          <p>
            Hey! I'm Parul Sain, a UG student. I always love to explore new
            things and always eager to learn and experiment .
          </p>
          <p>
            I always enjoyed participating in my school and college curriculum
            activities. During such activities, I came across{" "}
            <span>WEB DEVELOPMENT</span> and understood the wide range of
            possibilities web development holds .
          </p>
          <p>
            For me, a website is all about experience. New technologies excite
            me and motivates me to explore more. Currently, I'm looking for
            internship in a fast paced startup.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
