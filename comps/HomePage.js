import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.front}>
      <div className={styles.inner}>
        <div className={styles.upper_line}>
          <span>Hy! I {} Am</span>
          <div className={styles.lower_line}>
            <span>Parul Sain</span>
          </div>
          <div className={styles.bottom_line}>
            <span>:- FrontEnd Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
