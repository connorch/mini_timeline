import LogData from './assets/log_data.json';
import momentRandom from 'moment-random';

// This is where we'd do a server AJAX call, or get log data from somewhere.
// We're just going to get the JSON data I created for simplicity.
const getLogData = () => LogData.map(log => ({ ...log, moment: momentRandom() })).sort((a, b) => b.moment.unix() - a.moment.unix());

export default getLogData;