function busca() {
  let input = document.querySelector(".input input").value;

  const key = "a637d8c29654f942ac2f1ef361ed29b8";

  let api = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric&lang=pt_br`,
  )
    .then((sucesso) => {
      if (!sucesso.ok) {
        throw new Error("Erro de requisição") + sucesso.status;
      }
      return sucesso.json();
    })
    .then((dados) => {
      console.log(dados);
      const caixa = document.querySelector(".Parte__2");
      const sessao1 = document.querySelector(".informações__lugar");

      const dia = new Date().getDate();
      const mes = new Date().toLocaleString("pt-BR", {
        month: "long",
      });
      const nascerSol = new Date(dados.sys.sunrise * 1000).toLocaleTimeString(
        "pt-BR",
        {
          hour: "2-digit",
          minute: "2-digit",
        },
      );

      const porSol = new Date(dados.sys.sunset * 1000).toLocaleTimeString(
        "pt-BR",
        {
          hour: "2-digit",
          minute: "2-digit",
        },
      );

      const dado = dados.weather;

      dado.forEach((dado) => {
        sessao1.innerHTML = `
        <div class="Informação__do__lugar">
                    <div class="informações__parte1">
                        <h3>${dados.name}</h3>
                        <p>Hoje, ${dia} de ${mes}</p>
                    </div>
                    <h2>${dados.main.temp}</h2>

                    <p><b>${dado.description}</b></p>

                    <div class="setinhas">
                        <span><img width="25" height="30"
                                src="https://img.icons8.com/fluency-systems-filled/48/ff0000/thick-arrow-pointing-up.png"
                                alt="thick-arrow-pointing-up" />${dados.main.temp_max}°C</span>
                        <span><img width="25" height="30"
                                src="https://img.icons8.com/fluency-systems-filled/48/0084ff/thick-arrow-pointing-down.png"
                                alt="thick-arrow-pointing-down" />${dados.main.temp_min}°C</span>
                    </div>
                </div>
                <div class="Sol__imagem">
                    <img src="img/imagemSol.png" alt="">
                </div>

        `;

        caixa.innerHTML = `
    
            <div class="card">
            
                    <img width="24" height="24" src="https://img.icons8.com/softteal-color/24/drop-of-blood.png" alt="drop-of-blood"/>
                <div>    
                    <p>Umidade</p>
                    <h2>${dados.main.humidity}</h2>
                </div>     
            </div>

            <div class="card">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/wind.png" alt="wind"/>
                   
                <div>  
                    <p>Vento</p>
                    <h2>${dados.wind.speed * 3.6}</h2>
                </div>
            </div>  

            <div class="card">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/6adff/invisible.png" alt="invisible"/>

                <div>
                    <p>Vibilidade</p>
                    <h2>${dados.visibility / 1000}</h2>
                </div>
            </div>

            <div class="card">
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/6adff/speedometer.png" alt="speedometer"/>
                <div>
                    <p>Pressão</p>
                    <h2>${dados.main.pressure}</h2>
                </div>
            </div>


            <div class="card">
                <img width="26" height="26" src="https://img.icons8.com/metro/26/sunrise.png" alt="sunrise"/>

<div>
                    <p>Nascer do sol</p>
                    <h2>${nascerSol}</h2>

                </div>
                </div>
                <div class="card">
<img width="26" height="26" src="https://img.icons8.com/metro/26/sunset.png" alt="sunset"/>
<div>
                    <p>Pôr do sol</p>
                    <h2>${porSol}</h2>
</div>
                </div>
</div>
    
    `;
      });
    })
    .catch((Erro) => console.log(Erro));
}
