// import React, { useEffect, useState } from 'react';

// import { Button } from '../Button/Button';

// import './Toast.scss';

// interface IToastProps {
//   id: number;
//   type: string;
//   text: string;
//   timer?: number;
//   deleteItem: () => void;
// }

// export const Toast = ({ type, text, timer = 100, deleteItem }: IToastProps) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [width, setWidth] = useState(0);
//   const [intervalID, setIntervalID] = useState<NodeJS.Timer>();

//   const handleStartTimer = () => {
//     const id = setInterval(() => {
//       setWidth((prev) => {
//         if (prev < timer) {
//           return prev + 0.5;
//         }

//         clearInterval(id);
//         return prev;
//       });
//     }, 20);

//     setIntervalID(id);
//   };

//   const handlePauseTimer = () => {
//     clearInterval(intervalID);
//   };

//   const handleCloseNotification = () => {
//     handlePauseTimer();
//     setIsVisible(true);

//     setTimeout(() => {
//       deleteItem();
//     }, 400);
//   };

//   useEffect(() => {
//     if (width === timer) {
//       handleCloseNotification();
//     }
//   }, [width]);

//   useEffect(() => {
//     handleStartTimer();
//   }, []);

//   return (
//     <div
//       onMouseEnter={handlePauseTimer}
//       onMouseLeave={handleStartTimer}
//       className={`toast toast_${type} ${isVisible ? 'toast_delete' : ''}`}
//     >
//       <div className="toast__container">
//         <p className="toast__text suptitle">{text}</p>
//         <Button
//           className="button_white button_default toast__button"
//           clickHandler={handleCloseNotification}
//         >
//          Close
//         </Button>
//       </div>

//       <div className="toast__bar" style={{ width: `${width}%` }} />
//     </div>
//   );
// };


import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import './Toast.scss';

interface IToastProps {
  id: number;
  type: string;
  text: string;
  timer?: number;
  deleteItem: () => void;
}

export const Toast = ({ type, text, timer = 100, deleteItem }: IToastProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState<number | undefined>(undefined); // Correct type for browser

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < timer) {
          return prev + 0.5;
        }

        clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id as unknown as number);
    // `id` is a number in the browser
  };
''
  const handlePauseTimer = () => {
    if (intervalID) {
      clearInterval(intervalID);
      setIntervalID(undefined);
    }
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setIsVisible(true);

    setTimeout(() => {
      deleteItem();
    }, 400);
  };

  useEffect(() => {
    if (width === timer) {
      handleCloseNotification();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();

    // Cleanup interval on unmount
    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      setIntervalID(undefined);
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`toast toast_${type} ${isVisible ? 'toast_delete' : ''}`}
    >
      <div className="toast__container">
        <p className="toast__text suptitle">{text}</p>
        <Button
          className="button_white button_default toast__button"
          clickHandler={handleCloseNotification}
        >
          Close
        </Button>
      </div>

      <div className="toast__bar" style={{ width: `${width}%` }} />
    </div>
  );
};