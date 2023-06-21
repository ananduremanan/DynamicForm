import React, { Component } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

// Props Interface. Added as optional and it's not required to be
// present in the object that matches this type..
interface CustomDropdownProps {
  dataSource?: any[] | any; // Accepts array or string (API URL)
  fields?: { text: any; value: any };
  placeholder?: string;
  value?: string;
  onChange?: (event: any) => void;
  className?: string;
  name?: string;
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
    name: "",
  };

  state = {
    data: [], // Holds the fetched data from API
  };

  componentDidMount() {
    const { dataSource } = this.props;
    this.fetchData(dataSource);
  }

  componentDidUpdate(prevProps: CustomDropdownProps) {
    const { dataSource } = this.props;
    if (dataSource !== prevProps.dataSource) {
      this.fetchData(dataSource);
    }
  }

  fetchData = async (dataSource: any[] | string) => {
    if (Array.isArray(dataSource)) {
      // If dataSource is an array, set it as the data directly
      this.setState({ data: dataSource });
    } else if (typeof dataSource === "string") {
      // If dataSource is an API URL, fetch the data from the API
      try {
        const response = await fetch(dataSource);
        const data = await response.json();
        const mappedData = data.map((item: any) => ({
          text: item.title,
          value: item.id.toString(),
        }));
        this.setState({ data: mappedData });
      } catch (error) {
        console.error("Failed to fetch data from API:", error);
      }
    }
  };
  
  render() {
    // Destructure the props and state from the component.
    const { fields, placeholder, value, onChange, className, name } = this.props;
    const { data } = this.state;

    // Render the input field with label.
    return (
      <div>
        <DropDownListComponent
          id="ddlelement"
          dataSource={data}
          fields={fields}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
          name={name}
        />
      </div>
    );
  }
}