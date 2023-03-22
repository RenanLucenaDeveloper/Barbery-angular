import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./scss/app.component.scss', './scss/partes/_header.scss', './scss/partes/_intro.scss', './scss/partes/_sobre.scss', './scss/partes/_contato.scss', './scss/partes/_footer.scss', './scss/partes/_modal.scss', './scss/partes/_mobile.scss']
})
export class AppComponent {

  //Seleciona o container do modal
    @ViewChild('modalContainer')
    modalContainer?:ElementRef;

  //Seleciona o modal
  @ViewChild('modal')
  modal?:ElementRef;
  
  toggleModal(event : Event) {
    setTimeout(() => {

      if(event.target instanceof HTMLElement && (event.target?.dataset['modal'] === 'container' || event.target?.dataset['modal'] === 'toggle')) {

        console.log(event.target?.classList[0]);

        this.modalContainer?.nativeElement.classList.toggle('ativo');
      }

    }, 0)
  }
}
