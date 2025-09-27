import * as Calendar from "expo-calendar";

type SaintDataType = {
  name: string;
  legacy: string;
  remembrance: {
    month: number;
    day: number;
  };
};

const addEvent = async (calendarId: string, saintData: SaintDataType) => {
  const recurrenceEndDate = new Date();
  recurrenceEndDate.setFullYear(recurrenceEndDate.getFullYear() + 6);

  const startDate = new Date();
  startDate.setMonth(saintData.remembrance.month - 1);
  startDate.setDate(saintData.remembrance.day);
  startDate.setHours(9);
  startDate.setMinutes(0);
  startDate.setSeconds(0);
  if (startDate < new Date()) {
    startDate.setFullYear(startDate.getFullYear() + 1);
  }

  await Calendar.createEventAsync(calendarId, {
    title: saintData.name + " remembrance",
    notes: saintData.legacy,
    startDate: startDate,
    endDate: startDate,
    allDay: true,
    recurrenceRule: {
      frequency: Calendar.Frequency.YEARLY,
      endDate: recurrenceEndDate,
    },
  });
};

export default addEvent;
