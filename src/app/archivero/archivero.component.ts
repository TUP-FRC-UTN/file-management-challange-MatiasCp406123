import { Component, OnInit } from '@angular/core';
import { ArchiveroFormComponent } from '../archivero-form/archivero-form.component';
import { FileServiceService } from '../file-service.service';
import { FileItem, FileType } from '../../models/file.item.model';
import { OwnerCircleComponent } from '../owner-circle/owner-circle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archivero',
  standalone: true,
  imports: [ArchiveroFormComponent,OwnerCircleComponent,CommonModule],
  templateUrl: './archivero.component.html',
  styleUrl: './archivero.component.css'
})
export class ArchiveroComponent implements OnInit {
  files:FileItem[]=[];
selectedFiles:string[]=[];
fileType=FileType;
constructor(private fileService:FileServiceService){}

  ngOnInit(): void {
    this.fileService.getFiles().subscribe(files=>{
      this.files=files;
    })
  }
  toggleSelection(id:string){
    const index=this.selectedFiles.indexOf(id);
    if(index>-1){
      this.selectedFiles.splice(index,1);
    }
    else{
      this.selectedFiles.push(id);
    }
  }
deletedSelected():void{
  if(this.selectedFiles.length===1){
    this.fileService.deleteFiles(this.selectedFiles)
    this.selectedFiles=[];
  }
  else if(confirm('estas seguro de eliminar esto?')){
    this.fileService.deleteFiles(this.selectedFiles);
    this.selectedFiles=[];
  }

}
truncateName(name:string):string{
  return name.length>10? name.slice(  0,10)+'...': name;  
}


getExtraOwnersCount(file: FileItem): number {
  return file.owners.length > 3 ? file.owners.length - 3 : 0;
}

}
