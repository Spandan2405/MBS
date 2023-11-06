import Image from 'next/image'
import { HomeSlider } from './Components/HomeSlider'
import styles from  './page.module.css'

export default function Home() {
  return (
      <div>
        <main className={styles.main}>
        <HomeSlider />
        </main>
      </div>
  )
}
