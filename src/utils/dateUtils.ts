import { format } from "date-fns";

export const formatDate = (date?: string) => {
  return date ? format(new Date(date), "d MMMM yyyy") : "";
};
