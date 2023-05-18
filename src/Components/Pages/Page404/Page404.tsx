import { Link } from "react-router-dom";
import "./Page404.css";

function Page404(): JSX.Element {
    return (
        
        <div className="Page404">
            <h3>Oops! Looks like you've taken a coffee plunge into the unknown.</h3>
			<h3> Let us help you find your way back. <Link to="/" className="coffeeBeanLink">
          <span className="coffeeBean" role="img" aria-label="coffee bean">
            ☕️
          </span>
        </Link></h3>
            <div className="centerColumn">
        <img src="https://media.giphy.com/media/ge2ckPYYtHJX5mdgiY/giphy.gif" alt="coffee" />
              
      </div>
        </div>
    );
}

export default Page404;
