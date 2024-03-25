import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { PasswordContextType } from '../types';

const DEFAULT_VALUES: PasswordContextType = {
  password: '',
  options: {
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
  },
  characterLength: 0,
}

type PasswordContextProps = {
  passwordData: PasswordContextType;
  setPasswordData: (data: PasswordContextType) => void;
}


interface ContextProps {
  children: ReactNode;
}

const PasswordContext = createContext<PasswordContextProps | undefined>(undefined);

export const PasswordContextProvider: FC<ContextProps> = ({ children }) => {
  const [passwordData, setPasswordData] = useState<PasswordContextType>(DEFAULT_VALUES);

  return (
    <PasswordContext.Provider value={{ passwordData, setPasswordData }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePasswordContext = () => {
  const context = useContext(PasswordContext);

  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyProvider');
  }

  return { passwordData: context.passwordData, setPasswordData: context.setPasswordData };
};