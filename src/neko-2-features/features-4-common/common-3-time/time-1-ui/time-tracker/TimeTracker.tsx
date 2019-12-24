import React, {useEffect, useState} from 'react';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import moment, {Moment} from "moment";

interface ITimeTestProps {

}

const tF = 'HH:mm:ss';
const tFs = 'HH:mm:ss:SSS';

const TimeTracker: React.FC<ITimeTestProps> = (
    {

    }
) => {
    const [time, setTime] = useState(moment());
    const [startTime, setStartTime] = useState(time);
    const [endTime, setEndTime] = useState(time);
    const [state, setState] = useState<'stop' | 'pause' | 'play'>('stop');
    const [intervals, addInterval] = useState<Moment[]>([]);
    const [pauseTime, setPauseTime] = useState<Moment>(moment.utc(0));
    // startPause, stopPause, intervalTime, moment + moment?

    useEffect(() => {
        if (state === 'stop') setStartTime(time)
    }, [time, state]);
    useEffect(() => {
        const timer = setInterval(() => {
            const t = moment();
            setTime(t);
            setEndTime(t);
        }, 4);
        return () => clearInterval(timer);
    }, []);

    const r = moment.utc(endTime.diff(startTime)); // without tz
    const switchTimer = () => {
        if (state === 'play') addInterval([...intervals, r]);
        setState(state === 'stop' ? 'play' : 'stop');
    };


    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            time tracker

            <div>
                ({moment(time).format(tF)})
            </div>

            <div>
                ({startTime.format(tF)})-({endTime.format(tF)})=({r.format(tFs)})
            </div>

            <button onClick={switchTimer}>{state === 'stop' ? 'play' : 'stop'}</button>
            {intervals.map((inte, i) => <div key={i}>{inte.format(tFs)}</div>)}

        </div>
    );
};

export default TimeTracker;
