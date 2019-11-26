localStorage.setItem("posts", '{"posts":[{"autor":"PessoaX","titulo":"Postagem 1","descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo tincidunt ex. Proin sollicitudin velit quis dictum efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam vestibulum neque et nulla scelerisque, et condimentum mauris iaculis. Sed velit urna, aliquet id laoreet volutpat, interdum ut enim. Donec ornare eget justo at sodales. In tempus eleifend nulla non efficitur. Duis consequat tortor lacus, eu hendrerit orci egestas nec. Aliquam vel quam dapibus, eleifend leo ut, fringilla tellus. Praesent mollis ipsum convallis, posuere nisl et, suscipit orci. Mauris id nulla id magna lobortis ornare. Nunc aliquam mollis risus, tempus efficitur eros consequat id. ","materia":"foo","serie":"bar"},{"autor":"PessoaY","titulo":"Postagem 2","descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia libero id egestas fringilla. Proin placerat accumsan ante, ultricies varius nibh mollis at. Duis blandit placerat tincidunt. Sed dapibus eget neque non luctus. Quisque porttitor lobortis urna at tempus. Curabitur feugiat metus et commodo consectetur. Pellentesque tempor lacus lacus, bibendum ultricies nisl sodales quis. Mauris tempor, enim ut placerat mattis, nibh ante pulvinar diam, id tempus mauris quam vitae ex. Duis fringilla tincidunt sapien eget convallis. Cras a ex a dolor efficitur convallis in at nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. ","materia":"foo","serie":"bar"},{"autor":"PessoaZ","titulo":"Postagem 3","descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dapibus magna, a posuere nunc. Vestibulum aliquet vel erat vel mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur sed dictum turpis. Vivamus vehicula lectus et lacus laoreet, vel sagittis urna volutpat. Suspendisse rutrum semper consequat. Aliquam turpis nisi, eleifend eleifend malesuada sagittis, tristique quis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia nisl id purus accumsan accumsan vitae in urna. Donec vehicula dolor ante, a posuere quam porttitor in. Curabitur ut lectus posuere, pharetra lectus eu, volutpat arcu. Vestibulum sed gravida nunc, sit amet fermentum mauris. Nam bibendum turpis eu lectus varius viverra et at felis. ","materia":"foo","serie":"bar"}]}');

/* JSON legível dos posts:

{

	"posts": [

		{
			"autor": "PessoaX",
			"titulo": "Postagem 1",
			"descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo tincidunt ex. Proin sollicitudin velit quis dictum efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam vestibulum neque et nulla scelerisque, et condimentum mauris iaculis. Sed velit urna, aliquet id laoreet volutpat, interdum ut enim. Donec ornare eget justo at sodales. In tempus eleifend nulla non efficitur. Duis consequat tortor lacus, eu hendrerit orci egestas nec. Aliquam vel quam dapibus, eleifend leo ut, fringilla tellus. Praesent mollis ipsum convallis, posuere nisl et, suscipit orci. Mauris id nulla id magna lobortis ornare. Nunc aliquam mollis risus, tempus efficitur eros consequat id. ",
			"materia": "foo",
			"serie": "bar"
		},

		{
			"autor": "PessoaY",
			"titulo": "Postagem 2",
			"descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia libero id egestas fringilla. Proin placerat accumsan ante, ultricies varius nibh mollis at. Duis blandit placerat tincidunt. Sed dapibus eget neque non luctus. Quisque porttitor lobortis urna at tempus. Curabitur feugiat metus et commodo consectetur. Pellentesque tempor lacus lacus, bibendum ultricies nisl sodales quis. Mauris tempor, enim ut placerat mattis, nibh ante pulvinar diam, id tempus mauris quam vitae ex. Duis fringilla tincidunt sapien eget convallis. Cras a ex a dolor efficitur convallis in at nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
			"materia": "foo",
			"serie": "bar"
		},

		{
			"autor": "PessoaZ",
			"titulo": "Postagem 3",
			"descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu dapibus magna, a posuere nunc. Vestibulum aliquet vel erat vel mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur sed dictum turpis. Vivamus vehicula lectus et lacus laoreet, vel sagittis urna volutpat. Suspendisse rutrum semper consequat. Aliquam turpis nisi, eleifend eleifend malesuada sagittis, tristique quis eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia nisl id purus accumsan accumsan vitae in urna. Donec vehicula dolor ante, a posuere quam porttitor in. Curabitur ut lectus posuere, pharetra lectus eu, volutpat arcu. Vestibulum sed gravida nunc, sit amet fermentum mauris. Nam bibendum turpis eu lectus varius viverra et at felis. ",
			"materia": "foo",
			"serie": "bar"
		}

	]

}

*/

