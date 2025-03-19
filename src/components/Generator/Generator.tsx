import React from 'react';

import { useActions } from '../../hooks/useActions';

import { GeneratorItem } from './GeneratorItem';
import { SettingsList } from './Settings/SettingsList';
import { PreviewCode } from './Preview/PreviewCode';
import { Button } from '../UI/Button/Button';

import './Generator.scss';

export const Generator = () => {
  const { resetCode } = useActions();

  return (
    <div className="generator">
      <div className="generator__container">
        <GeneratorItem
          title="QR code setup"
          className="generator__item_settings"
          buttonAction={
            <Button
              clickHandler={resetCode}
              className="button_red generator__reset"
            >
             Clear 
            </Button>
          }
        >
          <SettingsList />
        </GeneratorItem>

        <GeneratorItem
          title="QR code preview"
          className="generator__item_preview"
        >
          <PreviewCode />
        </GeneratorItem>
      </div>
    </div>
  );
};
