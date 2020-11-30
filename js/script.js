//Genera 10 mail tramite api e stampale in una lista

var app = new Vue ({
    el: "#app",
    data: {
        titolo: "Ecco una lista di mail generate con le API",
        listaEmail: []
    },
    mounted: function() {
        let self = this;
        //ciclo for per generare l'email 10 volte
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (risposta) {
                self.listaEmail.push(risposta.data.response)
            })
            //alternativa con l'arrow function, commentare let self = this
            // .then(risposta => {
            //     this.listaEmail.push(risposta.data.response)
            // })
        }
    }
})