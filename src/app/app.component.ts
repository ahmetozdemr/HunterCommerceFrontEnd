import { Component } from '@angular/core';

//Component html datasının yönetildiği yerdir. bir sınıfın componen olduğunu belirtmek için C# taki attribute gibi üstnde component tanımlanır ve hangi htmlin componenti olduğu belirtilir
//Component declarasyonu kullanabilmek için 'Angular cooredan ' implement etmemiz gerekiyor. C# taki using gibidir
//any veri tipi herşy demek
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'HunterCommerceFrontEnd';
  public stuff: number = 10;

  product1 = { name: "Ahmet", surname: "Karabacak" }
  product2 = { name: "Ramazan", surname: "Yılmaz" }
  product3 = { name: "Mehmet", surname: "Şarapçı" }
  product4 = { name: "Yasin", surname: "Özdemir" }

  products = [this.product1,this.product2,this.product3,this.product4]

 name() {
 console.log('Hello world')
}
  

  //product:any ={a:500}
}
