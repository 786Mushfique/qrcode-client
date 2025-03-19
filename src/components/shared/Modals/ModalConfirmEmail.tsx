import React from 'react';

import { useResendEmailMutation } from '../../../store/auth/authApi';

import { IModal } from '../../../types/ModalWindow';

import { Button } from '../../UI/Button/Button';
import { Modal } from '../../UI/Modal/Modal';

import img from '../../../assets/img/general/pro.png';

export const ModalConfirmEmail = ({
  isVisible,
  toggleVisible,
  transition,
}: IModal) => {
  const [resendEmail] = useResendEmailMutation();

  const resendEmailHandle = () => {
    resendEmail();
    toggleVisible();
  };

  return (
    <Modal
      img={img}
      title="Email address confirmation "
      content={
        <p className="text text_small">
         To gain full access to the application, you need to confirm your email address
        </p>
      }
      footer={
        <>
          <Button
            clickHandler={() => toggleVisible()}
            className="button_secondary button_default"
          >
           Close
          </Button>
          <Button
            clickHandler={resendEmailHandle}
            className="button_blue button_default"
          >
           Confirm
          </Button>
        </>
      }
      visible={isVisible}
      transition={transition}
      onClose={() => toggleVisible()}
    />
  );
};
