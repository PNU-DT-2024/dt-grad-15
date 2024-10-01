import '../../../css/PJDetail.css';
export default function InterStep({ imgUrl, step }) {
    return (
        <div className="column stepContainer" >
            <div className='imgStep'>
                <img src={imgUrl} alt="#" />
            </div>
            <p>{step}</p>
        </div>
    )
}