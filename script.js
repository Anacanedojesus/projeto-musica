let audios = [
    {caminho:'Iframe BORA VIVER - Fiduma & Jeca (F&J 10 ANOS) [LFWH_sTlGQk].mp3', legenda:'Bora viver'},
    {caminho:'Iframe Cortando As BR - Fernando & Sorocaba, Fiduma & Jeca Ao Vivo em Jaguariúna [mS-PIgqcd-o].mp3', legenda:'cortando as br'},
    {caminho:'Iframe Felipe & Rodrigo - Gosta de Rua (Ao Vivo Em Goiânia) #QuestãoDeTempo [ZsN_0_6yEXk].mp3', legenda:'gosta de rua'},
    {caminho:'Iframe Israel & Rodolffo - Arruma Um Bão (Termômetro) [acfpoa3zsyE].mp3', legenda:'arruma um bão'},
    {caminho:'Iframe IMAGINA A GENTE - Fiduma & Jeca , @FiorellaOficial (F&J 10 ANOS) [TWEsyJDO1mM].mp3', legenda:'imagina a gente'},
    {caminho:'Iframe Jorge & Mateus - Tem Que Sorrir (Clipe Oficial) [Álbum Tudo Em Paz] [AtHet50A5L4].mp3', legenda:'tem que sorrir'},
    {caminho:'Iframe Jorge & Mateus, Lauana Prado - Haverá Sinais (Clipe Oficial) [Muo3F10dAcw].mp3', legenda:'haverá sinais'},
    {caminho:'Iframe Maiara & Maraisa - Vai Lá _ iMEMsidão [WuiNLPjTc_U].mp3', legenda:'vai la'},
    {caminho:'CHAPÉU-PRETO-Fiduma-e-Jeca-_Vídeo-Oficial_.mp3', legenda:'chapeu preto'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
