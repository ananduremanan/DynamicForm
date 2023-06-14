// Custom Dropdown component
import React, { Component } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

// Props Interface. Added as optional and it's not required to be
// present in the object that matches this type..
interface CustomDropdownProps {
  dataSource?: any[];
  fields?: { text: any; value: any };
  placeholder?: string;
  value?: string;
  onChange?: (event: any) => void;
  className?: string;
}

//  Define the Dropdown component as a class component.
export class CustomDropdown extends Component<CustomDropdownProps, {}> {
  // default values for the props. If not passed from child these values
  // will act as defaults.
  static defaultProps = {
    label: "",
    placeholder: "",
    value: "",
    onChange: () => {},
    className: "",
  };
  render() {
    // Destructure the props from the component.
    const { dataSource, fields, placeholder, value, onChange, className } =
      this.props;

    // Render the input field with label.
    return (
      <div>
        <DropDownListComponent
          id="ddlelement"
          dataSource={dataSource}
          fields={fields}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
        />
      </div>
    );
  }
}
