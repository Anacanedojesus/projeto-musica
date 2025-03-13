let audios = [
    {caminho:'Iframe BORA VIVER - Fiduma & Jeca (F&J 10 ANOS) [LFWH_sTlGQk].mp3', legenda:'Matuto de verdade'},
    {caminho:'Iframe Cortando As BR - Fernando & Sorocaba, Fiduma & Jeca Ao Vivo em Jaguariúna [mS-PIgqcd-o].mp3', legenda:'Arash'},
    {caminho:'Iframe Felipe & Rodrigo - Gosta de Rua (Ao Vivo Em Goiânia) #QuestãoDeTempo [ZsN_0_6yEXk].mp3', legenda:'Paula Fernandes'},
    {caminho:'Iframe Israel & Rodolffo - Arruma Um Bão (Termômetro) [acfpoa3zsyE].mp3', legenda:'Hayit'},
    {caminho:'Helena.mp3', legenda:'Helena'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
    {caminho:'titanic.mp3', legenda:'Titanic'},
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
