import styles from './BlogContainer.module.css'

export default function BlogContainer({ children }) {
  // return <div className={`container ${styles.containerWrapper} mx-auto px-5`}>{children}</div>
  return <div className={`${styles.headContainer} mx-auto px-5`}>{children}</div>
}
