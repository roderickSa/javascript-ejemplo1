$(document).ready(function(){

	//slider
	$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,    
    pager:true,
    infiniteLoop:true,
    touchEnabled:true
  });

	//post
	var posts=[
     {
     	tilulo:'Narnia',
     	fecha:moment().format("[publicado el] D [de] MMMM [del] YYYY"),
     	contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
     },
     {
     	tilulo:"Pokemon",
     	fecha:moment().format("[publicado el] D [de] MMMM [del] YYYY"),
     	contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
     },
     {
     	tilulo:"Prometeo",
     	fecha:moment().format("[publicado el] D [de] MMMM [del] YYYY"),
     	contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
     },
     {
     	tilulo:"King Kong",
     	fecha:moment().format("[publicado el] D [de] MMMM [del] YYYY"),
     	contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
     },
     {
     	tilulo:"La ciudda Perdida",
     	fecha:moment().format("[publicado el] D [de] MMMM [del] YYYY"),
     	contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
     },
     {
     	tilulo:"Avengers",
     	fecha:moment().format("[publicado el] D [de] MMMM [del] YYYY"),
     	contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
     }
	];
	//console.log(posts);

	posts.forEach((item,index)=>{

		var post=`      
         <article class="post">
						<h2>${item.tilulo}</h2>
						<span class="date">${item.fecha}</span>
						<p>
						${item.contenido}
						</p> 
							<a href="#" class="button-more">Leer más</a>
	       	</article>
						 `;

		$("#posts").append(post);
		//console.log(post);
	});


	$("#verde").click(function() {      //prueba con localStorage
		localStorage.setItem("color", "css/verde.css");
		elije_tema();
	});
	$("#rojo").click(function() {
		localStorage.setItem("color", "css/rojo.css");
		elije_tema();
	});
	$("#azul").click(function() {
		localStorage.setItem("color", "css/azul.css");
		elije_tema();
	});

	$("#subir").click(function(e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop:0
		},500 );

		return false;
	});

});

	var eleccion=$("#tema");  //prueba con localStorage

  function elije_tema(){

     	var color=localStorage.getItem("color");

     	if(color=="css/verde.css"){
             eleccion.attr('href',color );
     	}else if(color=="css/rojo.css"){
     		eleccion.attr('href', color);
     	}else if(color=="css/azul.css"){
     		eleccion.attr('href', color);
     	}
  }