import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import arrow from "./../../assets/icons/arrow-sidebar.png"

const SubmenuItem = styled.li`
    margin: 10px 0 0 30px;
`

const SidebarWrapper = styled.div`
    left: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
    min-width: 250px;
    transition: 0.3s;
    background-color: #FBFBFB;
    color: #000;
    padding: 20px 10px;
    width: 15%;
    margin-right: 2%;
`;

const Title = styled.p`
    font-size: 20px;
    margin-bottom: 20px;
    color: #000;
    text-align: center;
`

const ListElement = styled.li`
    font-size: 20px;    
    padding: 12px 10px;
    position: relative;
    cursor: pointer;

    &:not(:first-child) {
        padding: 12px 10px;
    }

    &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.10);
    }

    &:first-child {
        border-top: 1px solid rgba(0, 0, 0, 0.10);
    }

    & a {
        color: #000;
    }

    &:after {
        position: absolute;
        top: 12px;
        right: 15px;
        content: " ";
        background-image: url(${arrow});
        background-size: cover;
        background-position: center;
        width: 15px;
        height: 25px;
    }
`


const SideBar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SidebarWrapper isOpen={isOpen}>
            <Title onClick={toggleSidebar}>Каталог техники</Title>
            <ul>
                <ListElement>
                    <Link to="/page1">Экскаваторы</Link>
                    <ul>
                        <SubmenuItem><Link>page1.2</Link></SubmenuItem>
                    </ul>
                </ListElement>

                <ListElement>
                    <Link to="/page2">Погрузчики</Link>
                </ListElement>

                <ListElement>
                    <Link to="/page3">Самосвалы</Link>
                </ListElement>

                <ListElement>
                    <Link to="/page3">Катки</Link>
                </ListElement>

                <ListElement>
                    <Link to="/page3">Краны</Link>
                </ListElement>

                <ListElement>
                    <Link to="/page3">Тралы</Link>
                </ListElement>
            </ul>
        </SidebarWrapper>
    );
};
 
export default SideBar;