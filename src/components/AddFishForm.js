import React, { Component } from 'react'

export class AddFishForm extends Component {

    createFish(event) {
        event.preventDefault();
        console.log('gonna make some fis! \u{1F41F}')
    }
  render() {
    return (
      <form className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input type="text" placeholder="Fish Name" />
        <input type="text" placeholder="Fish Price" />
        <select>
            <option value="available">Fresh</option>
            <option value="unavailable">Soud Out</option>
        </select>
        <textarea placeholder="Fish Description"></textarea>
        <input type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm
