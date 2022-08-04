import styles from "../styles/Projects.module.css";
import { clones } from "../constants/constant";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <Head>
        <title>My Projects</title>
      </Head>
      <div className={styles.page}>
        <div className={styles.project}>
          <span>My Projects</span>
        </div>
        <div className={styles.projects}>
          <div>
            {clones.map(({ id, href, title, description, image }) => (
              <div className={styles.single_clone} key={id}>
                <Link href={href}>
                  <Image
                    target="_blank"
                    src={image}
                    alt="projects"
                    width={290}
                    height={180}
                  />
                </Link>
                <Link href={href}>
                  <h3 target="_blank"> {title}</h3>
                </Link>
                <hr color="rgb(87, 88, 86)" />
                <Link href={href}>
                  <a target="_blank">{description}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
