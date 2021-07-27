import { Conteinner } from './style';
import { useState, useEffect } from 'react'
import {  useSelector } from "react-redux";
import { Imagen, Paragraph } from '../index';

const ProblemHeard = () => {
    const  {question}  = useSelector((state) => state.questions);

    const [ problem, setProblem ] = useState({})
    
    useEffect(() => {
        if(question){
            setProblem(question[0].problem);
        }
    },[question])
 

    const retHeard = () => {
        if(problem){
            const content = problem.partOne;
            const img = problem.partTwo;
             return (
               <>
                   <Paragraph>{ content }</Paragraph>
                    {img && (<Imagen src={img} alt='img'/>)}
                    
               </>
            )
        }
       
    }

    return(
        <Conteinner>
            {retHeard()}
        </Conteinner>
    )
}

export default ProblemHeard;