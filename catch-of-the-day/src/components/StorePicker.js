import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        { /* Hello */ }
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" default value = {getFunName()} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
