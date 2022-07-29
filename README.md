# Simple Doctor Appoinment Calender

## Description
( 1 )  A doctor appointment calendar monthly view . Each day of the month have a fixed size like a calendar.\
( 2 )  Each day of the month contains an appointment list. 3 items at a glance and rest of them are scrollable. This appoinemnt list is  sorted by appointment time.\
( 3 )  By Clicking on an appointment, it opens a modal which will contain details of the appointment.\
( 4 )  Header of the calendar view have 2 dropdown menus. First one is for the month list and the other will contain the year range 2019-2021.\
( 5 )  Used react router dom to change the month and year of the calendar, example : **localhost/year/2020/month/1-12**. Root url It will always contain the current month.\
( 6 ) Header of the calender also contains a create appointment button . By clicking on it, a modal is oppened form of appointment which will take input of **name**, **gender**, **age**, **date**, **time**. Used React-hook-form to take these inputs.\
( 7 ) Use Redux/Mobx as store management. And To persist data use local storage or indexDB.\
( 8 ) Use Hook and functional approach for creating components.

<br/>

## Used tools
### Primary
- React
- React router dom
- Redux
- React hook form
### Secondary
- Date Js [ for date ]
- React icons [  for icons ]
- Material UI [ for date and time picker ]
- React hot toast [ for toast message ]
- Styled Components & Bootstrap [ for styles ]