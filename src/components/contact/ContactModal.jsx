import React, { useContext } from "react"
// import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "./contactModal.module.css"

const ContactModal = ({closeModal}) => {

	return (
        <>

		<div className={styles.overlay}>
			<div className={styles.container}>
                {/* <header>Th</header> */}

                <strong>Thank you</strong>
                <p>We will be in touch soon</p>

                <button type="button" onClick={closeModal}> 
                    <img src="/icons/close.svg" alt="Fechar Modal"/>
                </button>
            </div>
		</div>
        </>
	)
}

export default ContactModal
