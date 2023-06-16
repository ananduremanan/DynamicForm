import React, { useState, useEffect } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setFormData } from "../redux/dataSlice";

type CustomDropdownProps = {
  dataSource?: any[] | any; // Accepts array or string (API URL)
  fields?: { text: any; value: any };
  placeholder?: string;
  value?: string;
  onChange?: (event: any) => void;
  className?: string;
  name?: string;
  jsonKey?: any;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  dataSource,
  fields,
  placeholder,
  value,
  onChange,
  className,
  name,
  jsonKey,
}) => {
  const [data, setData] = useState<any[]>([]);
  const storeData = useSelector((state: RootState) => state.data.data);
  console.log(storeData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(dataSource);
  }, [dataSource]);

  const fetchData = async (dataSource: any[] | string) => {
    if (Array.isArray(dataSource)) {
      // If dataSource is an array, set it as the data directly
      setData(dataSource);
    } else if (typeof dataSource === "string") {
      // If dataSource is an API URL, fetch the data from the API
      try {
        const response = await fetch(dataSource);
        const data = await response.json();
        const mappedData = data.map((item: any) => ({
          text: item.title,
          value: item.id.toString(),
        }));
        setData(mappedData);
      } catch (error) {
        console.error("Failed to fetch data from API:", error);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const{name, value} = event.target;
    const index = storeData[0].findIndex(
      (item: any) => item.blockId === name && item.jsonKey === jsonKey
    );
    const updatedData = [...storeData[0]];
    updatedData[index] = {...updatedData[index], value };
    dispatch(setFormData(updatedData));
  }

  return (
    <div>
      <DropDownListComponent
        id="ddlelement"
        dataSource={data}
        fields={fields}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={className}
        name={name}
      />
    </div>
  );
};
