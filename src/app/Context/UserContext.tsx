// 'use client'

// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

// // 👇 Define the shape of your context
// interface IUserContext {
//   userData: string | null;
//   setUserData: React.Dispatch<React.SetStateAction<string | null>>;
// }

// // 👇 Provide a default value (can be empty function for setter)
// export const UserContext = createContext<IUserContext>({
//   userData: null,
//   setUserData: () => {},
// });

// // 👇 Props type for the Provider
// interface UserContextProviderProps {
//   children: ReactNode;
// }

// export default function UserContextProvider({ children }: UserContextProviderProps) {
//   const [userData, setUserData] = useState<string | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem('userToken');
//     if (token) {
//       setUserData(token);
//     }
//   }, []);

//   return (
//     <UserContext.Provider value={{ userData, setUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// }


'use client'

import React, { createContext, useEffect, useState } from 'react'

interface IUserContext {
  userData: string | null
  setUserData: React.Dispatch<React.SetStateAction<string | null>>
  isLoading: boolean
}

export const UserContext = createContext<IUserContext>({
  userData: null,
  setUserData: () => {},
  isLoading: true,
})

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    if (token) setUserData(token)
    setIsLoading(false)
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}
