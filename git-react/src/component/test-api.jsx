import { useState } from "react";

const Testapi = () => {
    const [team, setTeam] = useState([])

    const getTeam = () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e05d41ce75msh11f41ef3fab7ecep17662ejsnda5c0502c86b',
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };

        const url = 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2020&team=33';

        fetch(url, options)
            .then(response => response.json())
            .then(response => console.log(response));
    }
    return (
        <button onClick={getTeam}>Click</button>
    )
}

export default Testapi;