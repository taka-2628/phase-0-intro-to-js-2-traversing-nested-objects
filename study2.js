//shallowIterator - only works with shallow (non-nested) arrays and objects 
function shallowIterator(target) {
    for (const key in target) {
      console.log(target[key]);
    }
}

const primes = [2, 3, 5, 7, 11];

shallowIterator(primes);
// LOG: 2
// LOG: 3
// LOG: 5
// LOG: 7
// LOG: 11


const shallowUserInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    companyName: "Flatbook Labs",
    jobTitle: "Developer Apprentice",
    friend1firstName: "Nancy",
    friend1lastName: "Burgess",
    friend1companyName: "Flatbook Labs",
    friend1jobTitle: "Developer Apprentice",
    friend2firstName: "Corinna",
    friend2lastName: "Jackson",
    friend2companyName: "Flatbook Labs",
    friend2jobTitle: "Senior Developer"
}

shallowIterator(shallowUserInfo);
// LOG: Avi
// LOG: Flombaum
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Nancy
// LOG: Burgess
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Corinna
// LOG: Jackson
// LOG: Flatbook Labs
// LOG: Senior Developer



//deepIterator - can iterate deep (nested) arrays and objects 
function deepIterator(target) {
    if (typeof target === "object") {
      for (const key in target) {
        deepIterator(target[key]);
      }
    } else {
      console.log(target);
    }
}

const numbers = [1, [2, [4, [5, [6]], 3]]];

deepIterator(numbers);
// LOG: 1
// LOG: 2
// LOG: 4
// LOG: 5
// LOG: 6
// LOG: 3

const deepUserInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    company: {
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
    friends: [
      {
        firstName: "Nancy",
        lastName: "Burgess",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna",
        lastName: "Jackson",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Lead Developer",
        },
      },
    ]
}

deepIterator(deepUserInfo);
// LOG: Avi
// LOG: Flombaum
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Nancy
// LOG: Burgess
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Corinna
// LOG: Jackson
// LOG: Flatbook Labs
// LOG: Lead Developer


// deepIteratorSuperior can differentiate arrays from objects
function deepIteratorSuperior(target) {
  if (Array.isArray(target)) {
    for (const element of target) {
      deepIteratorSuperior(element);
    }
  } else if (typeof target === "object") {
    for (const key in target) {
      deepIteratorSuperior(target[key]);
    }
  } else {
    console.log(target);
  }
}

deepIteratorSuperior(deepUserInfo);
// LOG: Avi
// LOG: Flombaum
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Nancy
// LOG: Burgess
// LOG: Flatbook Labs
// LOG: Developer Apprentice
// LOG: Corinna
// LOG: Jackson
// LOG: Flatbook Labs
// LOG: Lead Developer
