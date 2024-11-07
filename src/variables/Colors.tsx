import { useSelector } from "react-redux";
import { RootState } from "../store";

export interface Colors {
    menu: string,
    bg: string,
    textGray: string,
    buttons: {
        vk: string,
        telegram: string,
        github: string,
        discord: string
    }
}

export const useColors = () => {
    const theme = useSelector((state: RootState) => state.theme.theme);

    return theme === 'dark' ? 
    {
        menu: '#2D2E31',
        bg: '#202124',
        textGray: '#737272',
        buttons: {
            vk: '#0072F7',
            telegram: '#28A4E4',
            github: '#FFB808',
            discord: '#5661EA'
        } 
    } : 
    {
        menu: '#2D2E31',
        bg: '#202124',
        textGray: '#737272',
        buttons: {
            vk: '#0072F7',
            telegram: '#28A4E4',
            github: '#FFB808',
            discord: '#5661EA'
        }
    };
};
