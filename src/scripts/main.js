// Simple Slide
if (window.SimpleSlide) {
    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
        pauseOnHover: true, // pausa a transição automática
    });
    
    new SimpleSlide({
        slide: 'portfolio', // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
        nav: true,
        pauseOnHover: true, // pausa a transição automática
    });
}

// Simple Animne
if (window.SimpleAnime) {
    new SimpleAnime({ })
}


if (window.SimpleForm) {
      new SimpleForm({
          form: ".formphp", // seletor do formulário
          button: "#enviar", // seletor do botão
          erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email lsxavier.00@gmail.com.</p></div>", // mensagem de erro
          sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
        })
  }