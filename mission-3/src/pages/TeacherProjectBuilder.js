import Header from "../components/Header";

export default function TeacherProjectBuilder() {
  return (
    <div className={styles.splitScreen}>
      <div className={styles.topPane}>{topPane}</div>
      <div className={styles.bottomPane}>{bottomPane}</div>
    </div>
  );
}
