import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,RouterLink],
  template: `
   <div class="signup-container">
    <h2>Sign Up</h2>
    <form (ngSubmit)="signup()">
  
    <input type="text" [(ngModel)]=user.name  name="name" placeholder=" Name" required>
    <input type="email" [(ngModel)]=user.email  name="email" placeholder="Email" required>
    <input type="password" [(ngModel)]=user.password name="password" placeholder="Password" required >
    <button>Create Account</button>
   
   </form>
   <p>Already have an account? <a routerLink="/login">Login here</a></p>
   </div>

  `,
  styles: `
  .signup-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 25px;
  background: linear-gradient(135deg, #ff6f61, #ff9068);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  color: white;
}

h2 {
  margin-bottom: 15px;
  font-size: 1.8rem;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin: 10px 0;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  outline: none;
}

button {
  padding: 12px;
  background: #222;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: 0.3s;
}

button:hover {
  background: #444;
  transform: scale(1.05);
}

p {
  margin-top: 15px;
  font-size: 1rem;
}

a {
  color: yellow;
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

  
  `
})
export class SignupComponent {
  user={
    name:"",
    email:"",
    password:""

  }
  constructor(private router: Router) {}
  signup(){
    if(this.user.name&&this.user.email&&this.user.password){
      localStorage.setItem('user',JSON.stringify(this.user));
      alert('🎉 Signup Successful! Please login.');
      this.router.navigate(['/login'])
    }else {
      alert('⚠️ Please fill in all fields.');
    }

  }

}
