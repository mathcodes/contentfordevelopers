
// // class Table {
// //   constructor(seats) {
// //       this.seats = seats;
// //       this.occupied = 0;
// //   }

// //   isAvailable() {
// //       return this.occupied < this.seats;
// //   }

// //   occupySeats(n) {
// //       if (this.seats - this.occupied >= n) {
// //           this.occupied += n;
// //       }
// //   }

// //   calculateTips() {
// //       let perHead = Math.random() < 0.5 ? getRandomInt(2, 50) : getRandomInt(20, 40);
// //       let tips = getRandomFloat(0.1, 0.2);
// //       return this.occupied * perHead * tips;
// //   }
// // }

// // // Returns a random float number between min (inclusive) and max (inclusive)
// // function getRandomFloat(min, max) {
// //   return Math.random() * (max - min) + min;
// // }


// // // Defining a Server class
// // class Server {
// //   constructor(name, tables) {
// //     this.name = name;
// //     this.tables = tables.map(t => new Table(t));
// //   }

// //   getGuestCount() {
// //     return this.tables.reduce((acc, table) => acc + table.occupied, 0);
// //   }



// //   hasTableFor(n) {
// //     return this.tables.some(t => t.isAvailable() && t.seats >= n);
// //   }

// //   seatGuests(n) {
// //     for (let i = 0; i < this.tables.length; i++) {
// //         if (this.tables[i].isAvailable() && this.tables[i].seats >= n) {
// //             this.tables[i].occupySeats(n);
// //             return i;
// //         }
// //     }
// //     return -1;
// // }



// //   freeTable(n) {
// //       // Use the party size to find the table that they were using
// //       let tableIndex = this.partyTable[n];
// //       if (tableIndex !== undefined) {
// //           this.tables[tableIndex].occupied = 0;
// //           delete this.partyTable[n];  // Remove this party from the partyTable object
// //           return true;
// //       }
// //       return false;
// //   }
// // }

// // // Create instances of the Server class for each server
// // let servers = [
// //   new Server('John', [4, 10, 61]),
// //   new Server('Jane', [14, 2, 4]),
// //   new Server('Jack', [5, 11, 4]),
// //   new Server('Jill', [4, 2, 14])
// // ];
// // let waitingQueue = []; // Waiting queue to store the waiting parties

// // // Async function to handle table serving process
// // async function serveTable(server, table, partySize) {
// //     let servingTime = getRandomInt(30, 60);
// //     console.log(`${server.name} is serving a party of ${partySize} at a table for ${table.seats} for ${servingTime}ms.`);

// //     await new Promise(resolve => setTimeout(resolve, servingTime)); // Simulating the serving process

// //     // console.log(`${server.name}'s table for ${table.seats} is now available.`);
// //     table.occupied = 0; // Make the table available

// //     serveWaitingQueue(); // Serve the waiting queue
// // }

// // // Function to serve a party// Function to generate a random integer between min and max (both included)
// // function getRandomInt(min, max) {
// //   min = Math.ceil(min);
// //   max = Math.floor(max);
// //   return Math.floor(Math.random() * (max - min + 1)) + min;
// // }

// // // run like a bell curve, so in the first third of the iterations, scatter the times in between 50-60, next third, 0-20, and the last third when its gettin at night, 56-60ms
// // async function serveParty(servers, partySize, partyIndex, totalParties) {
// //   servers.sort((a, b) => a.getGuestCount() - b.getGuestCount());

// //   for (let server of servers) {
// //       if (server.hasTableFor(partySize)) {
// //           server.seatGuests(partySize);
// //           let servingTime;
// //           if (partyIndex <= totalParties / 3) {
// //               // First third of the night
// //               servingTime = getRandomInt(50, 60);
// //           } else if (partyIndex <= (2 * totalParties) / 3) {
// //               // Middle of the night
// //               servingTime = getRandomInt(0, 20);
// //           } else {
// //               // Last third of the night
// //               servingTime = getRandomInt(50, 60);
// //           }
// //           console.log(`${server.name} is serving a party of ${partySize} for ${servingTime}ms.`);
// //           await new Promise(resolve => setTimeout(resolve, servingTime));
// //           server.freeTable(partySize);
// //           return;
// //       }
// //   }
// //   // If no servers can seat the party, add it to the queue
// //   waitingQueue.push(partySize);
// // }

// // // Function to serve the waiting queue
// // function serveWaitingQueue() {
// //     waitingQueue = waitingQueue.filter(partySize => !serveParty(servers, partySize)); // Serve the parties in the waiting queue
// // }

