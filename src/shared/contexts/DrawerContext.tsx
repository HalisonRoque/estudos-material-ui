import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerOptions {
    icon: string;
    path: string;
    label: string;
}

//INTERFACE PARA SELECIONAR OOU ALTERAR OS TEMAS CRIADOS DO SISTEMA
//SERÁ CHAMDO DENTRO DE createContext()
interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOptions[];
    setDrawerOption: (newDrawerOptions: IDrawerOptions[]) => void;
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
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions)
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOption: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    )
}