import { useContext } from 'react'
import styles from '../styles/messageForm.module.css'
import plusFilled from '../assets/icons/plus-filled.svg'
import sticker from '../assets/icons/sticker.svg'
import smiley from '../assets/icons/smiley.svg'
import gift from '../assets/icons/gift.svg'
import gif from '../assets/icons/gif.svg'
import Image from 'next/image'

const MessageForm = () => {
    return (
        <form
            className={styles.chatInputContainer}
        >
            <div className={styles.chatInputWrapper}>
                <div className={styles.svgContainer}>
                    <Image
                        height={25}
                        width={25}
                        src={plusFilled}
                        className={styles.svg}
                        alt='1'
                    />
                </div>
                <input
                    type='text'
                    className={styles.chatInput}
                />

                <div className={styles.svgContainer}>
                    <Image height={25} width={25} src={gift} className={styles.svg} alt='2' />
                </div>
                <div className={styles.svgContainer}>
                    <Image height={25} width={25} src={gif} className={styles.svg} alt='3' />
                </div>
                <div className={styles.svgContainer}>
                    <Image height={25} width={25} src={sticker} className={styles.svg} alt='4' />
                </div>
                <div className={styles.svgContainer}>
                    <Image height={25} width={25} src={smiley} className={styles.svg} alt='5' />
                </div>
            </div>
        </form>
    )
}

export default MessageForm