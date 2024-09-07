export default function InterStep({ imgUrl, step }) {
    return (
        <div className="column" style={{width:'20%'}}>
            <div style={{ backgroundColor:'#dbdbdb'}}>
                <img src={imgUrl} alt="#" />
            </div>
            <p style={{ marginTop: 12 }}>{step}</p>
        </div>
    )
}