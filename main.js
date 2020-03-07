var birthdays = [
  {
    name: "Michael T.",
    bdate: "02-01-1980"
  },
  {
    name: "Charlotte",
    bdate: "25-01-1982"
  },
  {
    name: "Lasse",
    bdate: "27-01-1975"
  },
  {
    name: "Jakob T.",
    bdate: "31-01-1991"
  },
  {
    name: "Tina",
    bdate: "05-03-2001"
  },
  {
    name: "Thomas J.",
    bdate: "13-04-1972"
  },
  {
    name: "John",
    bdate: "17-05-1974"
  },
  {
    name: "Per",
    bdate: "01-06-1959"
  },
  {
    name: "Mie S.",
    bdate: "14-06-1999"
  },
  {
    name: "Jakob F.",
    bdate: "28-06-1995"
  },
  {
    name: "May",
    bdate: "03-07-1981"
  },
  {
    name: "Michael R.",
    bdate: "17-07-1975"
  },
  {
    name: "Kim",
    bdate: "17-07-1974"
  },
  {
    name: "Ture",
    bdate: "25-08-1973"
  },
  {
    name: "Mie N.",
    bdate: "31-08-1982"
  },
  {
    name: "Mads",
    bdate: "06-09-1978"
  },
  {
    name: "Mette",
    bdate: "28-09-1989"
  },
  {
    name: "Thomas L.",
    bdate: "04-10-1969"
  },
  {
    name: "Thomas E.",
    bdate: "19-11-1985"
  },
  {
    name: "Signe",
    bdate: "24-11-1976"
  },
  {
    name: "Patrick",
    bdate: "02-12-1984"
  },
  {
    name: "Carina",
    bdate: "07-12-1983"
  },
  {
    name: "Nadja",
    bdate: "21-12-1985"
  },
  {
    name: "Lars",
    bdate: "25-12-1972"
  },
  {
    name: "Pernille",
    bdate: "26-12-1991"
  }
];

// dato-hentning og formatering
var d = new Date();
var month = checkTime(d.getMonth() + 1);
var day = checkTime(d.getDate());
var year = d.getFullYear();
var full = `${day}-${month}-${year}`;

// hjælpefunktioner - dag, måned og år som number
function getDag(a) {
  a = Number(a.substr(0, 2));
  return a;
}

function getMaaned(a) {
  a = Number(a.substr(3, 2));
  return a;
}

function getAar(a) {
  a = Number(a.substr(6, 4));
  return a;
}

// sammenlign og skriv
function getNextTwo() {
  // variable for dato i dag der skal sammenlignes
  var todayDag = getDag(full);
  var todayMaaned = getMaaned(full);
  var todayAar = getAar(full);
  for (let i = 0; i < birthdays.length; i++) {
    // variable for hver kollegas dato der skal sammenlignes
    var birthdaysDag = getDag(birthdays[i].bdate);
    var birthdaysMaaned = getMaaned(birthdays[i].bdate);
    var birthdaysAar = getAar(birthdays[i].bdate);
    // gå igennem birthdays én af gangen, er i dag mindre end eller lig med i's bdate, så skriv to navne og datoer og break
    if (todayMaaned <= birthdaysMaaned && todayDag <= birthdaysDag) {
      // sørg for at den kan håndtere enden på arrayet
      var next = 0;
      if (i === birthdays.length) {
        next = 0;
      } else {
        next = i + 1;
      }

      // check om der er en rund fødselsdag, giver rød <tr>
      var rund1 = false;
      if ((todayAar - getAar(birthdays[i].bdate)) % 10 === 0) {
        rund1 = true;
      }
      var rund2 = false;
      if ((todayAar - getAar(birthdays[next].bdate)) % 10 === 0) {
        rund2 = true;
      }

      // sæt det navne og datoer ind i card'et som et table med evt. farve
      document.getElementById("bday").innerHTML = `<table><tr ${
        rund1 ? 'class="bad"' : ""
      }><td class="left">${birthdays[i].name}</td><td>${getDag(
        birthdays[i].bdate
      )}/${getMaaned(birthdays[i].bdate)}</td></tr><tr ${
        rund2 ? 'class="bad"' : ""
      }><td class="left">${birthdays[next].name}</td><td>${getDag(
        birthdays[next].bdate
      )}/${getMaaned(birthdays[next].bdate)}</td></tr></table>`;

      break;
    }
  }
}
getNextTwo();

// ur-script, tyv-stjålet fra W3
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("ur").innerHTML = h + ":" + m;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
