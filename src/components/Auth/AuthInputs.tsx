import React from 'react';
import { Control } from 'react-hook-form';

import {
  EMAIL_VALIDATE,
  PASSWORD_VALIDATE,
} from '../../utils/constants/validate.constant';

import { InputForm } from '../UI/Input/InputForm';

interface IAuthInputs {
  control: Control;
  autoComplete?: string;
}

export const AuthInputs = ({ control, autoComplete = 'off' }: IAuthInputs) => {
  return (
    <form className="auth__form">
      <InputForm
        control={control}
        name="email"
        label="Email"
        type="email"
        autoComplete={autoComplete}
        rules={EMAIL_VALIDATE}
      />

      <InputForm
        control={control}
        name="password"
        label="Password "
        type="password"
        autoComplete={autoComplete}
        rules={PASSWORD_VALIDATE}
      />
    </form>
  );
};


// import React from 'react';
// import { Control, FieldValues } from 'react-hook-form';

// import {
//   EMAIL_VALIDATE,
//   PASSWORD_VALIDATE,
// } from '../../utils/constants/validate.constant';

// import { InputForm } from '../UI/Input/InputForm';

// interface IAuthInputs {
//   control: Control<FieldValues>; // Ensure FieldValues type here
//   autoComplete?: string;
// }

// export const AuthInputs: React.FC<IAuthInputs> = ({
//   control,
//   autoComplete = 'off',
// }) => {
//   return (
//     <form className="auth__form">
//       <InputForm
//         control={control}
//         name="email"
//         label="Email"
//         type="email"
//         autoComplete={autoComplete}
//         rules={EMAIL_VALIDATE}
//       />

//       <InputForm
//         control={control}
//         name="password"
//         label="Password"
//         type="password"
//         autoComplete={autoComplete}
//         rules={PASSWORD_VALIDATE}
//       />
//     </form>
//   );
// };

