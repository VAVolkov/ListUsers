
const TableRow = ({count, id, name, phone}) => {
    

	return (
        <>
        <div className="tableRow">
            <div className="userNumber">{count}</div>
            <div className="userName">{name}</div>
            <div className="userPhone">{phone}</div>
        </div>
        </>
	);
};

export default TableRow;