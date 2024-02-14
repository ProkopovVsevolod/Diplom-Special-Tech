import { FC } from "react";

import Hero from "./Hero/Hero";
import SideBar from "../../ui-kit/SideBar/SideBar";
import Catalog from "./Catalog/Catalog";
import styles from './mainPage.module.scss'

interface EmptyProps {};

const MainPage: FC<EmptyProps> = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <SideBar />
                <Hero />
            </div>

            <Catalog />
        </>
    );
}
 
export default MainPage;