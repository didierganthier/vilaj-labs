import Image from 'next/image'
import personPlus from '../assets/icons/person-plus.svg'
import video from '../assets/icons/video.svg'
import inbox from '../assets/icons/inbox.svg'
import phone from '../assets/icons/phone.svg'
import help from '../assets/icons/help.svg'
import pin from '../assets/icons/pin.svg'
import at from '../assets/icons/at.svg'
import styles from '../styles/chatHeader.module.css'

const currentAccount = '0x6752e6D532dB26bD2E5074113a06B413A789CC74'

const ChatHeader = () => {
    return (
        <div className={styles.chatHeader}>
            <div className={styles.roomNameContainer}>
                <Image height={20} width={20} src={at} className={styles.svg} alt='' />
                <h3 className={styles.title}>Room Name</h3>
                <div className={styles.chatHeaderStatus} id='online' />
            </div>
            {currentAccount ? (
                <div className={styles.connectedWallet}>
                    <Image src='https://raw.githubusercontent.com/CleverProgrammers/discord-clone-blockchain/master/client/assets/eth.png' height={20} width={15} alt='ethLogo' />
                    <span className={styles.separator}>{'|'}</span>
                    {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
                </div>
            ) : (
                <div className={styles.connectWallet}>
                    Connect Wallet
                </div>
            )}
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