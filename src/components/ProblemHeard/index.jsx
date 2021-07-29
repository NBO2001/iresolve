import { Conteinner } from './style';
import {  useSelector } from "react-redux";
import { Imagen, Paragraph, Loader } from '../index';

const ProblemHeard = () => {
    const  {question}  = useSelector((state) => state.questions);
    
    const retHeard = () => {
        if(question){
            const content = question[0].problem.partOne;
            const img = question[0].problem.partTwo;
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
            {question? retHeard(): <Loader />}
        </Conteinner>
    )
}

export default ProblemHeard;