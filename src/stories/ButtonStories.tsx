import React from 'react';
import { Subtitle, TempContainer, Title } from '../lib/styles/shared.styles';
import { Button } from '../lib/components/Button';
import { IconNames } from '../lib/components/Icon/Icon';
import { Card } from '../lib/components/Widgets/Card';

const click = () => console.log('clicked');

export const WithText = () => (
  <>
    <TempContainer>
      <Button onClick={click} isBold={true} colorType="primary">filled</Button>
      <Button onClick={click} isBold={true} colorType="primary" btnType="outlined">
        outlined
      </Button>
      <Button onClick={click} isBold={true} colorType="primary" btnType="half-opacity">
        half-opacity
      </Button>
      <Button onClick={click} colorType="primary" btnType="colored-content">
        colored content
      </Button>
      <Button onClick={click} colorType="primary" btnType="no-fill">
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button onClick={click} colorType="in-progress">filled</Button>
      <Button onClick={click} colorType="in-progress" btnType="outlined">
        outlined
      </Button>
      <Button onClick={click} colorType="in-progress" btnType="half-opacity">
        half-opacity
      </Button>
      <Button onClick={click} colorType="in-progress" btnType="colored-content">
        colored content
      </Button>
      <Button onClick={click} colorType="in-progress" btnType="no-fill">
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button onClick={click} colorType="negative" size="medium">
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="negative"
        size="medium"
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="negative"
        size="medium"
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="negative"
        size="medium"
      >
        colored content
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="negative"
        size="medium"
      >
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button onClick={click} colorType="positive" size="small">
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="positive"
        size="small"
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="positive"
        size="small"
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="positive"
        size="small"
      >
        colored content
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="positive"
        size="small"
      >
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button onClick={click} colorType="accent">
        filled
      </Button>
      <Button onClick={click} btnType="outlined" colorType="accent">
        outlined
      </Button>
      <Button onClick={click} btnType="half-opacity" colorType="accent">
        half-opacity
      </Button>
      <Button onClick={click} btnType="colored-content" colorType="accent">
        colored content
      </Button>
      <Button onClick={click} btnType="no-fill" colorType="accent">
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button onClick={click} colorType="white" size="medium">
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="white"
        size="medium"
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="white"
        size="medium"
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="white"
        size="medium"
      >
        colored content
      </Button>
      <Button onClick={click} btnType="no-fill" colorType="white" size="medium">
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button onClick={click} colorType="black" size="small">
        filled
      </Button>
      <Button onClick={click} btnType="outlined" colorType="black" size="small">
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="black"
        size="small"
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="black"
        size="small"
      >
        colored content
      </Button>
      <Button onClick={click} btnType="no-fill" colorType="black" size="small">
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button onClick={click}>
        filled
      </Button>
      <Button onClick={click} btnType="outlined">
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="colored-content"
      >
        colored content
      </Button>
      <Button onClick={click} btnType="no-fill">
        no-fill
      </Button>
    </TempContainer>
  </>
);

export const WithStartIcon = () => (
  <>
    <TempContainer>
      <Button colorType="primary" onClick={click} startIcon={IconNames.test}>
        filled
      </Button>
      <Button colorType="primary" onClick={click} btnType="outlined" startIcon={IconNames.test}>
        outlined
      </Button>
      <Button colorType="primary" onClick={click} btnType="half-opacity" startIcon={IconNames.test}>
        half-opacity
      </Button>
      <Button colorType="primary" onClick={click} btnType="colored-content" startIcon={IconNames.test}>
        colored content
      </Button>
      <Button colorType="primary" onClick={click} btnType="no-fill" startIcon={IconNames.test}>
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="negative"
        size="medium"
        startIcon={IconNames.test}
      >
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="negative"
        size="medium"
        startIcon={IconNames.test}
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="negative"
        size="medium"
        startIcon={IconNames.test}
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="negative"
        size="medium"
        startIcon={IconNames.test}
      >
        colored content
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="negative"
        size="medium"
        startIcon={IconNames.test}
      >
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="positive"
        size="small"
        startIcon={IconNames.test}
      >
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="positive"
        size="small"
        startIcon={IconNames.test}
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="positive"
        size="small"
        startIcon={IconNames.test}
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="positive"
        size="small"
        startIcon={IconNames.test}
      >
        colored content
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="positive"
        size="small"
        startIcon={IconNames.test}
      >
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button onClick={click} colorType="accent" startIcon={IconNames.test}>
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="accent"
        startIcon={IconNames.test}
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="accent"
        startIcon={IconNames.test}
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="accent"
        startIcon={IconNames.test}
      >
        colored content
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="accent"
        startIcon={IconNames.test}
      >
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="white"
        size="medium"
        startIcon={IconNames.test}
      >
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="white"
        size="medium"
        startIcon={IconNames.test}
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="white"
        size="medium"
        startIcon={IconNames.test}
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="white"
        size="medium"
        startIcon={IconNames.test}
      >
        colored content
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="white"
        size="medium"
        startIcon={IconNames.test}
      >
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="black"
        size="small"
        startIcon={IconNames.test}
      >
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="black"
        size="small"
        startIcon={IconNames.test}
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="black"
        size="small"
        startIcon={IconNames.test}
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="black"
        size="small"
        startIcon={IconNames.test}
      >
        colored content
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="black"
        size="small"
        startIcon={IconNames.test}
      >
        no-fill
      </Button>
    </TempContainer>
  </>
);

