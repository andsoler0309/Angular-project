import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Movement } from '../movement';
import { MovementService } from '../movement.service';

@Component({
  selector: 'app-movement-create',
  templateUrl: './movement-create.component.html',
  styleUrls: ['./movement-create.component.css']
})
export class MovementCreateComponent implements OnInit {

  movementForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private movementService: MovementService,
  ) { }

  ngOnInit() {
    this.movementForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      countryOfOrigin: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  createMovement(movement: Movement){
    this.movementService.createMovement(movement).subscribe(movement=>{
      console.info('The movement was created: ', movement);
      this.toastr.success('Confirmation', 'movement created');
      this.movementForm.reset();
    });
  }

  cancelCreation(){
    this.movementForm.reset();
  }

}
