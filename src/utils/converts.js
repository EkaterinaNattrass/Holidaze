export const convertToIsoDateInString = (date) => {
    if (!date) return null;
    date.setHours(1);
    return date.toISOString().split("T")[0];
  };
  
  export const convertIsoDateToNoon = (date) => {
    if (!date) return null;
    return date.replace(/\d\d:\d\d:\d\d\.\d\d\d/, "12:00:00.000");
  };
  

  export const convertFromDateToIsoOutput = (date) => {
    if (!date) return null;
    date.setHours(1);
    return `${date.getUTCDate()}.${
      date.getUTCMonth() + 1
    }.${date.getUTCFullYear()}`;
  };
  
  export const convertFromStringToIsoOutput = (date) => {
    if (!date) return null;
    const [year, month, day] = date.slice(0, 10).split("-");
    return `${day}.${month}.${year}`;
  };