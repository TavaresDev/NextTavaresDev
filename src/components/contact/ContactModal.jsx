import React, { useContext } from "react"
import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'
import styles from "./contactModal.module.css"

const ContactModal = ({ closeModal }) => {
    //i18n
    const router = useRouter()
    const { locale } = router
    const t = locale === 'en' ? en : pt

    return (
        <>

            <div className={styles.overlay}>
                <div className={styles.container}>
                    {/* <header>Th</header> */}

                    <strong>{t.modalTitle}</strong>
                    <p>{t.modalSubtitle}</p>

                    <button type="button" onClick={closeModal}>
                        <img src="/icons/close.svg" alt="Fechar Modal" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ContactModal
