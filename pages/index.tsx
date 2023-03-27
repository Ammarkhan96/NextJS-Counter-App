import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Counter from './components/counter'



export default function Home() {
  return ( <div className={styles.container}>
     <h1 className='heading'>Counter App</h1>
     <Counter/>

  </div>
  )
}
