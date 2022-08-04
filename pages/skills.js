import Head from "next/head";
import styles from "../styles/Skills.module.css";
import Image from "next/image";

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
            <Image
              src="/images/html.png"
              width={150}
              height={150}
              alt="skills"
            />
            <span>HTML 5</span>
          </li>

          <li className={styles.logo}>
            <Image
              src="/images/css.png"
              width={150}
              height={150}
              alt="skills"
            />
            <span>CSS 3</span>
          </li>
          <li className={styles.logo}>
            <Image src="/images/js.png" width={150} height={150} alt="skills" />
            <span>JavaScript</span>
          </li>
          <li className={styles.logo}>
            <Image
              src="/images/reactjs.png"
              width={150}
              height={150}
              alt="skills"
            />
            <span>React JS</span>
          </li>
          <li className={styles.logo}>
            <Image
              src="/images/nextjs.png"
              width={150}
              height={150}
              alt="skills"
            />
            <span>Next JS</span>
          </li>
        </div>
      </div>
    </>
  );
};

export default Skills;
