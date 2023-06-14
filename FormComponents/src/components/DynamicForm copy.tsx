import React, { useState } from "react";
import { TextInput, CustomDropdown, DatePicker, CheckBox } from "npm-package";
import styled from "styled-components";
import jsonData from "../data/valueData.json";
import getBindedData from "../services/getBindedData";

const Wrapper = styled.div`
  padding: 10px 100px 0 100px;
`;

const FormBody = styled.div`
  display: inline-block;
  flex-direction: column;
  text-align: left;
  border: 1px solid black;
  padding: 1rem;
`;

const FormElement = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  border: none;
  background: pink;
  width: 100%;
  padding: 0.4rem;
  margin-top: 0.4rem;
  cursor: pointer;
  border-radius: 2rem;
`;

interface FormDataBlock {
  blockType: string;
  blockId: string;
  [key: string]: any;
}

interface DynamicFormProps {
  formData: FormDataBlock[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formData }) => {
  const [formState, setFormState] = useState({
    itemName: "",
    itemWeight: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <Wrapper>
      <FormBody>
        <h1>Shipment Info Form</h1>
        <form onSubmit={handleSubmit}>
          {formData.map((block) => {
            const { blockType, blockId, label, jsonKey, ...props } = block;

            // Rendering the JSON components
            switch (blockType) {
              case "TextBox":
                const matchingData = jsonData.find(
                  (data) => data.blockId === blockId && data.jsonKey === jsonKey
                );
                if (matchingData) {
                  return (
                    <FormElement key={blockId}>
                      <label htmlFor={blockId}>{label}:</label>
                      <TextInput
                        key={blockId}
                        {...props}
                        type="text"
                        name="itemName"
                        value={getBindedData(formData, jsonData)}
                        onChange={handleInputChange}
                      />
                    </FormElement>
                  );
                } else {
                  return (
                    <FormElement key={blockId}>
                      <label htmlFor={blockId}>{label}:</label>
                      <TextInput
                        key={blockId}
                        {...props}
                        type="text"
                        name="itemName"
                        value={formState.itemName}
                        onChange={handleInputChange}
                      />
                    </FormElement>
                  );
                }
              case "DropDown":
                return (
                  <FormElement key={blockId}>
                    <label htmlFor={blockId}>{label}:</label>
                    <CustomDropdown
                      key={blockId}
                      {...props}
                      // value={formState[blockId] || ""}
                    />
                  </FormElement>
                );
              case "DatePicker":
                return (
                  <FormElement key={blockId}>
                    <label htmlFor={blockId}>{label}:</label>
                    <DatePicker
                      key={blockId}
                      {...props}
                      // value={formState[blockId] || ""}
                      onChange={handleInputChange}
                    />
                  </FormElement>
                );
              case "CheckBox":
                return (
                  <FormElement key={blockId}>
                    <label htmlFor={blockId}>{label}:</label>
                    Agree:
                    <CheckBox
                      key={blockId}
                      {...props}
                      // checked={value === "Agree"}
                    />
                  </FormElement>
                );
              default:
                return null;
            }
          })}
          <Button type="submit">Submit</Button>
        </form>
      </FormBody>
    </Wrapper>
  );
};

export default DynamicForm;
