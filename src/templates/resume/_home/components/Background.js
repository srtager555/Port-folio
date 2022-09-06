import styles from "@sass/resumeStyles/home/home.module.sass";

export function Background() {
  return (
    <div className={styles.bgLetters}>
      <span className={styles.letter}>&&&&&&&&&&</span>
      <span className={styles.letter}>&&&&&&&&&&</span>
      <span className={styles.letter}>&&&&&&&&&&</span>
    </div>
  );
}
