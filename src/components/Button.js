const Button = ({setModal}) => {
    return(
        <div className="button" onClick={()=>setModal(true)}>New visitor</div>
    );
}

export default Button;