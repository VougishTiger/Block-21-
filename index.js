document.addEventListener(`DOMContentLoaded`, async()=> {
  // call the api to grab the eventInfo using fetch and then tranlate it into eventPlans using .json
  const response= await fetch(` https://fsa-crud-2aa9294fe819.herokuapp.com/api/2046-ftb-et-web-ft/events`);
  const responceJson= await response.json();
  const event= responceJson.data;
  // create a new eventList and put all the information on the eventList using innerHTML
  const eventList= document.createElement(`li`);
  eventList.innerHTML= `
    <h2>${event}</h2>
    `
    const ul= document.querySelector(`ul`);
    ul.append(eventList);
  // grab the ul and attach the evenList to the ul

})