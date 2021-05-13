import React, {useState, useEffect} from 'react'
import Result from './Result';

function Problema_1() {

    
    const [number, setNumber] = useState([]);

    //UseEffect se ejecuta cuando carga el componente
    useEffect(()  => {
        const num = [1]

        const FizzBuzz = n => {
            if( n % 3 === 0 && n % 5 === 0)
            {
                num.push('fizzbuzz')
            }
            else if (n % 5 === 0) 
            {
                num.push('buzz')
            }
            else if(n % 3 === 0)
            {
                num.push('fizz')
            }
            else
            {
                num.push(n)
            }
        }

        const setNum = async () =>{
            for (let i = 2; i < 101; i++) {
                await FizzBuzz(i)
            }
            setNumber(num);
        }
        setNum();
    }, [])

    return (
        <div>
            <Result 
                numbers= {number}
            />
        </div>
    )
}

export default Problema_1
