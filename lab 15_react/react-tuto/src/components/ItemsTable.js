import './ItemsTable.css'

const ItemsTable = (props) => {
  const tableRows = [];
  props.items.forEach(item => {
    tableRows.push(<tr key={item.id}><td>{item.id}</td><td>{item.content}</td></tr>);
  });
  return(
    <table className="items-table">
      <thead>
        <tr><th>Id</th><th>Content</th></tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

export default ItemsTable;