import React, { ReactElement } from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { Input } from '../UI/Input/Input';
import { Textarea } from '../UI/Textarea/Textarea';

interface IGeneratorStates {
  [type: string]: ReactElement;
}

export const GeneratorSwitch = () => {
  const { code } = useTypedSelector((state) => state.code);
  const { setURL } = useActions();

  const GENERATOR_STATES: IGeneratorStates = {
    url: (
      <Input
        placeholder="Enter website address"
        value={code.link}
        onChange={(event) => setURL(event.target.value)}
        className="code-settings__input"
        maxLength={128}
      />
    ),
    text: (
      <Textarea
        placeholder="Enter text"
        value={code.link}
        onChange={(event) => setURL(event.target.value)}
        className="code-settings__input"
        maxLength={512}
      />
    ),
  };

  return GENERATOR_STATES[code.style.type];
};
