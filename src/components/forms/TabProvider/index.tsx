import { createContext } from 'react';

interface ITabContext {
  value: string;
  onChange: (_: string) => void;
}

const TabContext = createContext<ITabContext>({
  value: '',
  onChange: () => {},
});

interface ITabProviderProps {
  children?: React.ReactNode;
  value: string;
  onChange: (_: string) => void;
}

function TabProvider({ children, value, onChange }: ITabProviderProps) {
  return (
    <TabContext.Provider value={{ value, onChange }}>
      {children}
    </TabContext.Provider>
  );
}

export default TabProvider;
export { TabContext };
