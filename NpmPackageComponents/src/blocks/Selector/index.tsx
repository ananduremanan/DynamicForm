// Custom Selector Component
import React from "react";
import { Component } from "react";

// Declare the expected props for the Selector component
interface SelectorProps {
  label?: string;
  action?: any[];
  onSelect?: (value: any) => void;
  className?: string;
}

// Define the Selector component
export class Selector extends Component<SelectorProps> {
  // Handle the change event for the radio inputs
  handleOptionSelect = (event: any) => {
    const { onSelect } = this.props;
    // Extract the selected value from the event target
    const selectedValue = event.target.value;
    // Call the onSelect callback, if provided, with the selected value
    if (onSelect) {
      onSelect(selectedValue);
    }
  };

  render() {
    const { label, action, className } = this.props;
    // Map the action prop to an array of radio inputs
    const actItem = action?.map((act) => {
      return (
        <div key={act}>
          <input
            type="radio"
            id={act}
            name="default"
            value={act}
            onChange={this.handleOptionSelect}
          />{" "}
          {act}
        </div>
      );
    });
    // Render the label and radio inputs wrapped in a div with the provided class name
    return (
      <div className={className}>
        {label} : {actItem}
      </div>
    );
  }
}
