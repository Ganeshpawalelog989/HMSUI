import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(title: string , message : string){
      this.toastr.success(title, message,{
        enableHtml :  true,
        timeOut : 10000,

      })
  }

  showError(title: string , message : string){
    this.toastr.error(title,message,{
      enableHtml :  true,
      timeOut : 10000,

    })
}
  
}
