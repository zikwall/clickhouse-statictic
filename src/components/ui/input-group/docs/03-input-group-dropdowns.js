import React from "react";
import {
  InputGroup,
  FormInput,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "ui";

export default class InputGroupDropdownExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <InputGroup>
        <FormInput />
        <Dropdown
          addonType="append"
          open={this.state.open}
          toggle={this.toggle}
        >
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </InputGroup>
    );
  }
}
