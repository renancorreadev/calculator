class CalcController {
    
    constructor(){
         this._operation = [];
         this._locale = 'pt-br'
         this._displayCalcElement = document.querySelector('#display');
         this._dateElement = document.querySelector('#data');
         this._timeElement = document.querySelector('#hora');
         this._currentDate;
         this.initButtonsEvents();
         this.initialize();
    }

    initialize(){
        this.setDisplayDateTime();
        setInterval( () => {
            this.setDisplayDateTime()
        }, 1000);
    }

    addEventListeenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        }) 
    }

    clearAll() {
        this._operation = [];
        this.displayCalc = '0';
    }
    clearEntry() {
        this._operation.pop();
    }

    addOperation(value) {
        this._operation.push(value);
        console.log(this._operation);
    }
    setError(){
        this.displayCalc = 'Error';
    }

    execBtn(value){
        switch(value){
            case 'ac': 
                this.clearAll();
                break;
            case 'ac': 
                this.clearEntry();
                break;
            case 'soma':
                
                break;
            case 'subtracao':

                break;
            case 'divisao':

                break;
            case 'multiplicacao':

                break;
            case 'porcento':

                break;
            case 'igual':

                break;
            case 'ponto':

                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default: 
                this.setError();
                break;
        } 
    }
    
    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index) => {
            this.addEventListeenerAll(btn, 'click drag', event => {
               let textBtn = btn.className.baseVal.replace('btn-', '');
               this.execBtn(textBtn);
            })

            this.addEventListeenerAll(btn, 'mouseover mouseup mousedown', event => {
                btn.style.cursor = 'pointer';
            })
        });
    }

    setDisplayDateTime () {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._timeElement.innerHTML;
    }

    get displayDate() {
        return this._dateElement.innerHTML;
    }

    get displayCalc(){
        return this._displayCalcElement.innerHTML;
    }
    
    get currentDate(){
        return new Date();
    }

    set displayCalc(value){
        this._displayCalcElement.innerHTML = value;
    }

    set currentDate(value){
        this._currentDate = value;
    }

    set displayTime(value) {
        this._timeElement.innerHTML = value;
    }

    set displayDate(value) {
        this._dateElement.innerHTML = value;
    }
}