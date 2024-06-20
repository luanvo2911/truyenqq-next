import { Status } from "../api/static";

const statusTranslate = (status: string) => {
  switch (status) {
    case Status.CANCELLED:
      return "Hủy";
    case Status.COMPLETED:
      return "Hoàn thành";
    case Status.HIATUS:
      return "Tạm hoãn";
    case Status.ONGOING:
      return "Đang cập nhật";
  }
};
