import React from 'react';

import { useResendEmailMutation } from '../../store/auth/authApi';

import { Button } from '../UI/Button/Button';

interface IHeaderMessageProps {
  type?: string;
}

export const HeaderMessage = ({ type = 'error' }: IHeaderMessageProps) => {
  const [resendEmail] = useResendEmailMutation();
  return (
    <div className={`header__message message message_${type}`}>
      <div className="container">
        <div className="message__inner">
          <h2 className="message__title suptitle">
          Confirm your email address to access more features. Didn't receive the email? &nbsp;
            <Button
              className="button button_transparent message__button"
              clickHandler={() => resendEmail()}
            >
              Resend confirmation 
            </Button>
          </h2>
        </div>
      </div>
    </div>
  );
};
