// import { DropdownUIKit } from 'components/Dropdown/DropdownStories';
import React from 'react';
import { ButtonUIKit } from 'stories/ButtonStories';
import { DropdownUIKit } from 'stories/DropdownStories';
import { InputUIKit } from 'stories/InputStories';
import { ThemeProvider } from 'theme';

const App: React.FC = () => (
  <ThemeProvider>
    <div style={{ margin: '20px' }}>
      <h1 style={{ marginBottom: '80px' }}>UI Kit page</h1>
      <DropdownUIKit />
      <InputUIKit />
      <ButtonUIKit />
    </div>
  </ThemeProvider>
);

export default App;
