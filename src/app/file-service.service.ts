import { Injectable } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../models/file.item.model';
import { FILE_LIST, OWNERS } from '../data/file.storage';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor() { }
  private files:FileItem[]=FILE_LIST
  private filesSubject=new BehaviorSubject<FileItem[]>(this.files)
  getFiles(): Observable<FileItem[]>{
    return this.filesSubject.asObservable();
  }
  addFile(file:FileItem):void{
    this.files.push(file);
    this.updateFiles();
  }
  deleteFiles(ids: string[]):void{
    this.files=this.files.filter(file => !ids.includes(file.id));
    this.updateFiles();
  }
  updateFiles():void{
    this.filesSubject.next(this.sortFiles([...this.files]));
  }
  getFolder():FileItem[]{
    return this.files.filter(file=>file.type===FileType.FOLDER);
  }
  getOwner():FileOwner[]{
    return OWNERS;
  }
  private sortFiles(files:FileItem[]):FileItem[]{
    return files.sort((a,b)=>{
      if(a.type===b.type){
        return a.name.localeCompare(b.name);
      }
      return a.type===FileType.FOLDER ? -1:1;
    });
  }
}
