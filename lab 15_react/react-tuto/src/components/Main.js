import ItemsTable from './ItemsTable';

const Main = (props) => {
  return(
    <main>
      <h1>Main ....</h1>
      <ItemsTable items={props.tasks}/>
    </main>
  );
};

export default Main;