const formatDate = (date: string): string => {
  const dateInDateMode = new Date(date);

  const year = dateInDateMode.getFullYear();
  const month = dateInDateMode.getMonth();
  const dt = dateInDateMode.getDate();

  let rightMonth;
  let rightDay;

  if (dt < 10) {
    rightDay = `0${dt}`;
  } else {
    rightDay = dt;
  }
  if (month < 10) {
    rightMonth = `0${month}`;
  } else {
    rightMonth = month;
  }

  return `${rightDay}/${rightMonth}/${year}`;
};

export default formatDate;
