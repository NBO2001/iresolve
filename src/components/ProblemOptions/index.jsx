import { ProOptions, DivHeard} from './style';
import { useSelector } from 'react-redux';
import { Paragraph, DivButtons, Skeleton  } from '../index';

const ProblemOptions = () => {
    
    const { question } = useSelector((state) => state.questions);

    const probHeard = () => {
        return (question[0].qsts.heard.split('</NBO>')).map((item, idx) => {
            return (<Paragraph key={"Opt" + idx}>{item}</Paragraph>);
        })
    }

    return (
        <ProOptions>
            <DivHeard>
            {question ? probHeard(): <Skeleton height={'50px'} width={'95vw'} />}
            </DivHeard>
            
            <DivButtons />
        </ProOptions>
    )
}

export default ProblemOptions;