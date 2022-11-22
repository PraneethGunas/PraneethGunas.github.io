import React from 'react';
import { Steps } from 'antd';
const { Step } = Steps;

const Feed = () => {
  return (
    <Steps current={4} direction={'vertical'} className={'about'}>
      <Step
        onStepClick={() => {
          window.open(
            'https://github.com/PraneethGunas/cktap-protocol-react-native',
            '_blank'
          );
        }}
        title='Open sourced cktap, A React Native library/sdk to enable easy
    communication with TAPSIGNER™ and SATSCARD™.'
        description='13th of September'
      />
      <Step title='Bagpacked to Manali' description='29th of October' />
      <Step
        onStepClick={() => {
          window.open(
            'https://play.google.com/store/apps/details?id=io.hexawallet.bitcoinkeeper',
            '_blank'
          );
        }}
        title='Beta release of the Keeper App'
        description='20th of October'
      />
      <Step
        onStepClick={() => {
          window.open(
            'https://www.meetup.com/bitcoinforindia/events/289132883/',
            '_blank'
          );
        }}
        title='Hosted a BTC meetup at Third Wave, Church st., Bangalore'
        description='22th of October'
      />
      <Step
        onStepClick={() => {
          window.open('https://www.conference.bitcoin4india.org/', '_blank');
        }}
        title='Catch me at B4I conference, Goa'
        description='5th of November'
      />
    </Steps>
  );
};

export { Feed };
