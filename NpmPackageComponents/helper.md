| Component Name    | Expected Props                                                                                                                             
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------
| CheckBox          | className: string.                                                                                                                         
| CustomBtn         | value: string, type: string, classname: string, onClick: function[(event: any) => void].                                                    
| DatePicker        | placeholder: string, value: any, onChange: function[(event: any) => void], className: string.                                               
| Dropdown          | dataSource*: any[], fields: { text: any; value: any }, placeholder: string, value: string, onChange: function[(event: any) => void], className: string. 
| Grid              | dataSource*: any[], pageSize: number, allowPaging: boolean, columns: any[] | undefined, columnName: string, className: string.                
| MultiSelectDropdow| dataSource*: any[], placeholder: string, fields: object, onChange: function[(event: any) => void], className: string.                       
| Selector          | label: string, action: any[], onSelect: function[(event: any) => void], className: string.                                                  
| TextInput         | type: string, value: string, onChange: function[(event: any) => void], disabled: boolean, required: boolean, className: string.    


=> Maximize your screen for a better view.
=> Props with '*' are mandatory, rest will be optional.