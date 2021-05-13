import React, {useContext} from 'react'
import { Link } from "react-router-dom";

import {PeopleContext} from '../../context/CharacterContext';

function CharacterList({People}) {

    const {setUrlPeopleSeleted} = useContext(PeopleContext)

    return (
        <>
            {
                People.map((data, key) => (
                    <Link 
                            to="/Character"
                            key={key}
                    >
                        <p 
                            onClick={() => setUrlPeopleSeleted(data.url)} 
                        >{data.name}</p>
                    </Link>
                    
                ))
            }
        </>
    )
}

export default CharacterList
