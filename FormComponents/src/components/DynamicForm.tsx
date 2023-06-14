import React, { useState, useEffect } from "react";
import { TextInput, CustomDropdown, DatePicker, CheckBox } from "npm-package";
import jsonData from "../data/valueData.json";
// Redux Imports
import { useDispatch } from "react-redux";
import { setData } from "../../node_modules/npm-package/src/redux/dataSlice";
// import type { RootState } from "../../node_modules/npm-package/src/redux/store";
// Testing
// import { TextInput } from '../testingComponent/TextInput'

// import { setData } from "../redux/dataSlice";
// import { RootState } from "../redux/store";

// Types
interface FormDataBlock {
  blockType: string;
  blockId: string;
  [key: string]: any;
}
interface DynamicFormProps {
  formData: FormDataBlock[];
}
interface FormState {
  [key: string]: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formData }) => {
  // State to store form data
  const [formState, setFormState] = useState<FormState>({});

  // React redux dispatch and useSelector
  const dispatch = useDispatch();
  // const data = useSelector((state: RootState) => state.data.data);

  // Stores JSON data to store on loading page
  useEffect(() => {
    dispatch(setData(jsonData));
  }, [dispatch]);

  // Form HandleInput Function
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // handleSubmit function
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // dispatch(setData(formState));
    console.log(formState);
  };

  return (
    <div className="wrapper-cls">
      <div className="form-cls">
        <h1>Shipment Info Form</h1>
        <form onSubmit={handleSubmit}>
          {formData.map((block) => {
            const { blockType, blockId, label, jsonKey, ...props } = block;

            // Rendering the Dynamic JSON components
            switch (blockType) {
              case "TextBox":
                return (
                  <div key={blockId}>
                    <label htmlFor={blockId}>{label}:</label>
                    <TextInput
                      key={blockId}
                      {...props}
                      type="text"
                      name={blockId}
                      jsonKey={jsonKey}
                      value={formState[blockId] || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                );
              case "DropDown":
                return (
                  <div key={blockId}>
                    <label htmlFor={blockId}>{label}:</label>
                    <CustomDropdown
                      key={blockId}
                      {...props}
                      name={blockId}
                      value={formState[blockId] || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                );
              case "DatePicker":
                return (
                  <div key={blockId}>
                    <label htmlFor={blockId}>{label}:</label>
                    <DatePicker
                      key={blockId}
                      {...props}
                      // value={formState[blockId] || ""} // need updation in the source
                      onChange={handleInputChange}
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
          <button className="btn-cls" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
