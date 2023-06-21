import { enableRipple } from "@syncfusion/ej2-base";
import { CheckBoxComponent, classNames } from "@syncfusion/ej2-react-buttons";
import { Component } from "react";
import * as React from "react";

enableRipple(true);

interface CheckboxProps {
  className?: string;
}

export class CheckBox extends Component<CheckboxProps> {
  render() {
    const { className } = this.props;
    return <CheckBoxComponent className={className} />;
  }
}
