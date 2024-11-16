import { useState, useRef, useEffect } from "react";
import { Button, Icon, MenuContainer, MenuItem, MenuList } from "../../../styles/Header/DropDownSetting.style";
import icon from "../../../assets/Header/drop down settings/settings.png";
import { useColors } from "../../../variables/Colors";
import Translate from "../Translate";
import ThemeToggle from "../ThemeToggle";

const DropDownSettings: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null); 

    const colors = useColors()
    const [rotation, setRotation] = useState(0);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        setRotation((prevRotation) => prevRotation + 30); 
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <MenuContainer ref={menuRef}>
            <Button onClick={toggleMenu}>
                <Icon rotation={rotation} src={icon} />
            </Button>
            <MenuList colors={colors} isOpen={isOpen}>
                <MenuItem>
                  <Translate/>
                </MenuItem>
                <MenuItem>
                  <ThemeToggle/>
                </MenuItem>
            </MenuList>
        </MenuContainer>
    );
};

export default DropDownSettings;
