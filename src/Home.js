const Home = () => {
    let name = 'mario'

  const handleClick = () => {
    console.log('Hello, Beautiful!');
  }  

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;