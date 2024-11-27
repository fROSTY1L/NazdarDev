import React, { useState } from 'react';
import { ContactBar, ContactIcon } from '../../styles/Modal.style';

interface ContactBarItemProps {
    url: string;
    icon: string;
    bgColor: string;
    hoveredColor: string;
}

const ContactBarItem: React.FC<ContactBarItemProps> = ({ url, icon,  bgColor, hoveredColor }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prevCount) => {
            const newCount = (prevCount + 1) % 3;
            if (newCount === 2) {
                window.open(url, '_blank');
            }
            return newCount;
        });
    };

    return (
        <ContactBar bgColor={bgColor} hoveredColor={hoveredColor} isClicked={count >= 1} onClick={handleClick}>
            <ContactIcon isClicked={count >= 1} src={icon} />
        </ContactBar>

    );
};

export default ContactBarItem;
