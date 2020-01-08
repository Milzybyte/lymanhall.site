"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author:Miles C. Stover  
   Date:12/20/19   

	
*/

// Set the date displayed 
var thisDay = new Date("August 30, 2018");

// Write the HTML code to event table 
var tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// Set the end date for the event list 2 weeks from the current date 
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

// Loop through eventDates array 
for (var i = 0; i < eventDates.length; i++) {
    var eventDate = new Date(eventDates[i]);
    var eventDay = eventDate.toDateString();
    var eventTime = eventDate.toLocaleTimeString();
   
    //If event date is within the 2week window display it on the page 
    if (thisDay <= eventDate && eventDate <= endDate) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + eventDay + " @ " + eventTime + "</td>";
        tableHTML += "<td>" + eventDescriptions[i] + "</td>";
        tableHTML += "<td>" + eventPrices[i] + "</td>";
        tableHTML += "</tr>";
    }
}
   
tableHTML += "</table>";

//Write the HTML code into the eventList  
document.getElementById("eventList").innerHTML = tableHTML;
