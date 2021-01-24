const quiz = [
 {
  question: 'ポケモンルビーサファイヤで最初に選べるポケモンは、アチャモ、ミズゴロウ、あと一つは何？',
  answers: [
  'フシギダネ',
  'キモ二郎',
  'キモリ',
  'ナエトル'
  ],
   correct: 'キモリ'
 },{
  question: 'カビゴンが起きません、どうやって起こす？',
  answers: [
  'ミックスオレ',
  'ポケモンの笛',
  'ゴンベに相談',
  'くすぐる攻撃'
  ],
   correct: 'ポケモンの笛'
 },{
  question: 'ポケモンgo のリリース日は2016年のいつ',
  answers: [
  '7月6日',
  '7月4日',
  '7月20日',
  '7月15日'
  ],
   correct: '7月6日'
 }  
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
 document.getElementById('js-question').textContent = quiz[quizIndex].question;
 let buttonIndex = 0;
 while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
 }
}
setupQuiz();

const clickHandler = (e) => {
  　if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
 } else {
    window.alert('不正解！');
 }
 
 quizIndex++;

 if(quizIndex < quizLength){
 
   setupQuiz(); 
 } else {
    
    window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！' + 'ちよだ鮨のみんな今までありがとうございます！街中で会ったら声かけてね！'); 
 };

};


let handlerIndex = 0;
while (handlerIndex < buttonLength){
 $button[handlerIndex].addEventListener('click', (e)=> {
  clickHandler(e);
});
  handlerIndex++
}
//クリックしたら正誤判定




