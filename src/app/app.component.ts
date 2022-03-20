import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuitaLetras';

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    string1: '',
    string2: '',
    output1: '',
    output2: ''
  }

  async go(){

    console.log('Go clicked', this.initForm)

    this.initForm.output1 = this.initForm.string1
    this.initForm.output2 = this.initForm.string2

    this.initForm.output2 = await this.quitaLetras(this.initForm.string1,this.initForm.output2 )
    this.initForm.output1 = await this.quitaLetras(this.initForm.string2,this.initForm.output1 )

  }

  reset(){
    console.log('reset clicked', this.initForm)
    this.miFormulario.resetForm();
  }

  quitaLetras(entryString:string, exitString:string){
    for (let index = 0; index < entryString.length; index++) {
      const element = entryString[index]
      exitString = exitString.replaceAll(element,'')
    }

    return exitString
  }
}

