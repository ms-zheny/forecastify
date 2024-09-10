import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
  template: `
	<div class="chat-container container-fluid d-flex flex-column mt-3 p-3">
		<div class="chat-body flex-grow-1 overflow-auto p-3">
			<div class="message received mb-3">
				<div class="avatar me-3">
					<p><i class="bi bi-robot icon-large"></i></p>
				</div>
				<div class="text">
					<p>Hello, how can I assist you today?</p>
				</div>
			</div>

			<div class="message mb-3" *ngFor="let message of request.messages" [ngClass]="message.role === 'user'? 'sent' : 'received'">

				<div class="text">
					<ng-container *ngIf="message.role === 'system'">
						<pre class="wrap-text" style="margin-top: -20px;">
							{{ message.content }}
						</pre>
					</ng-container>
					<ng-container *ngIf="message.role === 'user'">
						<p class="wrap-text">{{ message.content }}</p>
					</ng-container>
				</div>
			</div>

		</div>
		<div class="chat-footer d-flex justify-content-center align-items-center p-3">
			<form class="d-flex w-100">
				<textarea class="form-control me-2" rows="2" [formControl]="userInput"></textarea>
				<button type="button" class="btn btn-light" [disabled]="userInput.invalid" (click)="send()">
					<i class="bi bi-send"></i> Send
				</button>
			</form>
		</div>
	</div>
  `,
  styles: `
  .chat-container {
	background-color: #fff;
	border-radius: 15px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chat-header {
	height: 60px;
}

.chat-header h1 {
	font-size: 24px;
}

.message {
	display: flex;
	align-items: center;
	border-radius: 10px 10px 10px 10px;
	padding: 10px;
}

.avatar img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}

// user
.sent {
	background-color: #fff8f8;
}

// system
.received {
	background-color:#f2f2f2;	
	//word-wrap: break-word;
}

.wrap-text {
	white-space: pre-wrap;
 }
 
.chat-footer {
	border-radius: 10px;
}

.btn-light:hover {
	background-color: lightgray;

 }

`
})
export class ChatComponent {
    // init chat messages
  request: any = {
    messages: []
  };
  userInput = new FormControl('', [Validators.required]);

  constructor() {

  }

  send(): void {

  }
}