// // // Check if all seats at all tables are occupied
// // function areAllTablesFull(servers) {
// //     return servers.every(server => server.tables.every(table => table.occupied === table.seats));
// // }

// // // Running the code
// // while (!areAllTablesFull(servers)) {
// //     let partySize = getRandomInt(1, 6);

// //     serveParty(servers, partySize);
// // }

// // // console.log("All tables are full!");

// // // Assuming all your previous code (classes and functions) are defined above

// // let numberOfParties = 20;

// // // Running the code
// // for (let i = 0; i < numberOfParties; i++) {
// //     if (!areAllTablesFull(servers)) {
// //         let partySize = getRandomInt(1, 6);
// //         serveParty(servers, partySize, i, numberOfParties);
// //     } else {
// //         console.log("All tables are full!");
// //         break;
// //     }
// // }


// // // Once all the parties are served or all the tables are full, print a message
// // if (areAllTablesFull(servers)) {
// //     // console.log("All tables are full!");
// // } else {
// //     // console.log("All parties have been served!");
// // }

// // // Function to print an overview of the night
// // function printOverview(servers) {
// //   console.log("\nOverview of the night:");
// //   for (let server of servers) {
// //       let totalGuests = server.tables.reduce((sum, table) => sum + table.occupied, 0);
// //       console.log(`${server.name} served ${totalGuests} guests over ${server.tables.length} tables.`);
// //   }
// //   return servers;
// // }

// // // Print the overview
// // printOverview(servers);

// // console.log(printOverview(servers))

// // function printOverview(servers) {
// //   console.log("\nOverview of the night:");

// //   // Prepare an array of server summaries
// //   let serverSummaries = servers.map(server => {
// //       let totalGuests = server.tables.reduce((sum, table) => sum + table.occupied, 0);
// //       return {
// //           Name: server.name,
// //           'Total Guests': totalGuests,
// //           'Total Tables': server.tables.length,
// //           'Average Guests per Table': (totalGuests / server.tables.length).toFixed(2),
// //       };
// //   });

// //   // Print the server summaries as a table
// //   console.table(serverSummaries);
// // }


// // // Print summary
// // console.table(servers.map((server, index) => {
// //   let totalTips = server.tables.reduce((total, table) => total + table.calculateTips(), 0);
// //   return {
// //       index: index,
// //       Name: server.name,
// //       'Total Guests': server.getGuestCount(),
// //       'Total Tables': server.tables.length,
// //       'Average Guests per Table': (server.getGuestCount() / server.tables.length).toFixed(2),
// //       'Total Tips': totalTips.toFixed(2)
// //   };
// // }));


// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Defining a Table class
// class Table {
//   constructor(seats) {
//     this.seats = seats;
//     this.occupied = 0; // Now represents the number of occupied seats
//   }

//   isAvailable() {
//     return this.occupied < this.seats;
//   }

//   occupySeats(n) {
//     if (this.seats - this.occupied >= n) {
//       this.occupied += n;
//     }
//   }

//   calculateTips() {
//     let perHead = Math.random() < 0.5 ? getRandomInt(2, 50) : getRandomInt(20, 40);
//     let tips = getRandomFloat(0.1, 0.2);
//     return this.occupied * perHead * tips;
//   }
// }

// // Defining a Server class
// class Server {
//   constructor(name, tables) {
//     this.name = name;
//     this.tables = tables.map(t => new Table(t));
//     this.totalGuests = 0;  // Track the total number of guests served by the server
//     this.totalTips = 0;    // Track the total tips earned by the server
//   }

//   getGuestCount() {
//     return this.tables.reduce((acc, table) => acc + table.occupied, 0);
//   }

//   hasTableFor(n) {
//     return this.tables.some(t => t.seats - t.occupied >= n && t.isAvailable());
//   }

//   seatGuests(n) {
//     for (let t of this.tables) {
//       if (t.isAvailable() && t.seats >= n) {
//         t.occupySeats(n);
//         this.totalGuests += n;  // Increment the total number of guests served by the server
//         return true;
//       }
//     }
//     return false;
//   }

//   freeTable(n) {
//     for (let t of this.tables) {
//       if (t.occupied === n) {
//         t.occupied = 0;
//         return true;
//       }
//     }
//     return false;
//   }
// }

