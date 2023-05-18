import { CountryModel } from "../../../Models/Country";
import "./CountryCard.css";



interface CountryCardProps{
    country: CountryModel;
}

function CountryCard(props: CountryCardProps): JSX.Element {

    // const getMessage = props.country.capital?.length === 0 && <p>No information available</p> ;
      
    const message = <span className="NotAvailable">Not available</span>;

    return (
        <div className="CountryCard">
			<h3>{props.country.name}</h3>
            <p>Capital: {props.country.capital ? props.country.capital : message}</p>
             <p> Population: {props.country.population.toLocaleString()}</p>
            <p className="center">
                <img className='flag' src={props.country.flags.png} alt={`${props.country.name}'s flag`} />
            </p>

        </div>
    );
}

export default CountryCard;
