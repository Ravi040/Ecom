import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  template: `
   <div class="login-container">
  <h2>Login</h2>
  <form (ngSubmit)="login()">
    <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required />
    <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
  <p>Don't have an account? <a routerLink="/signup">Sign up here</a></p>
</div>

  `,
  styles: `
  .login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 25px;
  background: linear-gradient(135deg, #007bff, #00c6ff);
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
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login(){
    const storeduser =localStorage.getItem('user')
    if(storeduser){
      const user=JSON.parse(storeduser)

      if(user.email===this.email && user.password===this.password){
       localStorage.setItem('loggedInUser', JSON.stringify(user.name)); // Store user name
        alert(`✅ Welcome, ${user.name}!`);
        this.router.navigate(['/']);
        
      }else {
        alert('❌ Invalid email or password.');
      }

    }else {
      alert('⚠️ No account found. Please sign up first.');
    }


    
  }


}
