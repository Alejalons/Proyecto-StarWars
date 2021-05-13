import React, {useState, useContext, useEffect} from 'react'
import PaginationComponent from './../Pagination/Pagination'
import CharacterList from './CharacterList';
import Loading from '../Loading/Loading';

import {PeopleContext} from '../../context/CharacterContext';

function Problem_2() {

    const {character, setPeopleSeleted} = useContext(PeopleContext)
    const {data, loading} = character;
    const {results} = data;
    const [totalPosts] = useState(9); //numero de items
    
    useEffect(() => {
        setPeopleSeleted([])
    }, [])

    
    return (
        <div className="container">
            <div className="title col-12">
                <h3>StarWars - Personajes</h3>
            </div>

            <div className="details d-flex justify-content-center">
                <div className="character col-6 mt-5 text-center">
                    {
                        (loading)
                        ?
                            <CharacterList 
                                People = {results}
                            />
                        :
                            <div className="d-flex justify-content-center">
                                    <Loading />
                            </div>
                    }
                    <PaginationComponent                                            
                        totalPosts={totalPosts}
                    />
                </div>
            </div> 
        </div>
    )
}

export default Problem_2
