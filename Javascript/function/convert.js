function inchetoFeet(inch) {
  const feet=parseInt(inch/12);
  const remainInch=inch%12
return result =feet + ' feet ' + remainInch + ' inch'
}
console.log(inchetoFeet(75))