import testIcon from 'assets/icons/test-icon.svg';
import { Button } from 'components/Button/index';
import React from 'react';
import { Subtitle, TempContainer, Title } from 'styles/shared.styles';

const click = () => console.log('clicked');

export const WithText = () => (
  <>
    <TempContainer>
      <Button onClick={click}>filled</Button>
      <Button onClick={click} btnType="outlined">
        outlined
      </Button>
      <Button onClick={click} btnType="half-opacity">
        half-opacity
      </Button>
      <Button onClick={click} btnType="no-fill">
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
      <Button onClick={click} btnType="no-fill" colorType="black" size="small">
        no-fill
      </Button>
    </TempContainer>
  </>
);

export const WithStartIcon = () => (
  <>
    <TempContainer>
      <Button onClick={click} startIcon="test">
        filled
      </Button>
      <Button onClick={click} btnType="outlined" startIcon="test">
        outlined
      </Button>
      <Button onClick={click} btnType="half-opacity" startIcon="test">
        half-opacity
      </Button>
      <Button onClick={click} btnType="no-fill" startIcon="test">
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="negative"
        size="medium"
        startIcon="test"
      >
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="negative"
        size="medium"
        startIcon="test"
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="negative"
        size="medium"
        startIcon="test"
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="negative"
        size="medium"
        startIcon="test"
      >
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="positive"
        size="small"
        startIcon="test"
      >
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="positive"
        size="small"
        startIcon="test"
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="positive"
        size="small"
        startIcon="test"
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="positive"
        size="small"
        startIcon="test"
      >
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button onClick={click} colorType="accent" startIcon="test">
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="accent"
        startIcon="test"
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="accent"
        startIcon="test"
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="accent"
        startIcon="test"
      >
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="white"
        size="medium"
        startIcon="test"
      >
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="white"
        size="medium"
        startIcon="test"
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="white"
        size="medium"
        startIcon="test"
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="white"
        size="medium"
        startIcon="test"
      >
        no-fill
      </Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="black"
        size="small"
        startIcon="test"
      >
        filled
      </Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="black"
        size="small"
        startIcon="test"
      >
        outlined
      </Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="black"
        size="small"
        startIcon="test"
      >
        half-opacity
      </Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="black"
        size="small"
        startIcon="test"
      >
        no-fill
      </Button>
    </TempContainer>
  </>
);

export const WithEndIcon = () => (
  <TempContainer>
    <Button onClick={click} endIcon="test" btnType="filled">
      Click me
    </Button>
  </TempContainer>
);

export const IconOnly = () => (
  <>
    <TempContainer>
      <Button onClick={click} startIcon="test"></Button>
      <Button onClick={click} btnType="outlined" startIcon="test"></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        startIcon="test"
      ></Button>
      <Button onClick={click} btnType="no-fill" startIcon="test"></Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="negative"
        size="medium"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="negative"
        size="medium"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="negative"
        size="medium"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="negative"
        size="medium"
        startIcon="test"
      ></Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="positive"
        size="small"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="positive"
        size="small"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="positive"
        size="small"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="positive"
        size="small"
        startIcon="test"
      ></Button>
    </TempContainer>

    <TempContainer>
      <Button onClick={click} colorType="accent" startIcon="test"></Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="accent"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="accent"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="accent"
        startIcon="test"
      ></Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="white"
        size="medium"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="white"
        size="medium"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="white"
        size="medium"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="white"
        size="medium"
        startIcon="test"
      ></Button>
    </TempContainer>

    <TempContainer>
      <Button
        onClick={click}
        colorType="black"
        size="small"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="outlined"
        colorType="black"
        size="small"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="half-opacity"
        colorType="black"
        size="small"
        startIcon="test"
      ></Button>
      <Button
        onClick={click}
        btnType="no-fill"
        colorType="black"
        size="small"
        startIcon="test"
      ></Button>
    </TempContainer>
  </>
);

export const Disabled = () => (
  <TempContainer>
    <Button onClick={click} disabled btnType="filled">
      filled
    </Button>
    <Button onClick={click} disabled btnType="outlined">
      outlined
    </Button>
    <Button onClick={click} disabled btnType="half-opacity">
      half-opacity
    </Button>
    <Button onClick={click} disabled btnType="no-fill">
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
  </>
);

export { ButtonUIKit };
