import React from 'react';

const Education = () => {
 return (
   <div id="education-table-with-header">
    <div id="table-title-education">
     <h5>Education</h5>
    </div>
     <table id="education-table">
        <tr>
         <th>Timeframe</th>
         <th>Institution</th>
         <th>Course of study</th>
         <th>Summary</th>
        </tr>
         <tbody>
            <tr><td>Dec 2018 - March 2019</td><td>Flatiron School</td><td>Software Engineering (Web Development Immersive)</td>
              <td id="education-summary">A 15-week in-person, intensive web development bootcamp covering Ruby, Rails, Javascript and React.</td>
            </tr>
            <tr><td>2007 - 2011</td><td>King's College London (University of London)</td>
              <td>BA German and Hispanic Studies (2:1)</td>
              <td id="education-summary">As well as the German and Spanish languages this course involved the study of German and Hispanic history, politics, economics, literature, film and art history.</td>
            </tr>
            <tr><td>Feb - Jul 2010</td><td>Humboldt Universität zu Berlin (Humboldt University of Berlin)</td>
              <td>Courses in German language history, literature, medieval German, and Russian.</td>
              <td id="education-summary">I took part in an Erasmus exchange programme at Humboldt University in Berlin for one semester studying German literature, language, linguistics and the history of the German language.</td>
            </tr>
            <tr>
              <td>Jul 2009 - Dec 2009</td>
              <td>Universidad Nacional de Colombia, sede Bogotá (the National University of Colombia, Bogotá campus)</td>
              <td>Courses covered Colombian culture, literature, music and Spanish linguistics</td>
              <td id="education-summary">I arranged an exchange to study as a visiting student at the largest university in Colombia for a semester.</td>
            </tr>
        </tbody>
     </table>
   </div>
 )

}


export default Education;
