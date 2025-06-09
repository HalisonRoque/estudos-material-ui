import { createContext, useCallback, useContext, useState } from "react";

//INTERFACE PARA SELECIONAR OOU ALTERAR OS TEMAS CRIADOS DO SISTEMA
//SERÁ CHAMDO DENTRO DE createContext()
interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

interface IAppDrawerProviderProps {
    children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useAppDrawerContext = () => {
    return useContext(DrawerContext)
}

export const AppDrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    )
}