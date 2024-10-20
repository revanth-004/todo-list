module.exports.getDate = getDate;

function getDate(){
  let today = new Date();
  let options={
    weekday: "long",
    day:"numeric",
    month:"long"
  };
  let curDay=today.toLocaleDateString("en-US",options);
  return curDay;
}
