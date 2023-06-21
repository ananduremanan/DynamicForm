// Custom Text Component
import React, { Component, ChangeEvent } from "react";

// Props Type. Added as optional and it's not required to be
// present in the object that matches this type..
type TextInputProps = {
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?:string;
  placeholder?:string;
  blockId?: number;
  jsonKey?: string;
};

//  Define the TextInput component as a class component.
export class TextInput extends Component<TextInputProps> {
  // default values for the props. If not passed from child these values
  // will act as defaults.
  static defaultProps = {
    type: "text",
    value: "",
    onChange: () => {},
    disabled: false,
    required: false,
    className: "",
    name: "",
    placeholder: "",
  };
  
  render() {
    // Destructure the props from the component.
    const { type, value, onChange, disabled, required, className, name, placeholder } = this.props;
    // Render the input field with label.
    return (
      <div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={className}
          name={name}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
