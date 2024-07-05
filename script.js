const content =document.getElementById('content');
const special = /[\[{(.+*?|^$]/;
function search(){
   let input = document.getElementById('input').value;

   if(input!==''){
      if(special.test(input)) input=input.replace(special, "\\$&");
      let regExp = new RegExp(input, "gi");
      content.innerHTML=(content.textContent).replace(regExp, "<mark>$&</mark>");
   }
}
function changeContent(){
   let textArea = document.getElementById('textArea');
   content.textContent = textArea.value;
   console.log(textArea);
}
