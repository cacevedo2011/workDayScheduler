# workDayScheduler

## Deployed Link:

https://cacevedo2011.github.io/workDayScheduler/

## Summary

This is a simple calendar app that tells you your work day.  On this HTML app, I use the power of jQuery and MomentJs to make this app responsive to the user.  This has also features that makes the web application clean and responsive to the user.  Some of the features that are in this web app includes:

* Write, save and edit the textArea that you want to apply for the particular hour of that day and when refreshing it stays persistent for that day.

* Gives you a live feed of the current hour and changes color depending of the time when the task expires on that hour.

## Techinical Side

Like previously stated it uses jQuery and MomentJs library to make this app responsive to the user.  The way that I achieved the time is using the _moment().format_ to display the time and to make the changing colors depending the time of the day, I created a loop that if the hour is the same as the currentTime that it would appear red which it was stated by _class="present"_, else it would display either the future class of the past class.  Afterwards I created an event that when the user press the save button, that it would save the changes to your local storage in your computer. 

## Screenshot

![Work-Day-Scheduler](https://user-images.githubusercontent.com/18291317/92313114-c4414980-ef95-11ea-8448-a5e8fcde06d3.png)