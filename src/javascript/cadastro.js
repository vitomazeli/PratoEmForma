document.getElementById("form-cadastro").addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const senha2 = document.getElementById("senha2").value;


email.addEventListener('email',(event)=>{
    console.log(event.target.value)
});

  if (senha !== senha2) {
    alert("As senhas não coincidem!");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/cadastro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Cadastro realizado com sucesso!");
      document.getElementById("form-cadastro").reset();
    } else {
      alert(data.error || "Erro ao cadastrar.");
    }
  } catch (err) {
    alert("Erro ao conectar com o servidor.");
  }
});
