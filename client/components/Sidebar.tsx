import { useRouter } from 'next/router';
import React, { useState } from 'react'
import styles from '../styles/sidebar.module.css'
import RoomAvatar from './RoomAvatar';

const dummyChannels = [
  {
    id: 1,
    name: 'general',
    avatar: 'https://raw.githubusercontent.com/CleverProgrammers/discord-clone-blockchain/master/client/assets/avatar-1.webp',
  },
  {
    id: 2,
    name: 'random',
    avatar: 'https://raw.githubusercontent.com/CleverProgrammers/discord-clone-blockchain/master/client/assets/avatar-2.png',
  },
  {
    id: 3,
    name: 'random',
    avatar: 'https://raw.githubusercontent.com/CleverProgrammers/discord-clone-blockchain/master/client/assets/avatar-3.webp',
  },
  {
    id: 4,
    name: 'random',
    avatar: 'https://raw.githubusercontent.com/CleverProgrammers/discord-clone-blockchain/master/client/assets/avatar-4.webp',
  },
]

const Sidebar = () => {
  const router = useRouter();
  const [channels, setChannels] = useState(dummyChannels);

  return (
    <div className={styles.wrapper}>
      {channels.map((channel, index) => (
        <RoomAvatar
          key={index}
          id={channel.id}
          name={channel.name}
          avatar={channel.avatar}
        />
      ))}
    </div>
  )
}

export default Sidebar