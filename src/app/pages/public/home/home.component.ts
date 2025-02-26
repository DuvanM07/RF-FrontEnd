import { Component } from '@angular/core';
import { ContactComponent } from '../../../components/partial/contact/contact.component';
import { LocationComponent } from '../../../components/partial/location/location.component';
import { AboutUsComponent } from '../../../components/partial/about-us/about-us.component';

@Component({
  selector: 'app-home',
  imports: [ContactComponent, LocationComponent, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
