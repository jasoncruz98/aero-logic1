import { createLandingPageViewModel } from './LandingPageService';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRiddleCollection } from './domain/riddles/RiddleAdapter';
import { RiddlesCollection } from './domain/riddles/RiddleService';

export const LandingPage = () => {
    const [collection, setCollection] = useState<RiddlesCollection>([]);
    const { workInterval, timestamp, randomRiddle } = createLandingPageViewModel(
        new Date(),
        collection,
    );

    useEffect(() => {
        fetchRiddleCollection().then(setCollection);
    }, []);

    return (
        <>
            <div data-test="work-interval">Work interval: {workInterval}</div>
            <div data-test="timestamp">Timestamp: {timestamp}</div>
            <p data-test="welcome-message">Welcome</p>
            {randomRiddle && (
                <Link to={`/riddle/${randomRiddle?.id}`} data-test="random-riddle">
                    Play Random Riddle
                </Link>
            )}
        </>
    );
};
