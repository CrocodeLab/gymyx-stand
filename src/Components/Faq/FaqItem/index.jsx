"use client"

import styles from "./FaqItem.module.scss"
import { useState } from "react"

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`${styles["faq-item"]} ${isOpen ? styles["active"] : ""}`}>
      <div onClick={handleToggle} className={styles["faq-item__heading"]}>
        <p className={styles["faq-item__title"]}>{question}</p>
        <div className={styles["faq-item__icon"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="17"
            viewBox="0 0 32 17"
            fill="none"
          >
            <path
              d="M30 15L16.5751 1L2 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className={styles["faq-item__text"]}>{answer}</p>
    </div>
  )
}

export default FaqItem
