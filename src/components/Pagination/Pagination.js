import React, {useContext} from 'react';
import Pagination from '@material-ui/lab/Pagination';

import {PeopleContext} from '../../context/CharacterContext';

const PaginationComponent = ({ totalPosts }) => {

    const {setnumberPage, numberPage} = useContext(PeopleContext)    

    const handleChange = (event, value) => {
        setnumberPage(value);
    }

    return (
        <div className="d-flex justify-content-center col-12 mt-5 ml-2">
            <ul className='pagination'>

                <Pagination 
                    count={totalPosts}  
                    onChange={handleChange}
                    defaultPage={numberPage}
                    variant="outlined" 
                    color="secondary"
                />

            </ul>            
        </div>
    );
};

export default PaginationComponent;