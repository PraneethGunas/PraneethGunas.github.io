import {
  GithubFilled,
  InstagramFilled,
  MailFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';

import { Layout } from 'antd';
import React from 'react';

const { Footer: AntdFooter } = Layout;

const Footer = () => {
  return (
    <AntdFooter className='footer'>
      <a
        href='https://twitter.com/PraneethGunas'
        target='_blank'
        rel='noreferrer'>
        <TwitterCircleFilled style={{ paddingInline: 5, fontSize: 20 }} />
      </a>
      <a
        href='https://github.com/PraneethGunas'
        target='_blank'
        rel='noreferrer'>
        <GithubFilled style={{ paddingInline: 5, fontSize: 20 }} />
      </a>
      <a
        href='https://www.instagram.com/praneeth_gunas/'
        target='_blank'
        rel='noreferrer'>
        <InstagramFilled style={{ paddingInline: 5, fontSize: 20 }} />
      </a>
      <a href='mailto:inboxpraneeth@gmail.com'>
        <MailFilled style={{ paddingInline: 5, fontSize: 20 }} />
      </a>
    </AntdFooter>
  );
};

export { Footer };
