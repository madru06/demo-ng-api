import { PeopleService } from './src/app/services/people.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //Variables
  title = 'demo-final';
  people : any[] = [];
  chart : [];
  females : number = 0;
  males : number = 0;
  //End variables

  constructor(protected peopleService : PeopleService){}

  ngOnInit(){
    this.peopleService.getPeople().subscribe((data) => {
      this.people = data['results'];
      //console.log(this.people);
      this.people.forEach(persona=> {
        if(persona['gender'] == 'female'){
          this.females++;
        } else {
          this.males++;
        }
      });

      console.log("F: " + this.females + " - M: " + this.males);

      this.fillChart(this.males, this.females);
    });
  }

  fillChart(m : number, f : number){
    this.chart = new Chart('genderChart', {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [m, f],
          backgroundColor: ['teal', 'tomato'],
          borderColor: ['indigo', 'red']
        }],
        labels: ['Hombres', 'Mujeres']

      }
    });
  }

}
