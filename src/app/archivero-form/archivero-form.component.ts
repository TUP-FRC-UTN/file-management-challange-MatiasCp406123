import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { FileServiceService } from '../file-service.service';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archivero-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './archivero-form.component.html',
  styleUrl: './archivero-form.component.css'
})
export class ArchiveroFormComponent implements OnInit {
  fileForm!: FormGroup;
  @Output() formSubmit = new EventEmitter<FileItem>();
  @Output() formCancel = new EventEmitter<void>();
  folders!: FileItem[];
  allOwners!: FileOwner[];
  fileType = Object.values(FileType).filter(value => typeof value === 'number');

  constructor(private fb: FormBuilder, private fileService: FileServiceService) {
    console.log('ArchiveroFormComponent constructor called');
  }

  ngOnInit(): void {
    console.log('ArchiveroFormComponent ngOnInit called');
    this.fileForm = this.fb.group({
      name: ['', Validators.required],
      type: [FileType.FILE, Validators.required],
      parentId: [''],
      owners: [[]]
    });
    this.folders = this.fileService.getFolder();
    this.allOwners = this.fileService.getOwner();
    console.log('Form initialized:', this.fileForm);
  }

  onSubmit(): void {
    console.log('onSubmit called, form valid:', this.fileForm.valid);
    console.log('Form values:', this.fileForm.value);
    if (this.fileForm.valid) {
      const newFile: FileItem = {
        id: Date.now().toString(),
        name: this.fileForm.value.name,
        creation: new Date(),
        type: this.fileForm.value.type,
        owners: this.fileForm.value.owners,
        parentId: this.fileForm.value.parentId || undefined
      };
      console.log('New file object:', newFile);
      this.fileService.addFile(newFile);
      console.log('Emitting formSubmit event');
      this.formSubmit.emit(newFile);
      this.fileForm.reset({ type: FileType.FILE });
    } else {
      console.log('Form is invalid');
    }
  }

  getFileTypeName(type: FileType): string {
    return FileType[type];
  }

  onCancel() {
    console.log('onCancel called');
    this.formCancel.emit();
  }
}
