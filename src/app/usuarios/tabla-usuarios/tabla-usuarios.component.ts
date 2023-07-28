import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.services';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit{
  onDestroy = new Subject<void>();
  usuarios: any;
  
  constructor(
    private apiService: ApiService,
  ) { }
  
  ngOnInit(): void {
    this.apiService.getUsers().pipe(takeUntil(this.onDestroy)).subscribe((resp:any) => {
      console.log('users', resp);
      this.usuarios = resp;
    })
  }
  
}
