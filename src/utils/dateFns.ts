import { formatDistance } from "date-fns";

const getDateFns = (date: string) => {
  const distance = formatDistance(new Date(date), Date.now(), {
    addSuffix: true,
  });
  return distance
    .replace("about", "")
    .replace("almost", "")
    .replace("over", "")
    .replace(RegExp("minute[s]* ago"), "phút trước")
    .replace(RegExp("hour[s]* ago"), "giờ trước")
    .replace(RegExp("day[s]* ago"), "ngày trước")
    .replace(RegExp("month[s]* ago"), "tháng trước")
    .replace(RegExp("year[s]* ago"), "năm trước");
};

export const getDateString = (date: string) => {

  const newDate = new Date(date);
  return newDate.getHours() + ":" + newDate.getMinutes() + " " + newDate.toLocaleDateString('en-GB');
}

export default getDateFns;
