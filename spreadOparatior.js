// ... is spread oparator
// adding two array
const ages = [12, 65, 456];
const ages2 = [95, 34, 62];
const allAges = ages.concat(ages2).concat(4).concat([4164]);
const allAges2 = [...ages, ...ages2 ,4]
console.log(allAges2);
// finding a max num
const montri = 600;
const buisness = 500;
const amla = 1000;
const tk = [600, 400, 1299];

const max = Math.max(montri, buisness, amla);
// here the main trick use just ...
const max2 = Math.max(...tk);
console.log(max);
console.log(max2);
