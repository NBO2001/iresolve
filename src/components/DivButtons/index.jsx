import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ButtonOptions, ButtonOptionsErr, ButtonOptionsAcc, Skeleton } from '../index';
import { setButton } from '../../redux/modules/buttons';
import { DivButton } from './styled';



const DivButtons = () => {
    const { question } = useSelector((state) => state.questions);
    const { buttonVal } = useSelector((state) => state.button);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(question){
            const retButtons = () => {
                let temp = [];
                question[0].qsts.options && Object.keys(question[0].qsts.options).map((key) => 
                    temp.push({
                        id: key,
                        content: question[0].qsts.options[key],
                        isCliked: false,
                    })
                )
                dispatch(setButton(temp))
            }

            retButtons()
        }
       
    }, [question, dispatch])

    const resp = (id) => {
        let temp = [];

        buttonVal.map((btn) => {
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
         dispatch(setButton(temp))
    }

    const renderButtons = () => {

            return buttonVal.map((btn) => {       
                if(btn.isCliked){
                    return (parseInt(btn.id) === parseInt(question[0].qsts.res))? (<ButtonOptionsAcc onClick={() => resp(btn.id)} key={btn.id}> {btn.content} </ButtonOptionsAcc>):
                    (<ButtonOptionsErr onClick={() => resp(btn.id)} key={btn.id}> {btn.content} </ButtonOptionsErr>);
                }else{
                    return(
                        <ButtonOptions onClick={() => resp(btn.id)} key={btn.id}> {btn.content} </ButtonOptions>
                    )
                }
             })
   
     }

    return(
        <DivButton>
            {buttonVal? renderButtons(): <Skeleton height={'50px'} width={'85vw'}/>}
        </DivButton>
    )
}   

export default DivButtons;