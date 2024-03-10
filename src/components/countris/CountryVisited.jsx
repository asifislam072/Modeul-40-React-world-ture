
const CountryVisited = ({country}) => {
    const {name} = country
    console.log(country)
    return (
        <div>
            <p>{name.common}</p>
        </div>
    );
};

export default CountryVisited;