import { useSelector } from "react-redux";
import { RootState } from "../store";

export interface Colors {
    theme: string,
    menu: string,
    bg: string,
    text: {
        main: string,
        title: string,
        gray: string
    },
    border: string,
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
        theme: 'dark',
        menu: '#2D2E31',
        bg: '#202124',
        text: {
            main: 'white',
            title: '',
            gray: '#737272'
        },
        border: '',
        buttons: {
            vk: '#0072F7',
            telegram: '#28A4E4',
            github: '#FFB808',
            discord: '#5661EA'
        } 
    } : 
    {
        theme: 'light',
        menu: '',
        bg: 'white',
        text: {
            main: '#0072F7',
            title: '#6270DF',
            gray: 'black'
        },
        border: '#0072F7',
        buttons: {
            vk: '#0072F7',
            telegram: '#28A4E4',
            github: '#FFB808',
            discord: '#5661EA'
        }
    };
};
