import { Link } from "react-router-dom";


import liftTruck from "./../../assets/technic/lift-truck.png";
import crane from "./../../assets/technic/cranes.png";
import excavator from "./../../assets/technic/excavators.png";
import roadRinks from "./../../assets/technic/road-rinks.png";
import trawl from "./../../assets/technic/trawls.png";
import dumpTrucks from "./../../assets/technic/dump-trucks.png";
import SideBar from "./SideBar";
import styled from "styled-components";
import Hero from "./Hero";

const SpecTech = styled.section`
    margin-bottom: 80px;

    & h2 {
        margin-bottom: 30px;
    }
`
const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    & a {
        padding: 60px 60px 30px;

        background-color: #FBFBFB;
        flex-basis: calc((100% / 3) - 20px);
            
    
        &:nth-child(1), &:nth-child(2), &:nth-child(3)  {
            border-bottom: 1px solid rgba(0, 0, 0, 0.10);
        }
    
        &:nth-child(1), &:nth-child(2), &:nth-child(4), &:nth-child(5) {
            border-right: 1px solid rgba(0, 0, 0, 0.10);
        }
    }

    & h3 {
        text-align: center;
    }
`

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
`

const MainPage = () => {
    return (
        <main>
            <Flex>
                <SideBar/>
                <Hero/>
            </Flex>
            
            <SpecTech>
                <h2>Наш автопарк</h2>
                <ContentWrapper >
                    <Link>
                        <Img src={liftTruck} alt="Погрузчики" />
                        <h3>Погрузчики</h3>
                    </Link>

                    <Link>
                        <Img src={dumpTrucks} alt="Самосвалы" />
                        <h3>Самосвалы</h3>
                    </Link>

                    <Link>
                        <Img src={roadRinks} alt="Катки" />
                        <h3>Катки</h3>
                    </Link>

                    <Link >
                        <Img src={excavator} alt="Экскаваторы" />
                        <h3>Экскаваторы</h3>
                    </Link>

                    <Link>
                        <Img src={crane} alt="Краны" />
                        <h3>Краны</h3>
                    </Link>

                    <Link>
                        <img src={trawl} alt="Тралы" />
                        <h3>Тралы</h3>
                    </Link>
                </ContentWrapper>
            </SpecTech>

        </main>
    );
}
 
export default MainPage;