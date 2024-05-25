export const convertToIsoDateInString = (date) => {
  if (!date) return null;
  return date.toISOString().split("T")[0];
};

export const convertIsoDateToNoon = (isoDate) => {
  if (!isoDate) return null;
  const date = new Date(isoDate);
  date.setHours(12, 0, 0, 0);
  return date;
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

export const convertISOToDate = (isoDate) => {
  let date = new Date(isoDate);
  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
