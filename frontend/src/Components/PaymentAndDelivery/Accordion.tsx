import { FC } from "react";

interface IAccordionData {
    title: string;
    text: string;
}

// interface IAccordionProps {
//     items: IAccordionData[];
// }

const Accordion: FC<{data: IAccordionData}> = ({data}) => {
    return (
        <div className="modal__block">
            <p className="modal__subtitle">{data.title}</p>
            <p className="modal__text">
                {data.text}
            </p>
        </div>     
    );
}
 
export default Accordion;