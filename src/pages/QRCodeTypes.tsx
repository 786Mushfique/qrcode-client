// import React from 'react';
// import './QRCodeTypes.scss';

// const QRCodeTypes = () => {
//   const qrTypes = [
//     { type: 'link', description: 'Link to any Website URL' },
//     { type: 'email', description: 'Send an email' },
//     { type: 'text', description: 'Share text' },
//     { type: 'call', description: 'Make a call' },
//     { type: 'sms', description: 'Send message' },
//     { type: 'whatsapp', description: 'Send whatsapp message' },
//     { type: 'wifi', description: 'Connect Wi-Fi' },
//     { type: 'vCard', description: 'share a content to the phone scanning' },
//     { type: 'Event', description: 'invite people to your event' },

//   ];

//   return (
//     <div className="qr-code-types">
//       <h2>QR Code Types</h2>
//       <p>Choose the QR code type that suits your needs.</p>
//       <div className="qr-grid">
//         {qrTypes.map((qr, index) => (
//           <div key={index} className="qr-card">
//             <div className="qr-icon">
//               <div className="icon-circle"></div>
//             </div>
//             <h3>{qr.type}</h3>
//             <p>{qr.description}</p>
//             <button className="choose-btn">Choose</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QRCodeTypes;

import React from 'react';
import { Link, Mail, MessageCircle, Phone, Wifi, Calendar, User, Globe, MessageSquare } from 'lucide-react';
import './QRCodeTypes.scss';

const QRCodeTypes = () => {
  const qrTypes = [
    { type: 'link', description: 'Link to any Website URL', icon: <Globe size={50} color='#623cea' /> },
    { type: 'email', description: 'Send an email', icon: <Mail size={50} color='#623cea' /> },
    { type: 'text', description: 'Share text', icon: <MessageSquare size={50} color='#623cea' /> },
    { type: 'call', description: 'Make a call', icon: <Phone size={50} color='#623cea' /> },
    { type: 'sms', description: 'Send message', icon: <MessageCircle size={50} color='#623cea' /> },
    { type: 'whatsapp', description: 'Send whatsapp message', icon: <MessageCircle size={50} color='#25D366' /> },
    { type: 'wifi', description: 'Connect Wi-Fi', icon: <Wifi size={50} color='#623cea' /> },
    { type: 'vCard', description: 'Share a contact to the phone scanning', icon: <User size={50} color='#623cea' /> },
    { type: 'Event', description: 'Invite people to your event', icon: <Calendar size={50} color='#623cea' /> },
  ];

  return (
    <div className="qr-code-types">
      <h2>QR Code Types</h2>
      <p>Choose the QR code type that suits your needs.</p>
      <div className="qr-grid">
        {qrTypes.map((qr, index) => (
          <div key={index} className="qr-card">
            <div className="qr-icon">
              <div className="icon-circle">
                {qr.icon}
              </div>
            </div>
            <h3>{qr.type}</h3>
            <p>{qr.description}</p>
            <button className="choose-btn">Choose</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRCodeTypes;


