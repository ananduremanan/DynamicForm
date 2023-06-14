import React from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  PageSettingsModel,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { Component } from "react";
import { DataUtil } from "@syncfusion/ej2-data";

// Declare the expected props for the Grid component
interface GridProps {
  pageSize?: number;
  dataSource?: any[];
  allowPaging?: boolean;
  columns?: any[] | undefined;
  columnName?: string;
  className?: string;
}

// Define the MultiSelectDropdown component
export class Grid extends Component<GridProps> {
  // initializes an empty string array that will contain the column values
  drop: string[] = [];

  constructor(props: GridProps) {
    super(props);

    // populates the drop array with unique values from the columnName property of dataSource
    if (props.dataSource && props.columnName) {
      this.drop = DataUtil.distinct(
        props.dataSource,
        props.columnName
      ) as string[];
    }
  }

  render() {
    // extracts props from the props object
    const {
      pageSize,
      dataSource,
      allowPaging,
      columns = [],
      className,
    } = this.props;
    const pageSettings: PageSettingsModel = { pageSize: pageSize };

    return (
      // {/* generates the columns of the grid */}
      <GridComponent
        dataSource={dataSource}
        allowPaging={allowPaging}
        pageSettings={pageSettings}
        className={className}
      >
        <ColumnsDirective>
          {columns.map((column) =>
            // if column.template exists, set the template property in ColumnDirective
            column.template ? (
              <ColumnDirective
                key={column.field}
                width={column.width}
                textAlign={column.textAlign}
                headerText={column.headerText}
                template={column.template}
              />
            ) : (
              <ColumnDirective // otherwise, set other required properties in ColumnDirective
                key={column.field}
                field={column.field}
                width={column.width}
                textAlign={column.textAlign}
                format={column.format}
                headerText={column.headerText}
              />
            )
          )}
        </ColumnsDirective>
        {/* enables page, sort, filter, and group functionalities */}
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    );
  }
}
