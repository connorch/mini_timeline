import LogData from './assets/log_data.json';
import momentRandom from 'moment-random';

// This is where we would fetch log data from an API or external source,
// but I'm just going to get the JSON data I created for simplicity.
const fetchLogData = () => (
  LogData
    .map(log => ({ ...log, moment: momentRandom() }))
    .sort((a, b) => b.moment.unix() - a.moment.unix())
);

export default fetchLogData;