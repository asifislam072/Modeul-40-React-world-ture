import { useState } from "react";
import '../grid.css'
import "./Country.css"

const Countrie = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country
    const coun = {
        border: '2px solid black',
        borderRadius: '15px',
        margin: '15px',
        padding: '15px'
    }

    const visited={
        backgroundColor:'black',
        color:'white'
    }
    // console.log(handleVisitedCountry)
    // console.log(country)

    const [visit, setvisit] = useState(false)

    const handleVisited = () =>{
        // not Undeustent This conditon 
        setvisit(!visit)
    }




    return (
        <div className="country">
            <h4>Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <h4>Population:{population}</h4>
            <h4>Area:{area}</h4>
            <h4>Code:{cca3}</h4>
            <button>add Detailks</button>
            <button style={visited} onClick={handleVisited}>{visit ? 'Visite':'Going'}</button>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Country</button>
            <hr />
            {visit ? 'We count to you' : 'I Want Go'}
        </div>
    );
};

export default Countrie;