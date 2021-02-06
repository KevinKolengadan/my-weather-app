import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectDateSelection, selectWeather} from '../state/app-selector';
import {UtilityService} from '../service/utility.service';
import {SET_DATE_SELECTION} from '../state/date-seleection-reducer';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {

  weather$ = this.store.pipe(select(selectWeather));
  dateSelection$ = this.store.pipe(select(selectDateSelection));
  lineChartData$: Observable<ChartDataSets[]> = this.weather$.pipe(map(weather => {
    const chartData: ChartDataSets[] = [
      { data: [], hideInLegendAndTooltip: true},
      { data: [], hideInLegendAndTooltip: true},
      { data: []},
      { data: []}
    ];
    const minData: number[] = [];
    const maxData: number[] = [];
    weather.daily.map(day => {
      minData.push(Math.round(day.temp.min));
      maxData.push(Math.round(day.temp.max));
    });
    // minData.push(Math.round(weather.daily[weather.daily.length - 1].temp.min));
    // maxData.push(Math.round(weather.daily[weather.daily.length - 1].temp.max));
    chartData[0].data = maxData;
    chartData[1].data = minData;
    return chartData;
  }));
  lineChartLabels$: Observable<Label[]> = this.weather$.pipe(map(weather => {
    const chartData: Label[] = [];
    weather.daily.map(day => {
      chartData.push(this.utilityService.getDay(day.dt));
    });
    return chartData;
  }));
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false,
          beginAtZero: false
        },
        gridLines: {
          display: false
        },
        offset: true
      }],
      yAxes: [{
        ticks: {
          beginAtZero: false,
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    plugins: {
      datalabels: {
        color: 'ghostwhite',
        opacity: 0.6,
        anchor: 'end',
        align: 'start',
        font: {
          size: 12
        },
        formatter: (value, context) => {
          return value + '°';
        }
      }
    }
  };
  public lineChartPlugins = [pluginDataLabels];
  public lineChartColors: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
    {
      borderColor: 'white',
      backgroundColor: 'transparent',
    }
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';

  constructor(
    private store: Store,
    public utilityService: UtilityService
  ) { }

  ngOnInit(): void {
  }

  selectDate(index: number): void {
    this.store.dispatch({type: SET_DATE_SELECTION, payload: index});
  }
}
