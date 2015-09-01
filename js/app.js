(function () {
    var app = angular.module("vaivem", []);

    app.controller("mainCtrl", ['$scope', '$http', function ($scope, $http) {
        
        
        this.newReceita = {};
        
        this.createNewReceita = function(){
            
            this.newReceita = {
                    id:0,
                    name:'',
                    direction:'in',
                    enable:true,
                    contatos:[],
                    message:'',
                    contactList:''
                };
            this.selectPage('quem');
        };
        
        this.addContact = function(name){
            var newContact = {name:name};
            this.newReceita.contatos.push(newContact);
            this.selectPage('quem'); 
            this.newReceita.contactList+= name + ",";
        };
        
        this.contatos = [
                {name:'Camila Lopez'},
                {name:'Fred Picanço'},
                {name:'Guilherme Faria'},
                {name:'Leo Victorio'},
                {name:'Marlus Araujo'},
                {name:'Pedro Ygor'},
                {name:'Tatiana Martins'},
                {name:'Wilson Almeida'},
            ];
        
        this.addReceita = function(){
            this.receitas.push(this.newReceita);
            this.selectPage('home'); 
        }
        
        this.receitas = [
            
            {   
                id:1,
                name:'Receita 1', 
                direction:'out',
                enable:true
            }
            ];

        this.addTitulo = function(){
            this.newReceita.name=this.newName;
            this.selectPage('resumo');
        }
        
        this.addMessage = function(){
            this.newReceita.message=this.newMessage;
            this.selectPage('titulo');
        }
        
        this.selectedPage = 'splash';
        
        this.selectPage = function (newPage){

            this.selectedPage = newPage;
        };

        this.isSelectedPage = function(selectPage){
            return this.selectedPage === selectPage;
        };

        this.getImageName = function(enable, direction){
         
            if (enable === true && direction==='out'){
                return 'img/vai_on.png'
            };
            if (enable === false && direction==='out'){
                return 'img/vai_off.png'
            };
            if (enable === true && direction==='in'){
                return 'img/vem_on.png'
            };
            if (enable === false && direction==='in'){
                return 'img/vem_off.png'
            };
            
        }
        
    } ]);
    
})();