export default getDate;

function getDate() {
  let date = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let today = date.toLocaleDateString("en-US", options);
  return today;
}
