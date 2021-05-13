import React, { createContext , useState, useEffect} from 'react';
import axios from 'axios';

export const PeopleContext = createContext();

const PeopleProvider = (props) => {

    const [numberPage, setnumberPage] = useState(1);
    const [character, setCharacter ] = useState({
        loading: false,
        data: []
    })
    const [url_peopleSeleted, setUrlPeopleSeleted] = useState('');
    const [peopleSeleted, setPeopleSeleted] = useState([]);

    // obtener todo los personajes
    useEffect(() => {
        const getCharacter = async () => {
            const urlPage = `http://swapi.dev/api/people/?page=${numberPage}`;

            //obtengo valores
            const {data} = await axios.get(urlPage);
            //traspaso el array de data llamado resultado
            setCharacter({
                data: data,
                loading: true
            })
        }
        getCharacter();
    }, [numberPage]);

    //obtener a personaje seleccionado
    useEffect(() => {

        //obtener nombre de planeta de origen
        const getHomeWorld = async (data, urlHomeWorld) => {

            const {data:planet} = await axios.get(urlHomeWorld);

            data.namePlanet = planet.name;
        }

        //obtener nombres de las peliculas
        const getFilmsName = async (data, films) => {
            const titleMovie = []
            for (let i = 0; i < films.length; i++) {
                const {data:movie} = await axios.get(films[i]);

                titleMovie.push(movie.title)
            }
            data.titlefilms = titleMovie
        }

        const getVehiclesName = async (data, vehicle) => {
            const vehicleName = [];
            for (let i = 0; i < vehicle.length; i++) {
                const {data:vehicle_name} = await axios.get(vehicle[i]);

                vehicleName.push(`${vehicle_name.name} (${vehicle_name.model})` )
            }
            data.vehiclesNames=vehicleName
        }
        //agrega data de peliculas, planeta...
        const addDataCharacter = async (data) => {
            
            if(Object.keys(data).length !==0)
            {
                const urlHomeWorld = data.homeworld;
                //obtener nombre de planeta de origen
                if(urlHomeWorld !== ''){
                    await getHomeWorld(data, urlHomeWorld)
                }
                //obtener nombre de las peliculas del personaje
                if(data.films.length !== 0){
                    await getFilmsName(data, data.films)
                }
                //obtener nombre de las naves que tripulan
                if(data.vehicles.length !== 0){
                    await getVehiclesName(data, data.vehicles)
                }
                else
                {
                    data.vehiclesNames = 0;
                }
            }
        }

        //consulta principal del personaje
        const getCharacterSelected = async () => {
            const url = url_peopleSeleted
            //obtengo valores
            const {data} = await axios.get(url);

            await addDataCharacter(data)

            //traspaso el info de data
            setPeopleSeleted(data)
        }

        if(url_peopleSeleted !== ''){
            getCharacterSelected()
        }

    }, [url_peopleSeleted]);

    return (
        <PeopleContext.Provider
            value={{
                setnumberPage,
                setUrlPeopleSeleted,
                setCharacter,
                setPeopleSeleted,
                character,
                peopleSeleted,
                numberPage
            }}
        >
            {props.children}
        </PeopleContext.Provider>
    )
}
export default PeopleProvider;
