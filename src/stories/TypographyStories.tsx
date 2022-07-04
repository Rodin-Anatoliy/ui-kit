import React from 'react';
import { TempContainer, Title } from '../lib/styles/shared.styles';
import { Typography } from '../lib/styles/typographyNames';

const TypographyExamples: React.FC = () => (
  <>
    <TempContainer style={{display: 'flex'}}>
      <div style={{ margin: '10px' }}>
        <p style={{ border: '1px solid red' }} className={Typography.heading1}></p>
      </div>
      <div style={{ margin: '10px' }}>
        <p style={{ border: '1px solid red' }} className={Typography.heading2}>Heading 2</p>
      </div>
      <div style={{ margin: '10px' }}>
        <p style={{ border: '1px solid red' }} className={Typography.heading3}>Heading 3</p>
      </div>
      <div style={{ margin: '10px' }}>
        <p style={{ border: '1px solid red' }} className={Typography.heading4}>Heading 4</p>
      </div>
      <div style={{ margin: '10px'}}>
        <p style={{ border: '1px solid red' }} className={Typography.heading5}>Heading 5</p>
      </div>
      <div style={{ margin: '10px'}}>
        <p style={{ border: '1px solid red' }} className={Typography.heading6}>Heading 6</p>
      </div>
      <div style={{ margin: '10px'}}>
        <p style={{ border: '1px solid red' }} className={Typography.input}>Input</p>
      </div>
      <div style={{ margin: '10px'}}>
        <p style={{ border: '1px solid red' }} className={Typography.label}>Label</p>
      </div>
      <div style={{ margin: '10px'}}>
        <p style={{ border: '1px solid red' }} className={Typography.caption}>Caption</p>
      </div>
      <div style={{ margin: '10px'}}>
        <p style={{ border: '1px solid red' }} className={Typography.helper}>Helper</p>
      </div>
      <div style={{ margin: '10px'}}>
        <p style={{ border: '1px solid red' }} className={Typography.hint}>Hint</p>
      </div>
    </TempContainer>
  </>
);

export const TypographyUIKit: React.FC = () => (
  <>
    <Title>Typography</Title>
    <TypographyExamples />
  </>
)
