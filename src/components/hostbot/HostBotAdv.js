// Defining a Table class
class Table {
  constructor(seats) {
    this.seats = seats;
    this.occupied = 0; // Now represents the number of occupied seats
  }

  isAvailable() {
    return this.occupied > 0;
  }

  occupySeats(n) {
    if (this.seats - this.occupied >= n) {
      this.occupied += n;
    }
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

let servers = [
  new Server('John', [41, 2, 61]),
  new Server('Jane', [31, 21, 41]),
  new Server('Jack', [51, 21, 41]),
  new Server('Jill', [1, 2, 4])
];

function renderTables() {
  console.log('Rendering tables...');
  const serverStatsBody = document.getElementById('serverStatsBody');

  servers.forEach((server, index) => {
    const row = document.createElement('div');
    row.innerHTML = `
    <div class="grid grid-cols-5 gap-4">
      <div class="px-4 py-2">${server.name}</div>
      <div class="px-4 py-2">${server.getGuestCount()}</div>
      <div class="px-4 py-2">${server.tables.length}</div>
      <div class="px-4 py-2">${(server.getGuestCount() / server.tables.length).toFixed(2)}</div>
      <div class="px-4 py-2">$${server.totalTips.toFixed(2)}</div>
    </div>
    `;

    serverStatsBody.appendChild(row);

    const tablesContainer = document.createElement('div');
    tablesContainer.classList.add('mt-4');

    server.tables.forEach((table, tableIndex) => {
      const tableElement = document.createElement('div');
      tableElement.classList.add('bg-gray-200', 'px-4', 'py-2', 'mb-2');
      tableElement.textContent = `Table ${tableIndex + 1} (${table.seats} seats)`;

      if (table.isAvailable()) {
        console.log(table.length)
        console.log(table.seats)
        console.log(table.occupied)
        console.log(table.isAvailable())
        tableElement.classList.add('text-green-500');
      } else {
        tableElement.classList.add('text-red-500');
      }

      tablesContainer.appendChild(tableElement);
    });

    document.getElementById('tablesContainer').appendChild(tablesContainer);
  });
}

renderTables();
function updateServerStats() {
  const serverStatsBody = document.getElementById('serverStatsBody');
  console.log("serverStatsBody");
  serverStatsBody.innerHTML = '';
  console.log("serverStatsBody.innerHTML");

  servers.forEach((server, index) => {
    const row = document.createElement('div');
    row.innerHTML = `
      <div class="px-4 py-2">${server.name}</div>
      <div class="px-4 py-2">${server.totalGuests}</div>
      <div class="px-4 py-2">${server.tables.length}</div>
      <div class="px-4 py-2">${(server.totalGuests / server.tables.length).toFixed(2)}</div>
      <div class="px-4 py-2">$${server.totalTips.toFixed(2)}</div>
    `;
    console.log("row.innerHTML");
    console.log('Server Stats:', servers);
    serverStatsBody.appendChild(row);
  });
}

function handlePartySizeForm(event) {
  event.preventDefault();

  const partySizeInput = document.getElementById('partySize');
  const partySize = parseInt(partySizeInput.value);

  if (isNaN(partySize) || partySize < 1 || partySize > 60) {
    alert('Invalid party size. Please enter a number between 1 and 6.');
    return;
  }

  let tableSeated = false;
  for (let i = 0; i < servers.length; i++) {
    console.log("servers.length");
    const server = servers[i];
    if (server.hasTableFor(partySize)) {
      server.seatGuests(partySize);
      tableSeated = true;
      break;
    }
  }

  if (tableSeated) {
    updateServerStats();
    renderTables();
  } else {
    alert('No table available for the party size.');
  }

  partySizeInput.value = '';
}


function handlePartySizeForm(event) {
  event.preventDefault();

  const partySizeInput = document.getElementById('partySize');
  const partySize = parseInt(partySizeInput.value);

  if (isNaN(partySize) || partySize < 1 || partySize > 60) {
    alert('Invalid party size. Please enter a number between 1 and 60.');
    return;
  }

  let tableSeated = false;
  for (let i = 0; i < servers.length; i++) {
    const server = servers[i];
    if (server.hasTableFor(partySize)) {
      server.seatGuests(partySize);
      tableSeated = true;
      break;
    }
  }

  if (tableSeated) {
    renderTables();
    updateServerStats();
  } else {
    alert('No table available for the party size.');
  }

  partySizeInput.value = '';
}
