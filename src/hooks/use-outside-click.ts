
// import { useEffect, useRef } from "react";

// export function useOutsideClick<T extends
// HTMLElement>(callback: () => void) {
//     const ref = useRef<T>(null);
//     useEffect(()=>{
//         const handleclickOutside=(event: MouseEvent) => {
//             if(ref.current && !ref.current.contains(event.target as Node)) {
//                 callback();
//             }
//         };
//         document.addEventListener("mousedown",handleclickOutside);
//         return () =>{
//             document.removeEventListener("mousedown",handleclickOutside);
//         }
//     },[callback]);
//     return ref;
// }




import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T | null>(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackRef.current();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return ref;
}