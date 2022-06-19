const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);

      if (person) {
        return resolve(person);
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id);

      if (job) {
        return resolve(job);
      }

      return reject(`Job with id: ${id} doesn't exist`);
    }, 500);
  });
}



async function waitPromise() {
  const promisePerson = await fetchPersonById(3); //dichiaro la promise
  console.log(promisePerson);//stampo risultato
  const promiseJob = await fetchJobById(3); // dichiaro la promise
  console.log(promiseJob);//stampo risultato
}

waitPromise();
