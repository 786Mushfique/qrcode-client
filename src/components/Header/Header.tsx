// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// import { HEADER_EXCEPTION_PATH } from '../../utils/constants/routes.constant';

// import { useTypedSelector } from '../../hooks/useTypedSelector';

// import { HeaderMessage } from './HeaderMessage';
// import { HeaderElement } from './HeaderElement';
// import { Logo } from '../UI/Logo/Logo';

// import './Header.scss';

// export const Header = () => {
//   const {
//     isAuth,
//     user: { isActivated },
//   } = useTypedSelector((state) => state.auth);
//   const location = useLocation();

//   return !HEADER_EXCEPTION_PATH.includes(location.pathname) ? (
//     <header className="header">
//       {isAuth && !isActivated && <HeaderMessage type="notify" />}
//       <div className="container">
//         <div className="header__inner">
//           <div className="header__container">
//             <Link to="/generator" className="logo header__logo">
//               <Logo />
//             </Link>
//           </div>

//           <HeaderElement />
//         </div>
//       </div>
//     </header>
//   ) : (
//     <></>
//   );
// };


// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { HEADER_EXCEPTION_PATH } from '../../utils/constants/routes.constant';
// import { useTypedSelector } from '../../hooks/useTypedSelector';
// import { HeaderMessage } from './HeaderMessage';
// import { HeaderElement } from './HeaderElement';
// import { Logo } from '../UI/Logo/Logo';
// import './Header.scss';

// export const Header = () => {
//   const {
//     isAuth,
//     user: { isActivated },
//   } = useTypedSelector((state) => state.auth);
//   const location = useLocation();
//   return !HEADER_EXCEPTION_PATH.includes(location.pathname) ? (
//     <header className="header">
//       {isAuth && !isActivated && <HeaderMessage type="notify" />}
//       <div className="container">
//         <div className="header__inner">
//           <div className="header__container">
//             <Link to="/generator" className="logo header__logo">
//               <Logo />
//             </Link>
//             <nav className="header__nav">
//               <Link to="/features" className="header__nav-link">Features</Link>
//               <Link to="/pricing" className="header__nav-link">Pricing</Link>
//               <Link to="/qrcodetypes" className="header__nav-link">
//                 QR Types
//               </Link>
//             </nav>
//           </div>
//           <HeaderElement />
//         </div>
//       </div>
//     </header>
//   ) : null;
// };


import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HEADER_EXCEPTION_PATH } from '../../utils/constants/routes.constant';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { HeaderMessage } from './HeaderMessage';
import { HeaderElement } from './HeaderElement';
import { Logo } from '../UI/Logo/Logo';
import './Header.scss';

export const Header = () => {
  const {
    isAuth,
    user: { isActivated },
  } = useTypedSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return !HEADER_EXCEPTION_PATH.includes(location.pathname) ? (
    <header className="header">
      {isAuth && !isActivated && <HeaderMessage type="notify" />}
      <div className="container">
        <div className="header__inner">
          <div className="header__container">
            <Link to="/generator" className="logo header__logo">
              <Logo />
            </Link>
            <nav className="header__nav">
              <Link to="/features" className="header__nav-link">
                Features
              </Link>
              <Link to="/pricing" className="header__nav-link">
                Pricing
              </Link>
              <div
                className="header__nav-link"
                onClick={() => handleNavigation('/qrcodetypes')}
              >
                QR Types
              </div>
            </nav>
          </div>
          <HeaderElement />
        </div>
      </div>
    </header>
  ) : null;
};



