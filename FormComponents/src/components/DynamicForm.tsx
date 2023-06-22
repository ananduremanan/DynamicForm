import React, { useEffect } from "react";
import jsonData from "../data/valueData.json";
// Redux Imports
import { useDispatch, useSelector } from "react-redux";
// Testing
// import { TextInput } from "../testingComponent/TextInput";
// import { CustomDropdown } from "../testingComponent/CustomDropdown";
// import { setFormData } from "../redux/dataSlice";
// import { RootState } from "../redux/store";

import { TextInput } from "npm-package";
import { CustomDropdown } from "npm-package";
import { setFormData } from "npm-package";
import { RootState } from "../../node_modules/npm-package/src/redux/store";

// Types
interface FormDataBlock {
  blockType: string;
  blockId: string;
  [key: string]: any;
}
interface DynamicFormProps {
  formData: FormDataBlock[];
}
// interface FormState {
//   [key: string]: string;
// }

const DynamicForm: React.FC<DynamicFormProps> = ({ formData }) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);
  // console.log(data);

  useEffect(() => {
    const initialData = formData.map((block) => {
      const { blockId, jsonKey } = block;
      const matchingData = jsonData.find(
        (data) => data.blockId === blockId && data.jsonKey === jsonKey
      );

      const inputValue = matchingData ? matchingData.value : "";

      return {
        blockId,
        jsonKey,
        value: inputValue,
      };
    });

    dispatch(setFormData(initialData));
  }, [dispatch, formData]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(JSON.stringify(data[0]));
  };

  return (
    <div className="wrapper-cls">
      <div className="form-cls">
        <h1>Shipment Info Form</h1>
        {formData.map((block) => {
          const { blockType, blockId, label, jsonKey, ...props } = block;
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
                    jsonKey={jsonKey}
                  />
                </div>
              );
            default:
              return null;
          }
        })}
        <button className="btn-cls" type="submit" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default DynamicForm;
