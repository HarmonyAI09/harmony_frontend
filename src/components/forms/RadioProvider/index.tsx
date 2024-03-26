import { createContext, useState } from 'react';

interface IRadioContext {
  value: string;
  onChange: (_: string) => void;
}

const RadioContext = createContext<IRadioContext>({
  value: '',
  onChange: () => {},
});

interface IRadioProviderProps {
  children: React.ReactNode;
  value: string;
  onChange: (_: string) => void;
}

function RadioProvider({ children, value, onChange }: IRadioProviderProps) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      {children}
    </RadioContext.Provider>
  );
}

export { RadioContext };
export default RadioProvider;
