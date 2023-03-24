import { Task } from "./TaskInterface";  //to make sure the list is of interface type

export const TASKS : Task[]= [
{
    id: 1,
    text: 'Appointment',
    day: 'May 5th at 2.30pm',
    reminder: true
}, 
{
    id: 2,
    text: 'Meeting',
    day: 'May 6th at 3pm',
    reminder: false
}, 
{
    id: 3,
    text: 'Shopping',
    day: 'May 6th at 5pm',
    reminder: true
}, 
{
    id: 4,
    text: 'Meditate',
    day: 'May 7th at 6.30am',
    reminder: true
}
];
