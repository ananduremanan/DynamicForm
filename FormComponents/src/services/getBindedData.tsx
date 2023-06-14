export default function getBindedData(formData: any, jsonData: any) {
    let bindedData: any = "";
  
    formData.forEach((obj: any) => {
      const matchingData = jsonData.find(
        (data: any) => obj.blockId === data.blockId && obj.jsonKey === data.jsonKey
      );
  
      if (matchingData) {
        bindedData = matchingData.value;
      }
      else{
        return ""
      }
    });
  
    return bindedData;
  }
  