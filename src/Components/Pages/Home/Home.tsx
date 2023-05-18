import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
			 
      <p className="HomePage-description">
        Oh, hello there! this magnificent test website created by Liat Greenwald.
      </p>
       
      
      <p className="HomePage-description">
      when you're done exploring this homepage, feel free to venture into the other pages of this website. There's a whole world waiting for you to discover. Just click Menu links.  
      </p>
      <img
        className="HomePage-image"
        src="https://media3.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"
        alt="Funny Image"
      />
    </div>
  );
}


export default Home;
