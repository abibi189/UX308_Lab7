import { hello, squareFeetToAcres, mowingTime, getAirQualityCategory, yee_ha, calculateSlope } from './functions.js';


function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2.  There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
    <h2>results</h2>
    <p>squareFeetToAcres(43560) == "{squareFeetToAcres(43560)}"</p>
    <p>squareFeetToAcres(87120) == "{squareFeetToAcres(87120)}"</p>
    <p>squareFeetToAcres(217800) == "{squareFeetToAcres(217800)}"</p>
    </section>;
}
function Question3(){
    return <section>
3. Given the&nbsp; width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes
     <h2>results</h2>
    <p>mowingTime(5, 10, 2) == "{mowingTime(5, 10, 2)}"</p>
    <p>mowingTime(15, 20, 4) == "{mowingTime(15, 20, 4)}"</p>
    <p>mowingTime(25, 40, 5) == "{mowingTime(25, 40, 5)}"</p>
    </section>;
}
function Question4(){
    return <section>
4.  Compute the air quality given an air quality index:
    <h2>results</h2>
    <p>getAirQualityCategory(28) == "{getAirQualityCategory(28)}"</p>
    <p>getAirQualityCategory(80) == "{getAirQualityCategory(80)}"</p>
    <p>getAirQualityCategory(120) == "{getAirQualityCategory(120)}"</p>
    <p>getAirQualityCategory(160) == "{getAirQualityCategory(160)}"</p>
    <p>getAirQualityCategory(250) == "{getAirQualityCategory(250)}"</p>
    <p>getAirQualityCategory(320) == "{getAirQualityCategory(320)}"</p>
    </section>;
}
function Question5(){
    return <section>
5. yee_ha takes an integer parameter and returns one of the following strings:
    <h2>results</h2>
    <p>yee_ha(21) == "{yee_ha(21)}"</p>
    <p>yee_ha(9) == "{yee_ha(9)}"</p>
    <p>yee_ha(14) == "{yee_ha(14)}"</p>
    <p>yee_ha(10) == "{yee_ha(10)}"</p>
    </section>;
}
function Question6(){
    return <section>
6. Calculate the slope of a line.
    <h2>results</h2>
    <p>calculateSlope(0, 0, 2, 4) == "{calculateSlope(0, 0, 2, 4)}"</p>  
    <p>calculateSlope(1, 2, 6, 9) == "{calculateSlope(1, 2, 6, 9)}"</p> 
    <p>calculateSlope(2, 5, 6, 5) == "{calculateSlope(2, 5, 6, 5)}"</p> 
    </section>;
}


export {Question1, Question2, Question3, Question4, Question5, Question6}