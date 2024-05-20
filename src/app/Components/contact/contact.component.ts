import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }


  get formControls() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {

      console.log(this.contactForm.value);

      this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Formulario enviado con exito' });

      this.contactForm.reset();
      this.submitted = false;
    }
  }
}
