export default (data: any) => {
  const newData = JSON.stringify(data);
  return JSON.parse(newData);
};
