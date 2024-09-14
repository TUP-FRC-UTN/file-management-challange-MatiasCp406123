import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { ArchiveroComponent } from './archivero/archivero.component';
import { ArchiveroFormComponent } from './archivero-form/archivero-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ArchiveroComponent,ArchiveroFormComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
  showForm=false
  toggleForm() {
    this.showForm = !this.showForm;
  }

  onFormSubmit(newFile: FileItem) {
    console.log('Nuevo archivo recibido:', newFile);
    this.files.push(newFile)
    this.showForm=false;
  }
}
