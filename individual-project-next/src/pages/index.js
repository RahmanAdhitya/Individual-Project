import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../component/NavBar';
import styles from '../styles/Home.module.css';
import HomePages from './homepage';

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePages />
    </div>
  );
}
