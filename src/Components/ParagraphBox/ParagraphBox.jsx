function ParagraphBox(props){
    const { paragraphs, keyText } = props;

    return (
        <>
            {paragraphs.map((par,index) => {
                return (<p key={`${keyText}-${index}`} className="py-2">{par}</p>)
            })}
        </>
    )

}

export default ParagraphBox;