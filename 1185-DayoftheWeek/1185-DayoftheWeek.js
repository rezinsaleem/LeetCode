    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const d = new Date(`${month},${day},${year}`);
let dayy = d.getDay()
return days[dayy]

};
3
31
8
2019
18
7
1999
15
8
1993
6

0

0

"Saturday"
"Sunday"
"Sunday"
"Saturday"
"Sunday"
"Sunday"
