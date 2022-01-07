// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘

// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = CONFIG.name;

// Here you can change your greetings (\xa0)
const gree1 = `${CONFIG.greetingNight}`;
const gree2 = `${CONFIG.greetingMorning}`;
const gree3 = `${CONFIG.greetingAfternoon}`;
const gree4 = `${CONFIG.greetingEvening}`;

// Define the hours of the greetings
if (hour >= 23 || hour < 5) {
  document.getElementById('greetings').innerText = 
    Config.Name ? gree4 : gree4 + "\xa0" + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText =
    Config.Name ? gree2 : gree2 + "\xa0" + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText =
    Config.Name ? gree3 : gree3 + "\xa0" + name;
} else {
  document.getElementById('greetings').innerText =
    Config.Name ? gree4 : gree4 + "\xa0" + name;
}
