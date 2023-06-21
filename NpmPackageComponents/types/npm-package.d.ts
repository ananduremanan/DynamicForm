import React, { Component, ChangeEvent } from "react";

declare module "npm-package" {
  // export interface TextInputProps {
  //   type: string;
  //   label: string;
  //   value: string;
  //   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  //   disabled: boolean;
  //   required: boolean;
  //   className: string;
  //   name: string;
  //   jsonKey: any;
  // }

  // export class TextInput extends Component<TextInputProps> {
  //   static defaultProps: TextInputProps;
  //   render(): JSX.Element;
  // }

  export interface TextInputProps {
    type?: string;
    label?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    name?: string;
    placeholder?: string;
    jsonKey?: any;
  }

  export const TextInput: React.FC<TextInputProps>;

  export interface DatePickerProps {
    placeholder: string;
    value: Date;
    onChange: (event: any) => void;
    className: string;
  }

  export class DatePicker extends Component<DatePickerProps, {}> {
    static defaultProps: DatePickerProps;
    render(): JSX.Element;
  }

  // export interface CustomDropdownProps {
  //   label: string;
  //   dataSource: any[];
  //   fields: { text: any; value: any };
  //   placeholder: string;
  //   value: string;
  //   onChange: (event: any) => void;
  //   className: string;
  //   name: string;
  // }

  // export class CustomDropdown extends Component<CustomDropdownProps, {}> {
  //   static defaultProps: CustomDropdownProps;
  //   render(): JSX.Element;
  // }

  export interface CustomDropdownProps {
    dataSource?: any[] | any;
    fields?: { text: any; value: any };
    placeholder?: string;
    value?: string;
    onChange?: (event: any) => void;
    className?: string;
    name?: string;
    jsonKey?: any;
  }

  export const CustomDropdown: React.FC<CustomDropdownProps>;

  export interface GridProps {
    pageSize: number;
    dataSource: any[];
    allowPaging: boolean;
    columns: any[];
    columnName: string;
    className: string;
  }

  export class Grid extends Component<GridProps> {
    render(): JSX.Element;
  }

  export class CheckBox extends Component<{}> {
    render(): JSX.Element;
  }

  export interface SelectorProps {
    label: string;
    action: any[];
    onSelect: (value: any) => void;
    className: string;
  }

  export class Selector extends Component<SelectorProps> {
    render(): JSX.Element;
  }

  export interface MultiSelectComponentProps {
    dataSource: any[];
    placeholder: string;
    fields: object;
    onChange: (selectedItems: any) => void;
    className: string;
  }

  export class MultiSelectDropdown extends Component<MultiSelectComponentProps> {
    render(): JSX.Element;
  }

  interface TimePickerProps {
    placeholder: string | undefined;
    className: string | undefined;
    minTime: Date | undefined;
    maxTime: Date | undefined;
  }

  export class TimePicker extends Component<TimePickerProps> {
    render(): JSX.Element;
  }

  export interface DataState{
    data: any;
  }

  export function setFormData(
    state: any,
  ): any;
}
