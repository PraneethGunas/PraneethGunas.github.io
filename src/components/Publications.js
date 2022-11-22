import { Carousel, Typography } from 'antd';

import React from 'react';

const { Title } = Typography;

function Publications() {
  const onChange = currentSlide => {};

  return (
    <Carousel afterChange={onChange} style={{ height: '400%' }} swipeToSlide>
      <div>
        <a
          href='https://github.com/PraneethGunas/cktap-protocol-react-native'
          target='_blank'
          rel='noreferrer'>
          <Title
            level={4}
            // className={'about'}
            style={{ margin: 2, textAlign: 'center' }}>
            Open sourced cktap, A React Native library/sdk to enable easy
            communication with TAPSIGNER™ and SATSCARD™.
          </Title>
        </a>
      </div>
      <div>
        <a
          href=' https://github.com/PraneethGunas/ScrapHN'
          target='_blank'
          rel='noreferrer'>
          <Title level={4} style={{ margin: 2, textAlign: 'center' }}>
            Built a web-scrapper that pulls in top scored Ycombinator news right
            into your WhatsApp inbox everyday.
          </Title>
        </a>
      </div>
      <div>
        <Title level={4} style={{ margin: 2, textAlign: 'center' }}>
          A beta project on a Decentralised Music Application.
        </Title>
      </div>
      <div>
        <Title level={4} style={{ margin: 2, textAlign: 'center' }}>
          More to come...
        </Title>
      </div>
    </Carousel>
  );
}

export default Publications;
