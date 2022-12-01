import React from 'react';
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

export default function Calendar() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p10 rounded-3xl bg-white">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          selectedDate={new Date(2022, 10, 12)}
        />
      </ScheduleComponent>
    </div>
  );
}