// Modelo das postagens convertidos em String
var allBeforeName = "<div class=\"border mt-4 postagem\"> <div class=\"row mt-2\"> <div class=\"ml-5\" class=\"col-sm-5\"> <label>Autor:</label><a class=\"ml-1\" href=\"\">";
var allBeforePostNumber = "</a> </div> <div class=\"col-sm-5 d-flex justify-content-center\"> <h4><a href=\"post.html?post=post";
var allBeforePostTitle = "\">";
var allBeforeSpanId = "</a></h4> </div> <div class=\"col-sm-5 d-flex justify-content-end\"> <span id=\"cont_post_";
var allBeforeUpId = "\" class=\"d-flex align-items-center\">0</span> <button class=\"btn btn-success ml-sm-1\" onClick=\"upVote('cont_post_";
var allBeforeDownId = "');\">&#11014;</button> <button class=\"btn btn-danger ml-sm-1\" onClick=\"downVote('cont_post_";
var allBeforeReport = "');\">&#11015;</button> <button class=\"btn btn-warning ml-sm-1\" onClick=\"denunciar('cont_post_";
var allBeforeDelete = "');\">Denunciar &#9888;</button>	<button class=\"btn btn-danger btn-excluir ml-sm-1\" onClick=\"excluir('cont_post_";
var allBeforeDescription = "');\">Excluir &#128465;</button>		</div>	</div>	<div class=\"row ml-2 mr-2 mt-2\">		<div>			<p>Descrição: ";
var stringEnd = "</p> </div> </div> </div>";

/* Modelo de Postagem:

<div class="border mt-4 postagem">
	<div class="row mt-2">
		<div class="ml-5" class="col-sm-5">
			<label>Autor:</label><a class="ml-1" href="">*NomePessoa*</a>
		</div>
		<div class="col-sm-5 d-flex justify-content-center">
			<h4><a href="post.html?post=post*NumPost*">*TituloPost*</a></h4>
		</div>
		<div class="col-sm-5 d-flex justify-content-end">
			<span id="cont_post_*numPost*" class="d-flex align-items-center">0</span>
			<button class="btn btn-success ml-sm-1" onClick="upVote('cont_post_*NumPost*');">&#11014;</button>
			<button class="btn btn-danger ml-sm-1" onClick="downVote('cont_post_*NumPost*');">&#11015;</button>
			<button class="btn btn-warning ml-sm-1" onClick="denunciar('cont_post_*NumPost*');">Denunciar &#9888;</button>
			<button class="btn btn-danger ml-sm-1 btn-exluir" onClick="excluir('cont_post_*NumPost*');">Excluir &#128465;</button>
		</div>
	</div>
	<div class="row ml-2 mr-2 mt-2">
		<div>
			<p>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo tincidunt ex. Proin sollicitudin velit quis
				dictum efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam vestibulum neque et nulla scelerisque, et condimentum
				mauris iaculis. Sed velit urna, aliquet id laoreet volutpat, interdum ut enim. Donec ornare eget justo at sodales. In tempus eleifend nulla non efficitur. Duis
				consequat tortor lacus, eu hendrerit orci egestas nec. Aliquam vel quam dapibus, eleifend leo ut, fringilla tellus. Praesent mollis ipsum convallis, posuere nisl et,
				suscipit orci. Mauris id nulla id magna lobortis ornare. Nunc aliquam mollis risus, tempus efficitur eros consequat id.
			</p>
		</div>
	</div>
</div>

*/

localStorage.setItem("cadastros", '{"cadastros":[{"nome": "Professor Padrão da Silva","email": "profpadrão@example.com","senha": "senhasegura123","confirmacao": "senhasegura123","area": "lpt","formacao": "grd"},{"nome": "Professora Registrada dos Santos","email": "profaregistrada@example.com","senha": "senhaboa1980","confirmacao": "senhaboa1980","area": "mat","formacao": "pdg"}]}');

/* JSON legível dos cadastros

{"cadastros":[

        {
          "nome": "Professor Padrão da Silva",
          "email": "profpadrão@example.com",
          "senha": "senhasegura123",
          "confirmacao": "senhasegura123",
          "area": "lpt",
          "formacao": "grd"
        },
        {
          "nome": "Professora Registrada dos Santos",
          "email": "profaregistrada@example.com",
          "senha": "senhaboa1980",
          "confirmacao": "senhaboa1980",
          "area": "mat",
          "formacao": "pdg"
        }


    ]
}

*/
