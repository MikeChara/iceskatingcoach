import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ImageScroll from "@/components/ImageScroll";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Chantelle A'Court Ice Skating</title>
        <meta
          name="Ice Skating Coach"
          content="Bracknell and Slough Ice Rinks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Chantelle A'Court Ice Skating</p>
          <div>
            <p>Available at Slough & Bracknell Ice Rinks</p>
          </div>
        </div>

        <span className={styles.chantelle}>
          <Image
            className={styles.chantelle}
            src="/chantelle1.jpg"
            alt="chantelle1"
            width={220}
            height={450}
          />
          <Image
            className={styles.chantelle}
            src="/chantelle3.jpg"
            alt="chantelle3"
            width={220}
            height={450}
          />
          <Image
            className={styles.chantelle}
            src="/chantelle2.jpg"
            alt="chantelle2"
            width={220}
            height={450}
          />
        </span>
        <div className={styles.grid}>
          <a
            href="/about"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>About Chantelle</h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="/coaching"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>Coaching</h2>
            <p className={inter.className}>
              What can I learn and how much does it cost?
            </p>
          </a>

          <a
            href="/booklessons"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>Book Lessons</h2>
            <p className={inter.className}>
              Sign up and sign in here to book online lessons via our calender
              here
            </p>
          </a>

          <a
            href="/contact"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>Contact Chantelle</h2>
            <p className={inter.className}>
              I'll try my best to get back to you within 2 days
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
