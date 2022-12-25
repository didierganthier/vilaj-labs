import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import ConversationList from '../components/ConversationList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.main}>
        <ConversationList />
        <p>chat view</p>
      </div>
    </div>
  )
}
