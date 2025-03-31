import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FileUploadComponent } from "./components/file-upload/file-upload.component";
import { FofComponent } from "@newway/fof";


@Component({
  imports: [NxWelcomeComponent, RouterModule, FileUploadComponent,FofComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'newway';
}
