import React , {useContext, } from 'react'

import {PeopleContext} from '../../context/CharacterContext';

function Character() {

    const {peopleSeleted:data} = useContext(PeopleContext)
    // const {data, loading} = peopleSeleted;

    if(Object.keys(data).length === 0) return null

    
    return (
        <div className="container">

            <div className="name mt-4 mb-3 text-center">
                <h2>{data.name}</h2>
            </div>

            <div className="d-flex justify-content-around">
                <div className="card" style={{width: "25%"}}>
                    <div className="card-header">
                        <h5 className="card-title">Detalles</h5>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Nombre: </td>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <td>Año de Nacimiento: </td>
                                    <td>{data.birth_year}</td>
                                </tr>
                                <tr>
                                    <td>Estatura: </td>
                                    <td>{data.height}</td>
                                </tr>
                                <tr>
                                    <td>Planeta de Origen: </td>
                                    <td>{data.namePlanet}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card" style={{width: "25%"}} >
                    <div className="card-header">
                        <h5 className="card-title">Peliculas</h5>
                    </div>
                    <div className="card-body">
                        {
                            data.titlefilms.map( (movie, key) => (
                                <div className="films" key={key}>
                                    <p className="card-text">{movie}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="card" style={{width: "25%"}}>
                    <div className="card-header">
                        <h5 className="card-title">Nave</h5>
                    </div>
                    <div className="card-body">
                        {
                            (data.vehiclesNames === 0) 
                            ?
                                <p className="card-text">No tiene Nave</p>

                            :
                                data.vehiclesNames.map( (vehicle, key) => (
                                    <div className="films" key={key}>
                                        <p className="card-text">{vehicle}</p>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character
