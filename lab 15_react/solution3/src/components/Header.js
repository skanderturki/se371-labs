

const Header = (props) => {
  const banner = props.bannerMessage;
  return (
    <header className="App-header">
      <h1>{banner}</h1>
    </header>
  );
}

export default Header;