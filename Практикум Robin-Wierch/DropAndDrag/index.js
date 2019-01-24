import React, { PureComponent } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

import { DatePicker } from 'material-ui-pickers';

export default class App extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange (date) {
    this.setState({ selectedDate: date });
  }

  render () {
    const { selectedDate } = this.state;

    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={selectedDate} onChange={this.handleDateChange} />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}
