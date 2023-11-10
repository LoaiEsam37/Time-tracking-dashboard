import { Rubik } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/home.module.css";
import data from "@/data.json";
import { time } from "console";
// "@/data.json"
// [
//   {
//     "title": String,
//     "timeframes": {
//       "daily": {
//         "current": Number,
//         "previous": Number
//       },
//       "weekly": {
//         "current": Number,
//         "previous": Number
//       },
//       "monthly": {
//         "current": Number,
//         "previous": Number
//       }
//     }
//   },
//   ....
// ]

const rubik = Rubik({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function Home() {
  const [timeframe, setTimeframe] = useState<number>(1);
  return (
    <main className={`${styles.main} ${rubik.className}`}>
      <div className={styles.mainContainer}>
        <div className={styles.reportNav}>
          <div className={styles.header}>
            <div className={styles.icon}></div>
            <div>
              <span>Report for</span>
              <span className={styles.name}>Jeremy Robson</span>
            </div>
          </div>
          <div className={styles.nav}>
            <button
              onClick={() => setTimeframe(1)}
              className={`${timeframe === 1 ? styles.active : undefined}`}
            >
              Daily
            </button>
            <button
              onClick={() => setTimeframe(2)}
              className={`${timeframe === 2 ? styles.active : undefined}`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeframe(3)}
              className={`${timeframe === 3 ? styles.active : undefined}`}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className={styles.statsCardsContainer}>
          {data.map((item, key) => {
            return (
              <div className={styles.statsCard} key={key}>
                <div className={styles.container}>
                  <div className={styles.row}>
                    <span className={styles.categoryTitle}>{item.title}</span>
                    <div className={styles.menuToggler}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <span className={styles.timeframeContainer}>
                    <span className={styles.timeframe}>
                      {timeframe === 1
                        ? item.timeframes.daily.current
                        : timeframe === 2
                        ? item.timeframes.weekly.current
                        : item.timeframes.monthly.current}
                      hrs
                    </span>
                    <span className={styles.previousTimeframe}>
                      {timeframe === 1
                        ? "Yesterday -"
                        : timeframe === 2
                        ? "Last Week -"
                        : "Last Month -"}{" "}
                      {timeframe === 1
                        ? item.timeframes.daily.previous
                        : timeframe === 2
                        ? item.timeframes.weekly.previous
                        : item.timeframes.monthly.previous}
                      hrs
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
