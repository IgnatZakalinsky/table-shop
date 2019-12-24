import React from 'react';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import moment, {Moment} from "moment";
import TimeTrackerContainer from "./time-tracker/TimeTrackerContainer";

interface ITimeTestProps {
    time: Date;
    time1: Moment;
    time2: Moment;
    newTime: Moment;

    setTime1: (time: Moment) => void;
    setTime2: (time: Moment) => void;
}

const TimeTest: React.FC<ITimeTestProps> = (
    {
        time,
        time1,
        time2,
        newTime,

        setTime1,
        setTime2,
    }
) => {


    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            time

            <div>{moment(time).format('HH:mm:ss')}</div>

            <input type={'time'} onChange={e => console.log(e.currentTarget.value)}/>

            <div>
                <div style={{width: '116px', display: 'inline-block'}}>
                    <TimePicker value={time1} onChange={setTime1} format={'dddd HH:mm:ss'}/>
                </div>
                ---
                <div style={{width: '80px', display: 'inline-block'}}>
                    <TimePicker value={time2} onChange={setTime2}/>
                </div>
                ===
                <div style={{width: '80px', display: 'inline-block'}}>
                    <TimePicker value={newTime}/>
                </div>
            </div>

            <TimeTrackerContainer/>
        </div>
    );
};

export default TimeTest;
