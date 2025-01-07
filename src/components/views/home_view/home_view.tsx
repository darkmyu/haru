import React from 'react';
import * as styles from './home_view.css';
import ChannelCard from '@/components/channel/channel_card';

function HomeView() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.content}>
          <p className={styles.title}>🔥 인기 Talk</p>
          <div className={styles.wrapper}>
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.title}>🌟 최신 Talk</p>
          <div className={styles.wrapper}>
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
        </div>
      </section>
      <aside className={styles.aside}></aside>
    </div>
  );
}

export default HomeView;
