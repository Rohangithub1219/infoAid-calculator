let String = " "
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=> {
    button.addEventListener('click', (e)=>{
        if( e.target.innerHTML == '='){
            String = eval(String);
            String = parseFloat(String); 
            document.querySelector('.input').value = String;
        }
        else if(e.target.innerHTML == 'AC') {
            String = " "
            document.querySelector('.input').value = String;   
        }
        else if (e.target.innerHTML === 'Del') { // Handle 'del' button
            String = String.slice(0, -1); // Remove the last character from the string
            document.querySelector('.input').value = String;
        }
        else{
        console.log(e.target);
        String = String + e.target.innerHTML;
        document.querySelector('.input').value = String;
        }
    })
});