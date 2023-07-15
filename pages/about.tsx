import styles from "../styles/About.module.css";
import Meta from "../component/Meta";
import Link from 'next/link'

const about = () => {
  return (
    <div className={styles.body}>
      <Meta title="About" />
      <div>
        <div className={styles.header}>Hakkımızda</div>
        <div className={styles.informations}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          eveniet asperiores dolor explicabo. Consequatur amet quis laudantium.
          Veniam saepe ipsam, quod tenetur iure deserunt? Maiores assumenda
          accusamus deleniti tempora eligendi vitae, illo iste hic impedit ea,
          officia iure laborum odit commodi inventore accusantium. Iure ratione
          error commodi iusto repellendus? Esse.
        </div>
        <Link className={styles.button} href="/post" >Go To Posts </Link>
      </div>
    </div>
  );
};

export default about;
