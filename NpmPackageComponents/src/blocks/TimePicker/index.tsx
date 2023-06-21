import React, { Component } from "react";
import { enableRipple } from "@syncfusion/ej2-base";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

interface TimePickerProps {
  placeholder?: string | undefined;
  className?: string | undefined;
  minTime?: Date | undefined;
  maxTime?: Date | undefined;
}

// enable ripple effect
enableRipple(true);

export class TimePicker extends Component<TimePickerProps> {
  render() {
    const { placeholder, className, minTime, maxTime } = this.props;
    return (
      <TimePickerComponent
        id="timepicker"
        placeholder={placeholder}
        min={minTime}
        max={maxTime}
        className={className}
      />
    );
  }
}
