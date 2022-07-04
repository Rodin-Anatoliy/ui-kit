import React from 'react';
import { Tooltip } from '../lib/components/Tooltip';
import { TempContainer, Title } from '../lib/styles/shared.styles';

const Tooltips: React.FC = () => (
  <>
    <TempContainer>
      <div style={{ margin: '10px' }}>
        <Tooltip text="test" position="top">
          <div style={{ height: '30px', background: 'red', padding: '8px' }}>
            top
          </div>
        </Tooltip>
      </div>
      <div style={{ margin: '10px' }}>
        <Tooltip text="test" position="bottom">
          <div style={{ height: '30px', background: 'red', padding: '8px' }}>
            bottom
          </div>
        </Tooltip>
      </div>
      <div style={{ margin: '10px' }}>
        <Tooltip text="test" position="left">
          <div style={{ height: '30px', background: 'red', padding: '8px' }}>
            left
          </div>
        </Tooltip>
      </div>
      <div style={{ margin: '10px' }}>
        <Tooltip text="test" position="right">
          <div style={{ height: '30px', background: 'red', padding: '8px' }}>
            right
          </div>
        </Tooltip>
      </div>
      <div style={{ margin: '10px' }}>
        <Tooltip text="test" position="top-left">
          <div style={{ height: '30px', background: 'red', padding: '8px' }}>
            top-left
          </div>
        </Tooltip>
      </div>
      <div style={{ margin: '10px' }}>
        <Tooltip text="test" position="top-right">
          <div style={{ height: '30px', background: 'red', padding: '8px' }}>
            top-right
          </div>
        </Tooltip>
      </div>
    </TempContainer>
  </>
);

export const TooltipsUIKit: React.FC = () => (
  <>
    <Title>Tooltips</Title>
    <Tooltips />
  </>
);
