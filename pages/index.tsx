import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Meta from '../component/Meta'

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.body}>
      <Meta title="Linux Home"/>
      <div className={styles.bodyGrid}>
        <Image
          src="/images/linux.jpg"
          alt="My Image"
          width={800}
          height={600}
          className={styles.linuxImg}
        />
        <div>
          <div className={styles.introduction}>Click for posts.</div>
          <div className={styles.introductionDetail}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, aut?</div>
          <div className={styles.button}>
            <button
              onClick={() => router.push(`/post`)}
              className={styles.buttonStyle}
            >
              Click for posts
            </button>
          </div>
        </div>
    
      </div>
      {/* <Image src="/images/linux.jpg" alt="My Image" width={500} height={300} />
      <div className={styles.introduction}>Postlar için tıklayınız.</div>
      <div className={styles.button} >
      <button onClick={() => router.push(`/post`)} className={styles.buttonStyle}>
        Click Me
      </button>
      </div> */}
    </div>
  );
}
