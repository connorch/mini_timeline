import { red, orange } from '@material-ui/core/colors';

const UrgencyLevels = [
  {
    id: 0,
    name: 'Low',
    color: null
  },
  {
    id: 1,
    name: 'Normal',
    color: null
  },
  {
    id: 2,
    name: 'High',
    color: orange[100]
  },
  {
    id: 3,
    name: 'Critical',
    color: red[100]
  }
];

export default UrgencyLevels