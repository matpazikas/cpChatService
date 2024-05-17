import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private hubConnection : HubConnection;
  mensagens:string[] = [];
  title = 'chatApp';
  novaMensagem?:string;

  constructor() {
    this.hubConnection = new HubConnectionBuilder()
    .withUrl("http://localhost:7033/chat")
    .build()

    this.hubConnection.start()
    .then(() => console.log('SignalR connected'))
    .catch(err => console.log('erro ao conectar', err))

    this.hubConnection.on("ReceberMensagem", (mensagem:string) => {
      console.log(`Mensagem recebida: ${mensagem}`)
      // this.mensagens.push(mensagem)

      if (!this.mensagens.includes(mensagem)) {
        this.mensagens.push(mensagem);
      }
    })

  }

  enviarMensagem() {
   this.hubConnection.invoke("EnviarMensagem", this.novaMensagem)
   .catch(err => (console.log(err)));
   
   this.novaMensagem = ""
  }
}
