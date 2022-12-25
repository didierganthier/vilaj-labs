import Image from 'next/image'
import personPlus from '../assets/icons/person-plus.svg'
import video from '../assets/icons/video.svg'
import inbox from '../assets/icons/inbox.svg'
import phone from '../assets/icons/phone.svg'
import help from '../assets/icons/help.svg'
import pin from '../assets/icons/pin.svg'
import at from '../assets/icons/at.svg'
import styles from '../styles/chatHeader.module.css'

const ChatHeader = () => {
    return (
        <div className={styles.chatHeader}>
            <div className={styles.roomNameContainer}>
                <Image height={20} width={20} src={at} className={styles.svg} alt='' />
                <h3 className={styles.title}>Room Name</h3>
                <div className={styles.chatHeaderStatus} id='online' />
            </div>
            <div className={styles.connectWallet}>
                Connect Wallet
            </div>
            <div className={styles.headerIconsContainer}>
                <div className={styles.headerItem}>
                    <Image
                        height={25}
                        width={25}
                        src={phone}
                        className={styles.svg}
                        alt=''
                    />
                </div>
                <div className={styles.headerItem}>
                    <Image
                        height={25}
                        width={25}
                        src={video}
                        className={styles.svg}
                        alt=''
                    />
                </div>
            </div>
            <div className={styles.headerItem}>
                <Image height={25} width={25} src={pin} className={styles.svg} alt='' />
            </div>
            <div className={styles.headerItem}>
                <Image
                    height={25}
                    width={25}
                    src={personPlus}
                    className={styles.svg}
                    alt=''
                />
            </div>
            <div className={styles.headerItem}>
                <input type='search' placeholder='Search' />
            </div>
            <div className={styles.headerItem}>
                <Image
                    height={25}
                    width={25}
                    src={inbox}
                    className={styles.svg}
                    alt=''
                />
            </div>
            <div className={styles.headerItem}>
                <Image
                    height={25}
                    width={25}
                    src={help}
                    className={styles.svg}
                    alt=''
                />
            </div>
        </div>
    )
}

export default ChatHeader