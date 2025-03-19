// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import {
//   LOGIN_PATH,
//   REGISTRATION_PATH,
// } from '../../../utils/constants/routes.constant';

// import { IModal } from '../../../types/ModalWindow';

// import { Button } from '../../UI/Button/Button';
// import { Modal } from '../../UI/Modal/Modal';

// import img from '../../../assets/img/general/pro.png';

// export const ModalPro = ({ isVisible, toggleVisible, transition }: IModal) => {
//   const navigate = useNavigate();

//   return (
//     <Modal
//       visible={isVisible}
//       transition={transition}
//       onClose={toggleVisible}
//       className="generator__modal"
//       img={img}
//       title="More features with the PRO version "
//       content={
//         <p className="text text_small">
//          Create an account to save your QR codes and track the number of their scans!
//         </p>
//       }
//       footer={
//         <>
//           <Button
//             clickHandler={() => navigate(LOGIN_PATH)}
//             className="button_default button_secondary"
//           >
//            Log in to account
//           </Button>
//           <Button
//             clickHandler={() => navigate(REGISTRATION_PATH)}
//             className="button_blue button_default"
//           >
//             Create an account 
//           </Button>
//         </>
//       }
//     />
//   );
// };

import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LOGIN_PATH,
  REGISTRATION_PATH,
} from '../../../utils/constants/routes.constant';

import { IModal } from '../../../types/ModalWindow';

import { Button } from '../../UI/Button/Button';
import { Modal } from '../../UI/Modal/Modal';

import img from '../../../assets/img/general/pro.png';

export const ModalPro = ({ isVisible, toggleVisible, transition }: IModal) => {
  const navigate = useNavigate();

  return (
    <Modal
      visible={isVisible}
      transition={transition}
      onClose={toggleVisible}
      className="generator__modal"
      img={img}
      title="More features with the PRO version"
      content={
        <p className="text text_small">
          Create an account to save your QR codes and track the number of their
          scans!
        </p>
      }
      footer={
        <>
          <Button
            clickHandler={() => navigate(LOGIN_PATH)}
            className="button_default button_secondary"
          >
            Log in to account
          </Button>
          <Button
            clickHandler={() => navigate(REGISTRATION_PATH)}
            className="button_blue button_default"
          >
            Create an account
          </Button>
        </>
      }
    />
  );
};

