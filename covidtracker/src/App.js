import { MenuItem, Select } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Covid-19 Tracker</h1>

      <FormControl className='app__dropdown'>
        <Select variant='outlined' value={'abc'}>
          <MenuItem value='Wrldwide'>WorldWide</MenuItem>
        </Select>
      </FormControl>
      {/* SCREEN GOES BLANK WHEN FORM CONTROL IS USED. FIX THIS */}

      {/*HEADER*/}
      {/*TITLE + SELECT INPUT DROPDOWN FIELD*/}

      {/*INFO BOXES*/}
      {/*INFO BOXES*/}
      {/*INFO BOXES*/}

      {/*TABLE*/}
      {/*GRAPH*/}

      {/*MAP*/}


    </div>
  );
}

export default App;