// // Utility functions
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomFloat(min, max) {
//   return Math.random() * (max - min) + min;
// }

// let servers = [
//   new Server('John', [4, 2, 6]),
//   new Server('Jane', [3, 2, 4]),
//   new Server('Jack', [5, 2, 4]),
//   new Server('Jill', [4, 2, 4])
// ];

// function askForPartySize() {
//   readline.question('Enter party size: ', partySize => {
//     // Parse the input as a number
//     partySize = parseInt(partySize);

//     // Check if the input is valid
//     if (isNaN(partySize) || partySize < 1 || partySize > 6) {
//       console.log('Invalid party size. Please enter a number between 1 and 6.');
//       askForPartySize();
//     } else {
//       // Find the server who currently has the least number of guests
//       servers.sort((a, b) => a.getGuestCount() - b.getGuestCount());
//       let server = servers[0];

//       // Try to seat the guests
//       let tableIndex = server.seatGuests(partySize);
//       if (tableIndex !== -1) {
//         console.log(`Party of ${partySize} seated at table ${tableIndex} by ${server.name}`);
//       } else {
//         console.log(`No table available for party of ${partySize}`);
//       }

//       // Ask for the next party size
//       askForPartySize();
//     }
//   });
// }

// // Start the seating process
// askForPartySize();

// // After the seating process ends, print the summary
// let summary = servers.map((server, index) => {
//   return {
//     index,
//     Name: server.name,
//     'Total Guests': server.totalGuests,
//     'Total Tables': server.tables.length,
//     'Average Guests per Table': (server.totalGuests / server.tables.length).toFixed(2),
//     'Total Tips': server.totalTips.toFixed(2)
//   };
// });
// console.table(summary);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Defining a Table class
class Table {
  constructor(seats) {
    this.seats = seats;
    this.occupied = 0; // Now represents the number of occupied seats
  }

  isAvailable() {
    return this.occupied < this.seats;
  }

  occupySeats(n) {
    if (this.seats - this.occupied >= n) {
      this.occupied += n;
    }
  }

  calculateTips() {
    let perHead = Math.random() < 0.5 ? getRandomInt(2, 50) : getRandomInt(20, 40);
    let tips = getRandomFloat(0.1, 0.2);
    return this.occupied * perHead * tips;
  }
}

// Defining a Server class
class Server {
  constructor(name, tables) {
    this.name = name;
    this.tables = tables.map(t => new Table(t));
    this.totalGuests = 0;  // Track the total number of guests served by the server
    this.totalTips = 0;    // Track the total tips earned by the server
  }

  getGuestCount() {
    return this.tables.reduce((acc, table) => acc + table.occupied, 0);
  }

  hasTableFor(n) {
    return this.tables.some(t => t.seats - t.occupied >= n && t.isAvailable());
  }

  seatGuests(n) {
    for (let t of this.tables) {
      if (t.isAvailable() && t.seats >= n) {
        t.occupySeats(n);
        this.totalGuests += n;  // Increment the total number of guests served by the server
        return true;
      }
    }
    return false;
  }

  freeTable(n) {
    for (let t of this.tables) {
      if (t.occupied === n) {
        t.occupied = 0;
        return true;
      }
    }
    return false;
  }
}

// Utility functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

let servers = [
  new Server('John', [4, 2, 6]),
  new Server('Jane', [3, 2, 4]),
  new Server('Jack', [5, 2, 4]),
  new Server('Jill', [4, 2, 4])
];

function askForPartySize() {
  readline.question('Enter party size (1-6): ', partySize => {
    // Parse the input as a number
    partySize = parseInt(partySize);

    // Check if the input is valid
    if (isNaN(partySize) || partySize < 1 || partySize > 6) {
      console.log('Invalid party size. Please enter a number between 1 and 6.');
      askForPartySize();
    } else {
      // Find the server who currently has the least number of guests
      servers.sort((a, b) => a.getGuestCount() - b.getGuestCount());
      let server = servers[0];

      // Try to seat the guests
      let tableIndex = server.seatGuests(partySize);
      if (tableIndex !== -1) {
        console.log(`Party of ${partySize} seated at table ${tableIndex} by ${server.name}`);
      } else {
        console.log(`No table available for party of ${partySize}`);
      }

      // Ask for the next party size
      askForPartySize();
    }
  });
}

// Start the seating process
askForPartySize();

// After the seating process ends, print the summary
let summary = servers.map((server, index) => {
  return {
    index,
    Name: server.name,
    'Total Guests': server.totalGuests,
    'Total Tables': server.tables.length,
    'Average Guests per Table': (server.totalGuests / server.tables.length).toFixed(2),
    'Total Tips': server.tables.reduce((acc, table) => acc + table.calculateTips(), 0).toFixed(2)
  };
});

console.table(summary);
