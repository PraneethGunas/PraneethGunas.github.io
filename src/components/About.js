import { Layout, Typography } from 'antd';

import React from 'react';
const { Title } = Typography;
const { Content } = Layout;
const Anchor = ({ href, name }) => {
  return (
    <a
      href={href}
      style={{ textDecoration: 'underline' }}
      target='_blank'
      rel='noreferrer'>
      {name}
    </a>
  );
};

const About = () => {
  return (
    <Content>
      <Title level={4} style={{ width: '50vw', margin: 2 }}>
        Hello,
      </Title>
      <Title level={1} style={{ width: '50vw', marginTop: 12 }}>
        I'm{' '}
        <Anchor href='https://twitter.com/PraneethGunas' name={'Praneeeth'} />.
      </Title>
      <Title level={4} style={{ width: '50vw', margin: 2 }}>
        I am a React Native developer at{' '}
        <Anchor href='https://hexawallet.io/' name={'Hexa'} />, building a
        self-custody Bitcoin Wallet -{' '}
        <Anchor href='https://www.bitcoinkeeper.app/' name={' Keeper'} />,
        founded by{' '}
        <Anchor href='https://twitter.com/anant_tap' name={'Anant Tapadia'} />
        <br />
        {`I also lead the Hardware integrations team which involves building communication protocols between different hardwares (Signing Devices) and the mobile application.`}
      </Title>
    </Content>
  );
};

export { About };
