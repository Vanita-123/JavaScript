// https://jsonplaceholder.typicode.com/users
let Card = document.getElementById("Card");
const fetchApi = async () => {
  let API_URL = "https://jsonplaceholder.typicode.com/users";
  try {
    let dataresponse = await fetch(API_URL);
    let response = await dataresponse.json();
    console.log("response", response);
    createCards(response);
  } catch (error) {
    console.log(error);
  }
};
fetchApi();
function createCards(data) {
  data.forEach((user) => {
    console.log(user);
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.textContent = user.name;
    let h3 = document.createElement("h3");
    h3.textContent = user.email;
    let p = document.createElement("p");
    p.textContent = user.address.street + " , "  + user.address.city;
    div.append(h2, h3, p);
    Card.append(div); 
  });
}
