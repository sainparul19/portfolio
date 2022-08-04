import Head from "next/head";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <>
      <Head>
        <title>My Skills</title>
      </Head>
      <div className={styles.new}>
        <h1>My Skills</h1>

        <div className={styles.container}>
          <li className={styles.logo}>
            <img src="/images/html.png" alt="" />
            <span>HTML 5</span>
          </li>

          <li className={styles.logo}>
            <img src="/images/css.png" alt="" />
            <span>CSS 3</span>
          </li>
          <li className={styles.logo}>
            <img src="/images/js.png" alt="" />
            <span>JavaScript</span>
          </li>
          <li className={styles.logo}>
            <img src="/images/reactjs.png" alt="" />
            <span>React JS</span>
          </li>
          <li className={styles.logo}>
            <img src="/images/nextjs.png" alt="" />
            <span>Next JS</span>
          </li>
        </div>
      </div>
    </>
  );
};

export default Skills;
