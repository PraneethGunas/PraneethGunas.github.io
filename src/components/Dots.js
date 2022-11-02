import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Dots = ({ position, title, right = true, left }) => {
  const dot = {
    height: 6,
    width: 6,
    borderRadius: 6,
    margin: 10,
    background: '#F4AE2B',
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        ...position,
      }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={dot} />
        <div style={dot} />
        <div style={dot} />
        <div style={dot} />
        {left && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '-50%',
              backgroundColor: '#F4AE2B',
            }}>
            <Title
              level={2}
              style={{ color: 'rgba(30, 33, 40, 1)', margin: 0 }}>
              {title}
            </Title>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={dot} />
        <div style={dot} />
        <div style={dot} />
        <div style={dot} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={dot} />
        <div style={dot} />
        <div style={dot} />
        <div style={dot} />
        {right && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#F4AE2B',
            }}>
            <Title
              level={2}
              style={{ color: 'rgba(30, 33, 40, 1)', margin: 0 }}>
              {title}
            </Title>
          </div>
        )}
      </div>
    </div>
  );
};

export { Dots };
