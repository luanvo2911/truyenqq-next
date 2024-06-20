import { formatDistance } from "date-fns";

const getDateFns = (date: string) => {
  const distance = formatDistance(new Date(date), Date.now(), {
    addSuffix: true,
  });
  return distance
    .replace("about", "")
    .replace(RegExp("minute[s]* ago"), "phút trước")
    .replace(RegExp("hour[s]* ago"), "giờ trước")
    .replace(RegExp("day[s]* ago"), "ngày trước")
    .replace(RegExp("month[s]* ago"), "tháng trước");
};

export default getDateFns;
