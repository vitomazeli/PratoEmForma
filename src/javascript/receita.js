async function carregarReceita() {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id"); // exemplo: receita.html?id=omelete

      const resposta = await fetch("src/javascript/receitas.json");
      const receitas = await resposta.json();

      const receita = receitas.find(r => r.id === id);

      if (!receita) {
        document.getElementById("receita-container").innerHTML = "<h2>Receita não encontrada</h2>";
        return;
      }

      document.getElementById("receita-container").innerHTML = `
        <h1>${receita.titulo}</h1>
        <img src="${receita.imagem}" alt="${receita.titulo}" style="width:300px;border-radius:10px">

        <h3>Ingredientes</h3>
        <ul>
          ${receita.ingredientes.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <h3>Modo de preparo</h3>
        <ol>
          ${receita.modoPreparo.map(passo => `<li>${passo}</li>`).join("")}
        </ol>
      `;
    }

    carregarReceita();