// Landing page for the entire webb app, routes are in layout.tsx
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome</h1>
        This is your personal To Do list app to keep track of your busy days <br />
        You can add tasks and delete them as soon as you're done <br />
        <h2 className={styles.enjoyText}>Enjoy!</h2>
      </div>
      <div className={styles.imgContainer}>
        <img src="/todo.jpeg" alt="image" />
      </div>
    </div>
  );
}
