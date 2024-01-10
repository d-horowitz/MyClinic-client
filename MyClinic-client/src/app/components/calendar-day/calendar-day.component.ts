import { Component, Input } from '@angular/core';
import { calendarDay } from '../../types';
import { CommonModule } from '@angular/common';
import { TimediffPipe } from "../../pipes/timediff.pipe";
import { DayHeightPipe } from "../../pipes/day-height.pipe";
import { DayNamePipe } from "../../pipes/day-name.pipe";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
//import Tooltip from 'bootstrap/js/src/tooltip.js';

@Component({
  selector: 'app-calendar-day',
  standalone: true,
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css'],
  imports: [CommonModule, TimediffPipe, DayHeightPipe, DayNamePipe, MatCardModule, MatButtonModule, MatTooltipModule]
})
export class CalendarDayComponent {
  @Input() day!: calendarDay;
}