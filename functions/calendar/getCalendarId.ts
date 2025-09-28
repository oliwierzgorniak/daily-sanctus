import * as Calendar from "expo-calendar";
import { Platform } from "react-native";

const getCalendarId = async () => {
  const { status } = await Calendar.requestCalendarPermissionsAsync();
  if (status === "granted") {
    let defaultCalendar = null;

    if (Platform.OS === "ios") {
      defaultCalendar = await Calendar.getDefaultCalendarAsync();
    } else if (Platform.OS === "android") {
      const calendars = await Calendar.getCalendarsAsync(
        Calendar.EntityTypes.EVENT
      );
      defaultCalendar = calendars.find((cal) => cal.isPrimary) || calendars[0];
    }
    return defaultCalendar?.id;
  }
};

export default getCalendarId;
