import React from 'react';
import * as styles from './channel_card.css';

function ChannelCard() {
  return (
    <div className={styles.container}>
      <div style={{ width: 64, height: 64, backgroundColor: 'darkgrey', borderRadius: 8 }} />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.title}>하루 TALK</p>
          <p className={styles.description}>공식 하루톡 서비스 채널</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ChannelCard;
