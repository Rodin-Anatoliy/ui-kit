import React from 'react';

import { ThemeProvider } from './lib/theme';
import { ButtonUIKit } from './stories/ButtonStories';
import { ControlsUIKit } from './stories/ControlsStories';
import { DropdownUIKit } from './stories/DropdownStories';
import { IconsUIKit } from './stories/IconsStories';
import { InputUIKit } from './stories/InputStories';
import { ModalUIKit } from './stories/ModalStories';
import { TagUIKit } from './stories/TagStories';
import { TooltipsUIKit } from './stories/TooltipStories';
import { TypographyUIKit } from './stories/TypographyStories';

const App: React.FC = () => (
  <ThemeProvider>
    <div style={{ margin: '20px' }} className="scroll">
      <h1 style={{ marginBottom: '80px' }}>UI Kit page</h1>
      <ModalUIKit />
      <TypographyUIKit />
      <TagUIKit />
      <ControlsUIKit />
      <DropdownUIKit />
      <IconsUIKit />
      <InputUIKit />
      <ButtonUIKit />
      <TooltipsUIKit />
    </div>
  </ThemeProvider>
);

export default App;
