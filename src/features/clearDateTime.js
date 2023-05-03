export const clearDateTime = (dateTime) => {
  let date = '';
  if (dateTime !== null) {
    date = dateTime.replace(/[T]/gi, ' ');
    return date;
  }
};
