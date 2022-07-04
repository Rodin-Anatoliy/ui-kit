import React, { useState } from 'react';
import { TempContainer, Title } from '../lib/styles/shared.styles';
import { Tag } from '../lib/components/Tag';
import { Counter } from '../lib/components/Tag';
import { ProgressBar } from '../lib/components/Tag';

export const DefaultTag = () => (
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <h4 style={{ paddingLeft: '0.8rem' }}>Status tags</h4>
    <div>
      <Tag colorType="primary" >
        primary
      </Tag>
      <Tag colorType="in-progress">
        in progress
      </Tag>
      <Tag colorType="accent" >
        accent
      </Tag>
      <Tag colorType="negative" >
        negative
      </Tag>
      <Tag colorType="positive" >
        positive
      </Tag>
      <Tag colorType="white" >
        white
      </Tag>
      <Tag colorType="black" >
        black
      </Tag>
      <Tag>
        default
      </Tag>
      <Tag backgroundColor='red' borderColor='blue' contentColor='white'>
        custom
      </Tag>
    </div>

    <div>
      <Tag type='half-opacity' colorType="primary" >
        primary
      </Tag>
      <Tag  type='half-opacity' colorType="in-progress">
        in progress
      </Tag>
      <Tag  type='half-opacity' colorType="accent" >
        accent
      </Tag>
      <Tag  type='half-opacity' colorType="negative" >
        negative
      </Tag>
      <Tag  type='half-opacity' colorType="positive" >
        positive
      </Tag>
      <Tag  type='half-opacity' colorType="white" >
        white
      </Tag>
      <Tag  type='half-opacity' colorType="black" >
        black
      </Tag>
      <Tag type='half-opacity'>
        default
      </Tag>
      <Tag backgroundColor='red' borderColor='blue' contentColor='white'>
        custom
      </Tag>
    </div>

    <div>
      <Tag type='outlined' colorType="primary" >
        primary
      </Tag>
      <Tag  type='outlined' colorType="in-progress">
        in progress
      </Tag>
      <Tag  type='outlined' colorType="accent" >
        accent
      </Tag>
      <Tag  type='outlined' colorType="negative" >
        negative
      </Tag>
      <Tag  type='outlined' colorType="positive" >
        positive
      </Tag>
      <Tag  type='outlined' colorType="white" >
        white
      </Tag>
      <Tag  type='outlined' colorType="black" >
        black
      </Tag>
      <Tag  type='outlined'>
        default
      </Tag>
      <Tag backgroundColor='red' borderColor='blue' contentColor='white'>
        custom
      </Tag>
    </div>

    <div>
      <Tag type='colored-content' colorType='primary'>
        primary
      </Tag>
      <Tag  type='colored-content' colorType="in-progress">
        in progress
      </Tag>
      <Tag type='colored-content' colorType="accent" >
        accent
      </Tag>
      <Tag type='colored-content' colorType="negative" >
        negative
      </Tag>
      <Tag type='colored-content' colorType="positive" >
        positive
      </Tag>
      <Tag type='colored-content' colorType="white" >
        white
      </Tag>
      <Tag type='colored-content' colorType="black" >
        black
      </Tag>
      <Tag type='colored-content'>
        default
      </Tag>
      <Tag backgroundColor='red' borderColor='blue' contentColor='white'>
        custom
      </Tag>
    </div>

    <div>
      <Tag type='no-fill' colorType='primary'>
        primary
      </Tag>
      <Tag  type='no-fill' colorType="in-progress">
        in progress
      </Tag>
      <Tag type='no-fill' colorType="accent" >
        accent
      </Tag>
      <Tag type='no-fill' colorType="negative" >
        negative
      </Tag>
      <Tag type='no-fill' colorType="positive" >
        positive
      </Tag>
      <Tag type='no-fill' colorType="white" >
        white
      </Tag>
      <Tag type='no-fill' colorType="black" >
        black
      </Tag>
      <Tag type='no-fill'>
        default
      </Tag>
      <Tag backgroundColor='red' borderColor='blue' contentColor='white'>
        custom
      </Tag>
    </div>
  </div>
);

export const FilterTag = () => (
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <h4 style={{ paddingLeft: '0.8rem' }}>Filter tags</h4>
    <div>
      <Tag isFilter colorType="primary" >
        primary
      </Tag>
    </div>
  </div>
);

export const CounterTag = () => (
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <h4 style={{ paddingLeft: '0.8rem' }}>Counter tags</h4>
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Counter type='notification' value='2' total='10' text='text' />
      <Counter type='notification-mini' value='2' total='10' text='text' />
      <Counter type='notification' value='2' text='text' />
      <Counter type='attachment' value='2'  onIconClick={()=> console.log('11')}/>
      <Counter type='task-progress' value='2' total='5' />
      <Counter type='symbol' value='902' />
      <Counter text='XXX' />
    </div>

  </div>
);

export const ProgressBarTag = () => {
  const [value, setValue] = useState(12.5);
  return <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
    <h4 style={{ paddingLeft: '0.8rem' }}>Progress bar</h4>
    <div>
      <ProgressBar onClick={() => setValue(60)} colorType='primary' value={value} total={87} style={{cursor: 'pointer'}} />
    </div>
  </div>
};

const TagUIKit = () => (
  <>
    <Title>Tag</Title>
    <TempContainer style={{ display: 'flex', flexDirection: 'column' }}>
      <ProgressBarTag />
      <CounterTag />
      <DefaultTag />
      <FilterTag />
    </TempContainer>
  </>
);

export { TagUIKit };
