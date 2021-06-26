// import {useState } from "react";

// export const getLocalStorage = (key) => {
//     const [storedValue, setStoredValue] = useState<any>(() => {
//         try {
//           const item = window.localStorage.getItem(key);
//           return item ? JSON.parse(item) : 0;
//         } catch (error) {
          
//           console.log(error);
//           return 0;
//         }
//       });
  
//       const setValue = (value) => {
//         try {
//           // Allow value to be a function so we have same API as useState
//           const valueToStore =
//             value instanceof Function ? value(storedValue) : value;
//           // Save state
//           setStoredValue(valueToStore);
//           // Save to local storage
//           window.localStorage.setItem(key, JSON.stringify(valueToStore));
//         } catch (error) {
//           // A more advanced implementation would handle the error case
//           console.log(error);
//         }
//       };
//       return [storedValue, setValue];
// }
