import styled from "styled-components";
import AdvertisementImg from "./../../assets/main-hero.jpg";
import { Link } from "react-router-dom";

const Advertisement = styled.div`
    position: relative;
    font-size: 24px;
    width: 985px;
    height: 634px;
    background-image: url(${AdvertisementImg});
    background-size: cover;
    background-position: center;    
    color: #FFF;
    padding: 100px 60px 157px;
    border-radius: 12px;

    & h1 {
        color: #FFF;
        margin-bottom: 20px;
    }

    & a {
        position: absolute;
        bottom: 157px;
        color: #000;
        padding: 20px 30px;
        border-radius: 12px;
        
        font-weight: 600;
        background: #FFC93E;
        box-shadow: 0px 0px 10px 0px #FFC93E;
    }
`



const Hero = () => {
    return (
        <Advertisement >
            <h1>Аренда спецтехники в Самарской области</h1>
            <p>по низким ценам</p>
            <Link>Заказать спецтехнику</Link>
        </Advertisement>
    );
}
 
export default Hero;