import { FC } from "react";
import { IModalParametres } from "../../interfaces/modal";
import "./style.scss";

const Modal:FC<IModalParametres> = ({active, setActive, children}) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content-wrapper" onClick={e => e.stopPropagation()}>
                
                {children}
                <div className="modal__close-button" onClick={() => setActive(false)}></div>
            </div>
        </div>
    );
}
 
export default Modal;
