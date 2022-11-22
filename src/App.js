import './App.less';
import './override.css';
import './index.css';

import { Col, Layout, Row } from 'antd';
import React, { useState } from 'react';

import { About } from './components/About';
import { Dots } from './components/Dots';
import { Feed } from './components/Feed';
import { Footer } from './components/Footer';
import Publications from './components/Publications';

const { Sider, Content } = Layout;

const Screen = ({
  children,
  position,
  title,
  left = false,
  right = true,
  empty = false,
}) => {
  const [hideStyles, hideElement] = useState({});
  return (
    <Layout>
      <Sider
        className='section'
        breakpoint={'lg'}
        collapsedWidth={'0'}
        onCollapse={collapsed => {
          hideElement(collapsed ? { display: 'none' } : {});
        }}
        onDragExitCapture
        style={hideStyles}>
        {!empty && (
          <Dots position={position} title={title} left={left} right={right} />
        )}
      </Sider>
      <Content className='section center'>{children}</Content>
      <Sider
        className='section'
        breakpoint={'lg'}
        collapsedWidth={'0'}
        onCollapse={collapsed => {
          hideElement(collapsed ? { display: 'none' } : {});
        }}
        style={hideStyles}>
        {empty && (
          <Dots position={position} title={title} left={left} right={right} />
        )}
      </Sider>
    </Layout>
  );
};

const App = () => {
  return (
    <Layout className='App'>
      <Row>
        <Col span={24}>
          <Screen position={{ right: '10%', top: '20%' }} title={'ABOUT'}>
            <About />
          </Screen>
          <Screen
            position={{ left: '1 0%', top: '20%' }}
            title={'FEED'}
            empty
            left
            right={false}>
            <Feed />
          </Screen>
          <Screen
            position={{ right: '10%', top: '20%' }}
            title={'PUBLICATIONS'}>
            <Publications />
          </Screen>
          <Footer />
        </Col>
      </Row>
    </Layout>
  );
};

export default App;
