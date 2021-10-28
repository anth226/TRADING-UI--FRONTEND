import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LeftNavigationBar } from './index';
import { rootNavigationParts } from '../../hooks/leftSidebar/useLeftNavigationBarHandlers';

storiesOf('Layout', module).add('LeftNavigationBar', () => {
  const setActiveRootType = action('setActiveRootType');
  const setActiveNavType = action('setActiveNavType');
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <LeftNavigationBar 
        setActiveRootType={setActiveRootType}
        setActiveNavItem={setActiveNavType}
        rootItems={rootNavigationParts} 
      />
    </div>
  );
});
