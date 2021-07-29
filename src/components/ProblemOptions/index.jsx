import { ProOptions, DivHeard} from './style';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Paragraph, DivButtons  } from '../index';


const ProblemOptions = () => {
    
    const { question } = useSelector((state) => state.questions);

    const [ qst, setQst ] = useState({});
 
    useEffect(() => {
        if(question){
            setQst(question[0].qsts)
        }
    }, [question, qst])

    return (
        <ProOptions>
            <DivHeard>
            {qst['heard'] && (qst['heard'].split('</NBO>')).map((item, idx) => {
                        return (<Paragraph key={"Opt" + idx}>{item}</Paragraph>);
                    })}
            </DivHeard>
            
            <DivButtons />
        </ProOptions>
    )
}

export default ProblemOptions;