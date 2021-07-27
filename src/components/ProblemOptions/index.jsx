import { ProOptions} from './style';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Paragraph  } from '../index';


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
            <div>
            {qst['heard'] && (qst['heard'].split('</NBO>')).map((item, idx) => {
                        return (<Paragraph key={"Opt" + idx}>{item}</Paragraph>);
                    })}
            </div>
            <div>
                { qst['options'] && Object.keys(qst['options']).map((key) => {
                    return (
                        <button key={key}> {qst['options'][key]} </button>
                    )
                })}
            </div>
        </ProOptions>
    )
}

export default ProblemOptions;