import React, { useEffect, useRef } from 'react'
import api from '../../config';
import { useDispatch } from 'react-redux';
import { setQuestion } from '../../redux/modules/questions';
import { setButton } from '../../redux/modules/buttons';
import { ProblemHeard, ProblemOptions, ButtonOptions } from '../../components';
import { Wrapper } from './style';

function Home() {

    const isMount = useRef(true);

    const dispatch = useDispatch();

    const novaQuest = async () => {
        dispatch(setQuestion());
        dispatch(setButton());
        await api.get('/question').then( async function (res) {
            if(isMount){
                const { data } = res;
                await dispatch(setQuestion(data));
            }
        }).catch( function (err) {
                
        })
    }

    useEffect(() => {
        const findQuestion = async () => {
            await api.get('/question').then( async function (res) {
                if(isMount){
                    const { data } = res;
                    await dispatch(setQuestion(data));
                }
            }).catch( function (err) {
                    
            })
        }
        findQuestion()
        return (
            isMount.current = false
        )
    },[dispatch]);

    return (
        <Wrapper>
            <ProblemHeard />
            <ProblemOptions />
            <ButtonOptions onClick={() => novaQuest()}>New Question</ButtonOptions>
        </Wrapper>
    )
}
export default Home;