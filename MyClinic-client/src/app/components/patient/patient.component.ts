import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit {
  patient!: singlePatient;
  constructor(private http: HttpClient, private route: ActivatedRoute) { };
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      p => {
        const id = p.get("id");
        this.http.get<singlePatient>(`https://localhost:7099/api/patients/${id}`)
          .subscribe(
            r => {
              this.patient = r;
            }
          )
      }
    );
  }
}
type singlePatient = {
  id: number,
  name: string,
  gender: string,
  dateOfBirth: string,
  address: string,
  email: string,
  phone: string,
  appointments: appointment[]
}
type appointment = {
  id: number,
  patientId: number,
  subject: string,
  description: string,
  createdDate: string,
  cancelledDate: string,
  begin: string,
  end: string,
  workDayId: number,
  doctorId: number,
  doctorName: string,
  specialization: string
}
