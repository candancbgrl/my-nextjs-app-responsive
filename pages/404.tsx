import styles from "../styles/404.module.css";
import Meta from "../component/Meta";
const ErrorPage = () => {
  return (
    <div className={styles.body}>
      <Meta title="Error" />
      <div className={styles.error}>
        <div className={styles.errorText}>404 Not Found Error</div>
        <hr className={styles.hrStyle}  />
        <br/>
        <div className={styles.errorMessages}>
          The page you were looking for could not be found
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
