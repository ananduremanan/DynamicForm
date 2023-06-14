import React, { ChangeEvent } from "react";
// Redux Imports
import { useSelector } from "react-redux";
import type { RootState } from "./src/redux/store";

type TextInputProps = {
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  placeholder?: string;
  jsonKey?: any;
};

export const TextInput: React.FC<TextInputProps> = ({
  type = "text",
  value = "",
  onChange = () => {},
  disabled = false,
  required = false,
  className = "",
  name = "",
  placeholder = "",
  jsonKey,
}) => {
  const data = useSelector((state: RootState) => state.data.data);

  const matchingData = data.find(
    (data: any) => data.blockId === name && data.jsonKey === jsonKey
  );

  const jsonVal = data.map((item: any) => {
    return item.value;
  });

  if (matchingData) {
    return (
      <div>
        <input
          type={type}
          value={jsonVal}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={className}
          name={name}
          placeholder={placeholder}
          data-json-key={jsonKey}
        />
      </div>
    );
  } else {
    return (
      <div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={className}
          name={name}
          placeholder={placeholder}
        />
      </div>
    );
  }
};
