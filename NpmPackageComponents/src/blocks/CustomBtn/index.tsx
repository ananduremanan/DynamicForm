import React, { Component } from "react";

// Declare the expected props for the CustomBtn component
interface customBtnProps {
  value?: string | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick?: (event: any) => void;
}

// Define and render the button component.
export class CustomBtn extends Component<customBtnProps> {
  render() {
    const { value, type, className, onClick } = this.props;
    return (
      <button type={type} className={className}>
        {value}
      </button>
    );
  }
}