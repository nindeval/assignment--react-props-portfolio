import React, { Component } from 'react';

class WorkHistory extends Component {
  render() {
    return (
      <section>
         <h4>Work Experience</h4>
         <div class="job-timeline">

           <div class="job">
             <div class="job__years">
               <h6 class="job__end">NOW</h6>
               <h6 class="job__start">2016</h6>
             </div>
             <h5 class="job__title">Full Stack Developer</h5>
             <h5 class="job__company">Gummy Mobile</h5>
             <p class="job__description">It´s critical that we give 110% when proactively incentivizing stand-ups. Change the way you do business - adopt seamless industry leaders. Going forward, our knowledge transfer capability will deliver value to executive searches.</p>
           </div>

           ...

         </div>
       </section>

    );
  }
}

export default WorkHistory;
