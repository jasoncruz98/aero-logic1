import { useEffect, useState } from 'react';
import { Riddle } from './domain/riddles/RiddleService';
import { fetchSingleRiddle } from './domain/riddles/RiddleAdapter';
import { useParams } from 'react-router-dom';

export const RiddlePage = () => {
    const { riddleId } = useParams() as { riddleId: string };
    const [riddle, setRiddle] = useState<Riddle>();

    useEffect(() => {
        fetchSingleRiddle(riddleId).then(setRiddle);
    }, []);

    return <div>{riddle?.contents}</div>;
};
