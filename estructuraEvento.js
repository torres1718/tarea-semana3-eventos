const vueInstance = new Vue({
    el: '#eventoApp',
        data:{
            colorBarra:'#f5f5f5',
            inputText:''

        },
        methods:{
            entrada:function(event){
                var letra = event.key;


                if(isNumeric(letra)){
                    this.colorBarra='#cf0000';
                }else if(isLetter(letra)){
                    this.colorBarra='#00f500';
                }else{
                    this.colorBarra='#fee800';
                }
                this.inputText=''
            }
        }
});

function isNumeric(n){
    return !isNaN(n) && !isNaN(parseFloat(n));
}
function isLetter(string){
    return string.length === 1 && string.match(/[a-z]/i);
}
