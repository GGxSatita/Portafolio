import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  login() {
    this.authService.login();
    this.router.navigate(['/principal']);
  }
  
  ngOnInit() {
  }

}
