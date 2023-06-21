// Custom DatePicker Component
import React, { Component } from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

// Declare the expected props for the DatePicker component
interface DatePickerProps {
  placeholder?: string;
  value?: any;
  onChange?: (event: any) => void;
  className?: string;
}

// Define the DatePicker component
export class DatePicker extends Component<DatePickerProps, {}> {
  static defaultProps = {
    placeholder: "",
    value: null,
    onChange: () => {},
  };
  public render() {
    const { placeholder, value, onChange, className } = this.props;
    return (
      <div>
        {/* Render the DatePicker Component with the appropriate props and event
        handlers */}
        <DatePickerComponent
          id="datepicker"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
        />
      </div>
    );
  }
}
