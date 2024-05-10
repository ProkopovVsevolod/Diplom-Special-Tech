import { Link } from "react-router-dom";
import styled from "styled-components";

import Cart from "./../../assets/icons/Cart.png";
import Person from "./../../assets/icons/person.png";

const HeaderWrap = styled.header`
    background: #FBFBFB;
    padding: 35px 0;
    margin-bottom: 80px;
    
`

const HeaderContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: auto;

    & span {
        color: #FFC93E;
        font-size: 24px;
        font-style: italic;
        font-weight: 600;
    }

    & a {
        font-weight: 600;
        font-size: 20px;
        color: #000;
    }
`

const Logo = styled.div`
    margin-right: 20%;
`

const List = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;

    
`

const ListItem = styled.li`

    &:not(:last-child) {
        margin-right: 10%;
    }

    & a {
        font-weight: 400;
    }
`

const ImgIcon = styled.img`
    width: 32px;
    height: 28px;
    &:not(:last-child) {
        margin-right: 1%;
    }
`

const Header = () => {
    return (
        <HeaderWrap className="header">
            <HeaderContainer>

                <Logo>
                    <Link>
                        <span>Сам</span>спецтех
                    </Link>
                </Logo>
                

                <List>
                    <ListItem>
                        <Link to="">Автопарк</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="">О компании</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="">Оплата и доставка</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="">FAQ</Link>
                    </ListItem>

                    <ListItem>
                        <Link to="">Контакты</Link>
                    </ListItem>
                </List>

                <ImgIcon src={Cart} alt="Корзина" />
                <ImgIcon src={Person} alt="Личные данные" />

            </HeaderContainer>
            
            
        </HeaderWrap>
    );
}
 
export default Header;