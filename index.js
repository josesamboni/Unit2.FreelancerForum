//tittle
const titleBody = document.getElementById('title');
const title = document.createElement('h1');
title.textContent = 'Freelancers Forum';
titleBody.appendChild(title);




// Defined arrays for possible names and occupations.
const names = ["Alice", "Bob", "Carol",];
const occupations = ["Writer", "Teacher", "Programmer",];
const prices = ['$25', '$51', '$30',];


// Initial array of freelancers.
const groups = [
        { name: "Dr. Slice", price: 25, occupation: "gardener" },
        { name: "Dr. Pressure", price: 51, occupation: "programmer" },
];

// interval
const addgroupsIntervalId = setInterval(addgroups, 1000);

//render groups
function render() {
    
    const freelancers = document.querySelector("#freelancers");
    const squareElements = groups.map((group) => {
      const element = document.createElement("li");
      element.classList.add(group.name, group.occupation, group.price);
      element.textContent = `${group.name} - ${group.occupation} - ${group.price}`;
      return element;
    });
    squares.replaceChildren(...freelanceElements);
}  

// ramdom and push

function addgroups() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
  
    shapes.push({ name, occupation, price });
  
    render();
}

function stopInterval( ) {
    clearInterval(addgroupsIntervalId)
}
stopInterval();