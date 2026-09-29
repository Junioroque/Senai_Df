function topo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  const botao = document.getElementById("voltar-topo");
  if (botao) botao.style.display = window.scrollY > 300 ? "block" : "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const formLogin = document.getElementById("form-login");
  const formCadastro = document.getElementById("form-cadastro");

  if (formLogin) {
    formLogin.addEventListener("submit", function (event) {
      event.preventDefault();
      const usuario = document.getElementById("usuario-login").value.trim();
      const senha = document.getElementById("senha-login").value;
      const mensagem = document.getElementById("mensagem-login");

      if (!usuario || !senha) {
        mensagem.className = "alert alert-warning mt-3";
        mensagem.textContent = "Preencha usuário e senha.";
        return;
      }
      if (senha.length < 6) {
        mensagem.className = "alert alert-warning mt-3";
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
      }
      mensagem.className = "alert alert-success mt-3";
      mensagem.textContent = "Login validado com sucesso! (Demonstração)";
    });
  }

  if (formCadastro) {
    formCadastro.addEventListener("submit", function (event) {
      event.preventDefault();
      const usuario = document.getElementById("usuario-cadastro").value.trim();
      const email = document.getElementById("email-cadastro").value.trim();
      const senha = document.getElementById("senha-cadastro").value;
      const mensagem = document.getElementById("mensagem-cadastro");

      if (!usuario || !email || !senha) {
        mensagem.className = "alert alert-warning mt-3";
        mensagem.textContent = "Preencha todos os campos.";
        return;
      }
      if (senha.length < 6) {
        mensagem.className = "alert alert-warning mt-3";
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
      }
      mensagem.className = "alert alert-success mt-3";
      mensagem.textContent = "Cadastro realizado com sucesso! (Demonstração)";
      formCadastro.reset();
    });
  }

  document.querySelectorAll(".btn-comprar").forEach(function (botao) {
    botao.addEventListener("click", function () {
      botao.textContent = "Adicionado ✓";
      botao.classList.remove("btn-primary");
      botao.classList.add("btn-success");
    });
  });
});
