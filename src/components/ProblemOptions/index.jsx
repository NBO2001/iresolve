import { ProOptions, DivButtons, ButtonOptions, DivHeard, ButtonOptionsErr, ButtonOptionsAcc} from './style';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Paragraph  } from '../index';


const ProblemOptions = () => {
    
    const { question } = useSelector((state) => state.questions);
    const [ qst, setQst ] = useState({});
    const [ btns, setBtns ] = useState([]);
    
    useEffect(() => {
        if(question){
            setQst(question[0].qsts)

            const retButtons = () => {
                let temp = [];
                qst['options'] && Object.keys(qst['options']).map((key) => 
                    temp.push({
                        id: key,
                        content: qst['options'][key],
                        isCliked: false,
                    })
                )
                setBtns(temp);
            }

            retButtons()
        }
    }, [question, qst])

    const resp = (id) => {
        let temp = [];

        btns.map((btn) => {
            return (id === btn.id)?temp.push({
                id: btn.id,
                content: btn.content,
                isCliked: true,
            }): temp.push({
                id: btn.id,
                content: btn.content,
                isCliked: btn.isCliked,
            });
         })
         setBtns(temp);
    }

    const renderButtons = () => {

       return btns.map((btn) => {
           if(btn.isCliked){
               return (parseInt(btn.id) === parseInt(qst['res']))? (<ButtonOptionsAcc onClick={() => resp(btn.id)} key={btn.id}> {btn.content} </ButtonOptionsAcc>):
               (<ButtonOptionsErr onClick={() => resp(btn.id)} key={btn.id}> {btn.content} </ButtonOptionsErr>);
           }else{
               return(
                   <ButtonOptions onClick={() => resp(btn.id)} key={btn.id}> {btn.content} </ButtonOptions>
               )
           }
        })
    }

    return (
        <ProOptions>
            <DivHeard>
            {qst['heard'] && (qst['heard'].split('</NBO>')).map((item, idx) => {
                        return (<Paragraph key={"Opt" + idx}>{item}</Paragraph>);
                    })}
            </DivHeard>

            <DivButtons>
                {btns.length && renderButtons()}
             </DivButtons>
        </ProOptions>
    )
}

export default ProblemOptions;