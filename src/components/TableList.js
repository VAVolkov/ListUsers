import TableRow from "./TableRow";

const TableList = ({form}) => {
    
    return (
        <>
            {form.map((item,i) => <TableRow key = {item.id} {...item} count = {i+1} />)}
        </>
    );

};

export default TableList;