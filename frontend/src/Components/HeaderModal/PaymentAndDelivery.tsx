import { FC, useState } from "react";
import Modal from "../../ui-kit/Modal/Modal";
import { IModalParametres } from "../../interfaces/modal.intefaces";
import { IAccordionData } from "../../interfaces/accordion.interfaces";
import Accordion from "./Accordion";


const accordionData:IAccordionData[] = [
    {
        title: "Оплата наличными:", 
        text: `Вы можете оплатить наличными при самовывозе сотруднику, 
        который оформляет для вас аренду техники, либо водителю, 
        который доставит технику к вам на адрес. Так же есть 
        возможность перевода на карту любого банка.`
    },

    {title: "Оплата картой:", text: `Оплатить картой можно онлайн на сайте, 
    введя данные своей карты в специальном окне`},

    {title: "Доставка", text: `Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Doloremque consequatur 
    iusto asperiores recusandae ullam assumenda. 
    Esse nemo doloremque delectus quisquam accusamus 
    alias, quia laboriosam officia ducimus, laudantium, 
    dolores temporibus id?`}
];


const PaymentAndDelivery:FC<IModalParametres> = ({active, setActive}) => {

    const [activeTab, setActiveTab] = useState();

    return (
        <Modal active={active} setActive={setActive}>
            <p className="modal__title">Оплата и доставка</p>

            <section className='modal__content'>
                <h3 className="modal__title">Оплата</h3>

                <Accordion data={accordionData[0]} />
                <Accordion data={accordionData[1]} />

                <div className="modal__arrow"></div>
            </section>

            <section className='modal__content'>
                <h3 className="modal__title">Доставка</h3>
                {/* <Accordion data={accordionData[2]} /> */}
                <div className="modal__arrow"></div>
            </section>

            {/* <div className="modal__block">
                    <p className="modal__subtitle">Оплата наличными:</p>
                    <p className="modal__text">
                        Вы можете оплатить наличными при самовывозе сотруднику, 
                        который оформляет для вас аренду техники, либо водителю, 
                        который доставит технику к вам на адрес. Так же есть 
                        возможность перевода на карту любого банка.
                    </p>
                </div>

                <div className="modal__block">
                    <p className="modal__subtitle">Оплата картой:</p>
                    <p className="modal__text">
                        Оплатить картой можно онлайн на сайте, 
                        введя данные своей карты в специальном окне
                    </p>
                </div> */}
        </Modal>
    );
}
 
export default PaymentAndDelivery;
