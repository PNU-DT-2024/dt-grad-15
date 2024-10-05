import { useMediaQuery } from "react-responsive";
import '../../../css/PJDetail.css';

export default function InterStep({ imgUrl, step }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div>
            <div className='imgStep'>
                <img src={imgUrl} alt="#" />
            </div>
            <p>{step}</p>
        </div>
    )
}