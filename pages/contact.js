import Head from "next/head";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.contact}>
        <div className={styles.contact_page}>
          <h1>Contact Me</h1>
        </div>
        <form className={styles.form}>
          <div className={styles.input}>
            <input type="text" placeholder="Name" id="name" name="user_name" />
          </div>
          <div className={styles.input}>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="user_email"
            />
          </div>
          <div className={styles.input}>
            <textarea
              type="text"
              id="message"
              placeholder="Message for me"
              name="message"
            ></textarea>
          </div>
          <input type="submit" className={styles.button} />
        </form>
      </div>
    </>
  );
};

export default Contact;