export const WithEndIcon = () => (
  <TempContainer>
    <Button colorType="primary" onClick={click} endIcon={IconNames.test} btnType="filled">
      Click me
    </Button>
  </TempContainer>
);

export const IconOnly = () => (
  <>
    <TempContainer>
      <Button colorType="primary" onClick={click} startIcon={IconNames.test}></Button>
      <Button colorType="primary" onClick={click} btnType="outlined" startIcon={IconNames.test}></Button>
      <Button colorType="primary" onClick={click} btnType="half-opacity" startIcon={IconNames.test}></Button>
      <Button colorType="primary" onClick={click} btnType="colored-content" startIcon={IconNames.test}></Button>
      <Button colorType="primary" onClick={click} btnType="no-fill" startIcon={IconNames.test}></Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="negative"
        size="medium"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="negative"
        size="medium"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="negative"
        size="medium"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="negative"
        size="medium"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="negative"
        size="medium"
        startIcon={IconNames.test}
      ></Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="positive"
        size="small"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="positive"
        size="small"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="positive"
        size="small"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="positive"
        size="small"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="positive"
        size="small"
        startIcon={IconNames.test}
      ></Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="accent"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="accent"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="accent"
        startIcon={IconNames.test}
      ></Button>
            <Button
        onClick={click}
        btnType="colored-content"
        colorType="accent"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="accent"
        startIcon={IconNames.test}
      ></Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="white"
        size="medium"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="white"
        size="medium"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="white"
        size="medium"
        startIcon={IconNames.test}
      ></Button>
            <Button
        onClick={click}
        btnType="colored-content"
        colorType="white"
        size="medium"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="white"
        size="medium"
        startIcon={IconNames.test}
      ></Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="black"
        size="small"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="black"
        size="small"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="black"
        size="small"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="colored-content"
        colorType="black"
        size="small"
        startIcon={IconNames.test}
      ></Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="black"
        size="small"
        startIcon={IconNames.test}
      ></Button>
    </TempContainer>

    <TempContainer>
      <Card header="Header Card">
        <h3>Content Card</h3>
      </Card>
    </TempContainer>
  </>
);

export const Disabled = () => (
  <TempContainer>
    <Button colorType="primary" onClick={click} disabled btnType="filled">
      filled
    </Button>
    <Button colorType="primary" onClick={click} disabled btnType="outlined">
      outlined
    </Button>
    <Button colorType="primary" onClick={click} disabled btnType="half-opacity">
      half-opacity
    </Button>
    <Button colorType="primary" onClick={click} disabled btnType="colored-content">
      colored content
    </Button>
    <Button colorType="primary" onClick={click} disabled btnType="no-fill">
      no-fill
    </Button>
    <Button onClick={click} disabled colorType="white">
      white
    </Button>
    <Button onClick={click} disabled colorType="black">
      black
    </Button>
  </TempContainer>
);

export const CustomColors = () => (
  <>
    <TempContainer>
      <Button onClick={click} borderColor='red' contentColor='blue'>filled</Button>
      <Button onClick={click} btnType="outlined" contentColor='black'>
        outlined
      </Button>
      <Button onClick={click} borderColor='red' backgroundColor='light-blue' btnType="half-opacity">
        half-opacity
      </Button>
      <Button onClick={click} borderColor='red' backgroundColor='light-blue' btnType="colored-content">
        colored content
      </Button>
      <Button onClick={click} contentColor='blue' btnType="no-fill">
        no-fill
      </Button>
    </TempContainer>
  </>
);

const ButtonUIKit = () => (
  <>
    <Title>BUTTONS</Title>
    <Subtitle>Default buttons</Subtitle>
    <WithText />
    <Subtitle>With start icon</Subtitle>
    <WithStartIcon />
    <Subtitle>With right icon</Subtitle>
    <WithEndIcon />
    <Subtitle>Icon only</Subtitle>
    <IconOnly />
    <Subtitle>Disabled</Subtitle>
    <Disabled />
    <Subtitle>Custom colors</Subtitle>
    <CustomColors />
  </>
);

export { ButtonUIKit };
