// import React from 'react';
// import { BrowserRouter , Routes , Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store/store';
// import { AuthMiddleware } from './router/AuthMiddleware';
// import { AppRouter } from './router/AppRouter';
// import { Header } from './components/Header/Header';
// import { Notification } from './components/Notification/Notification';
// import './assets/styles/style.scss';
// import { BusinessCards } from './pages/BusinessCards';
// import QRCodeTypes from './pages/QRCodeTypes';
// export const App = () => {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Notification />
//         <AuthMiddleware>
//           <Header />
//           <Routes>
//           <Route path="/qrcodetypes" element={<QRCodeTypes />} />
//           </Routes>
//           <AppRouter />
//         </AuthMiddleware>
//         <BusinessCards/>
//         <QRCodeTypes/>
//        </BrowserRouter>
//     </Provider>
//   );
// };


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AuthMiddleware } from './router/AuthMiddleware';
import { AppRouter } from './router/AppRouter';
import { Header } from './components/Header/Header';
import { Notification } from './components/Notification/Notification';
import './assets/styles/style.scss';
import QRCodeTypes from './pages/QRCodeTypes';
import Features from './pages/Features';
import Pricing from './pages/Pricing';



export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Notification />
        <AuthMiddleware>
          <Header />
          {/* <QRCodeSection/> */}
      
          <Routes>
            <Route path="/qrcodetypes" element={<QRCodeTypes />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/*" element={<AppRouter />} />
          </Routes>
        </AuthMiddleware> 
      </BrowserRouter>
    </Provider>
  );
};



