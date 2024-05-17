import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (protected chatService: ChatService) {}

  // ngOnInit() {
  //   this.enviarMensagem();
  // }

  enviarMensagem() {
    // Chama o método do serviço para enviar uma mensagem
    this.chatService.enviarMensagem();
  }
  
}
