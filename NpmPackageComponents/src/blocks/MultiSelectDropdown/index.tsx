import React from "react";
import {
  MultiSelectComponent,
  ChangeEventArgs,
  CheckBoxSelection,
  Inject,
} from "@syncfusion/ej2-react-dropdowns";
import { Component } from "react";

// Declare the expected props for the MultiSelectDropdown component
interface MultiSelectComponentProps {
  dataSource: any[];
  placeholder?: string;
  fields?: object;
  onChange?: (selectedItems: any) => void;
  className?: string;
}

// Declare the expected state for the MultiSelectDropdown component
interface MultiSelectComponentState {
  selectedItems: any[];
}

// Define the MultiSelectDropdown component
export class MultiSelectDropdown extends Component<
  MultiSelectComponentProps,
  MultiSelectComponentState
> {
  constructor(props: MultiSelectComponentProps) {
    super(props);
    // Initialize the state with an empty array of selected items
    this.state = {
      selectedItems: [],
    };
  }

  // Handle the change event for the MultiSelectComponent
  handleMultiSelectChange = (event: ChangeEventArgs) => {
    const { onChange } = this.props;
    // Extract the selected items from the event arguments
    const selectedItems = event.value as any;
    // Update the state with the new selected items
    this.setState({ selectedItems });
    // Call the onChange callback, if provided
    if (onChange) {
      onChange(selectedItems);
    }
  };

  render() {
    const { dataSource, placeholder, fields, className } = this.props;
    const { selectedItems } = this.state;
    return (
      // Render the MultiSelectComponent with the appropriate props and event handlers
      <MultiSelectComponent
        id="mtselement"
        dataSource={dataSource}
        placeholder={placeholder}
        change={this.handleMultiSelectChange}
        value={selectedItems}
        fields={fields}
        mode="CheckBox"
        className={className}
      >
        {/* Inject the CheckBoxSelection service to enable checkbox mode */}
        <Inject services={[CheckBoxSelection]} />
      </MultiSelectComponent>
    );
  }
}
