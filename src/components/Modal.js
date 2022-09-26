import { createRef } from "react";

const Modal = ({modal, setModal, form, setForm}) => {
    if (!modal) return;

    const name = createRef();
    const phone = createRef();

    const handler = (e) => {
        //e.preventDefault();
        console.dir(e);

        if(((name.current.value == "")||
            (name.current.value == " "))&&
            ((phone.current.value == "")||
            (phone.current.value == " "))) return;

        setForm([
                ... form,
                {
                    id: Date.now(),
                    name: name.current.value,
                    phone: phone.current.value
                }
        ]);

        setModal(null);
    }

    return(
        <>
            <div className="modal showModal">
                <button className="close" onClick={() => setModal(null)}>X</button>
                <h2>New visitor</h2>
                <form onSubmit={handler}>
                    <input type="text" name="name" ref={name} placeholder="Ваше имя" />
                    <input type="text" name="phone" ref={phone} placeholder="Телефон" />
                    <button className="save">Save</button>
                </form>
            </div>
            <div className="overlay"></div>
        </>
    );
}
export default Modal;

