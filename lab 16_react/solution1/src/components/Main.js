export default (props) => {
  const tableRows = [];
  props.tasks.forEach((task) => {
    tableRows.push(<tr><td>{task}</td></tr>);
  });
  return(
    <main>
      <table>
        <thead>
          <tr><th>Task</th></tr>        
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </main>
  );
}