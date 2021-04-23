import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  public forma: FormGroup;

  public constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    // **************************** //
    // ******* MANERA 1 *********** //
    // **************************** //

    // this.forma = new FormGroup({ 
    //   'nombre': new FormControl(''),
    //   'apellido': new FormControl(''),
    //   'dni': new FormControl(''),
    //   'sexo': new FormControl(''),
    //   'email': new FormControl(''),
    //   'terminos': new FormControl('')
    // });

    // **************************** //
    // ******* MANERA 2 *********** //
    // **************************** //

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'sexo': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'terminos': ['', Validators.required]
    });

  }

  public aceptar(): void {
    console.log(this.forma.getRawValue());
  }

  // CUSTOM VALIDATOR
  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }

}