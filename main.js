// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona o botão de troca de tema
    const toggle = document.getElementById("themeToggle");

    // Recupera o tema salvo no navegador
    const savedTheme = localStorage.getItem("theme");

    // Aplica o tema claro caso ele tenha sido salvo anteriormente
    if (savedTheme === "light") {
        document.body.classList.add("light");
    }

    // Verifica se o botão de tema existe na página
    if (toggle) {

        // Atualiza o ícone conforme o tema atual
        toggle.innerHTML =
            document.body.classList.contains("light")
                ? "☀"
                : "☾";

        // Alterna entre tema claro e escuro
        toggle.addEventListener("click", () => {

            // Adiciona ou remove a classe "light"
            document.body.classList.toggle("light");

            // Verifica qual tema está ativo
            const isLight =
                document.body.classList.contains("light");

            // Salva a preferência do usuário
            localStorage.setItem(
                "theme",
                isLight ? "light" : "dark"
            );

            // Atualiza o ícone do botão
            toggle.innerHTML =
                isLight ? "☀" : "☾";
        });
    }

    // Seleciona todos os slides do carrossel
    const slides = document.querySelectorAll(".slide");

    // Executa apenas se houver slides na página
    if (slides.length > 0) {

        // Controla o slide atual
        let current = 0;

        // Troca automaticamente o slide a cada 4 segundos
        setInterval(() => {

            // Remove a classe do slide atual
            slides[current].classList.remove("active");

            // Avança para o próximo slide
            current++;

            // Retorna ao primeiro slide quando chegar ao final
            if (current >= slides.length) {
                current = 0;
            }

            // Ativa o novo slide
            slides[current].classList.add("active");

        }, 4000);
    }

});

// Seleciona o botão do menu mobile
const menuToggle = document.getElementById("menuToggle");

// Seleciona o menu de navegação
const menu = document.getElementById("menu");

// Verifica se os elementos existem
if (menuToggle && menu) {

    // Abre ou fecha o menu quando o botão é clicado
    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}