import Meta from "../component/Meta";
import styles from "../styles/Contact.module.css";
const contact = () => {
  return (
    <div className={styles.body}>
      <Meta title="İletişim" />
      <div>
        <div className={styles.header}>İletişim</div>
        <div className={styles.informations}>
          <b>Numara :</b> +95551861011
        </div>
        <div className={styles.informations}>
          <b>E-Posta :</b> ccebioglu74@gmail.com
        </div>
        <input
          className={styles.textInput}
          placeholder="Write your messages"
          type="text"
          name="search"
        ></input>
        <button className={styles.button}>Send Messages </button>
      </div>
    </div>
  );
};
 
export default contact;
