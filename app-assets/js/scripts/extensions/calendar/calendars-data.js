'use strict';

/* eslint-disable require-jsdoc, no-unused-vars */

var CalendarList = [],
  primaryColor = "#5A8DEE",
  primaryLight = "#E2ECFF",
  secondaryColor = "#475F7B",
  secondaryLight = "#E6EAEE",
  successColor = "#39DA8A",
  successLight = "#D2FFE8",
  dangercolor = "#FF5B5C",
  dangerLight = "#FFDEDE",
  warningColor = "#FDAC41",
  warningLight = "#FFEED9",
  infoColor = "#00CFDD",
  infoLight = "#CCF5F8 ",
  lightColor = "#b3c0ce",
  veryLightBlue = "#e7edf3",
  cloudyBlue = "#b3c0ce";
// contructor to create event
function CalendarInfo() {
  this.id = null;
  this.name = null;
  this.checked = true;
  this.color = null;
  this.bgColor = null;
  this.borderColor = null;
}

function addCalendar(calendar) {
  CalendarList.push(calendar);
}

function findCalendar(id) {
  var found;

  CalendarList.forEach(function (calendar) {
    if (calendar.id === id) {
      found = calendar;
    }
  });

  return found || CalendarList[0];
}
// sidebar calendar list
(function () {
  var calendar;
  var id = 0;

  calendar = new CalendarInfo();
  id += 1;
  calendar.id = String(id);
  calendar.name = 'Pending';
  calendar.color = dangercolor;
  calendar.bgColor = dangerLight;
  calendar.dragBgColor = dangercolor;
  calendar.borderColor = dangercolor;
  addCalendar(calendar);

  calendar = new CalendarInfo();
  id += 1;
  calendar.id = String(id);
  calendar.name = 'Completed';
  calendar.color = successColor;
  calendar.bgColor = successLight;
  calendar.dragBgColor = successColor;
  calendar.borderColor = successColor;
  addCalendar(calendar);

  calendar = new CalendarInfo();
  id += 1;
  calendar.id = String(id);
  calendar.name = 'Inprogress';
  calendar.color = primaryColor;
  calendar.bgColor = primaryLight;
  calendar.dragBgColor = primaryColor;
  calendar.borderColor = primaryColor;
  addCalendar(calendar);
  
  
  calendar = new CalendarInfo();
  id += 1;
  calendar.id = String(id);
  calendar.name = 'Hold';
  calendar.color = warningColor;
  calendar.bgColor = primaryLight;
  calendar.dragBgColor = warningColor;
  calendar.borderColor = warningColor;
  addCalendar(calendar);

 
})();
