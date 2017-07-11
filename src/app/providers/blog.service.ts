// importa lodash como _
import * as _ from 'lodash';
// usado para decorar serviços angular
import { Injectable } from '@angular/core';
// usado para navegarmos entre rotas
import { Router } from '@angular/router';
// usado para requisições GET, POST, etc
import { Http } from '@angular/http';

// declara uma constante base url
const BASEURL = window.location.href;
@Injectable() 

export class BlogService {

  // declara uma variável de escopo global na classe com a url do serviço
  // externo que iremos consumir. experimente copiar e colar esta url no seu
  // navegador.
  getUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    public http: Http, 
    public router: Router
  ) { }

  // pegar a lista de posts
  posts() {
    // retorna uma promessa que quando resolvida irá conter a lista de posts
    return new Promise((resolve, reject) => {
      this.http.get(this.getUrl).subscribe((data: any) => {
        // declara uma variável local posts
        let posts = JSON.parse(data._body);
        // loop nos posts pra criar umas propriedades extras
        posts.map((post, i) => {
          // título no-formato-de-slug
          posts[i].titleSlug = _.kebabCase(post.title);
          // a rota deste post
          posts[i].router = '/' + posts[i].titleSlug + '/' + posts[i].id;
          // a url deste post
          posts[i].url = BASEURL + posts[i].router;
        });
        resolve(posts); // resolve a lista de posts
      }, (err) => {
        reject(err); // rejeita a promessa com o erro
      });
    })
  }
  // pegar um post especifico, passando como parametro o id do post
  post(id: any) {
    return new Promise((resolve, reject) => {
      // pegamos a lista de posts
      this.posts().then((posts: any[]) => {
        // filtramos procurando pelo post especifico
        let post = _.find(posts, (p) => {
          return p.id == id;
        });
        // se tiver post resolve, senão rejeita (erro 404)
        return post ? resolve(post) : reject('post not found');
      });
    })
  }
}