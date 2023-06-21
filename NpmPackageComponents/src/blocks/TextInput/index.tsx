import React, { ChangeEvent, useState } from "react";
// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setFormData } from "../../redux/dataSlice";

type TextInputProps = {
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  placeholder?: string;
  jsonKey?: any;
};

interface FormState {
  [key: string]: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  disabled = false,
  required = false,
  className = "",
  name = "",
  placeholder = "",
  jsonKey,
}) => {
  const data = useSelector((state: RootState) => state.data.data);
  const dispatch = useDispatch();

  const [value, setValue] = useState<FormState>({});

  const matchingData = data.flat().find((item: any) => {
    return item.blockId === name && item.jsonKey === jsonKey;
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const index = data[0].findIndex(
      (item: any) => item.blockId === name && item.jsonKey === jsonKey
    );
    const updatedData = [...data[0]];
    updatedData[index] = { ...updatedData[index], value };
    dispatch(setFormData(updatedData));
  };

  const inputValue = matchingData ? matchingData.value : value[name] || "";

  return (
    <div>
      <input
        type={type}
        value={value[name] || inputValue}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        className={className}
        name={name}
        placeholder={placeholder}
        data-json-key={jsonKey}
      />
    </div>
  );
};
