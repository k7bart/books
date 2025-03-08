import { format, toZonedTime } from "date-fns-tz";

export const formatDatetime = (
  datetime: string | null,
  timezone: string
): string =>
  datetime
    ? format(toZonedTime(datetime, timezone), "d MMMM yyyy, h:mmaaa")
        .replace("am", "AM")
        .replace("pm", "PM")
    : "--";
