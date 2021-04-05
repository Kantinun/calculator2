import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    num = "0";
    operand = 0;
    operator = "";
    replace = true;
    sign = "";
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    equal() {
        if (this.operator == "+") {
            this.num = String(this.operand + Number(this.num));
        } else if (this.operator == "-") {
            this.num = String(this.operand - Number(this.num));
        } else if (this.operator == "*") {
            this.num = String(this.operand * Number(this.num));
        } else if (this.operator == "/") {
            this.num = String(this.operand / Number(this.num));
        }
        this.operator = "";
        this.replace = true;
        this.sign = "";
    }
    ac() {
        this.num = "0";
        this.operand = 0;
        this.operator = "";
        this.replace = true;
        this.sign = "";
    }
    clickButton(num) {
        if (String(num) == '.' && !(this.num.includes('.'))) {
            this.num += '.';
        } else if (this.replace == true) {
            if (this.sign == "-") {
                this.num = "-" + String(num);
            } else {
                this.num = String(num);
            }
        } else if (String(num) != ".") {
            this.num += String(num);
        }
        this.replace = false;
    }
    clickOperater(op) {
        if (this.operator == "") {
            if (this.operand === 0) {
                this.operand = Number(this.num);
                this.operator = op;
                this.replace = true;
            } else {
                this.equal()
                this.operand = Number(this.num);
                this.operator = op;
                this.replace = true;
            }
        } else {
            this.operator = op;
        }
        this.sign = "";
    }

    signInvert() {
        if (this.replace == true) {
            this.num = "0";
        }
        if (this.sign == "") {
            this.sign = "-";
            this.num = this.sign + this.num;
        } else {
            this.sign = "";
            this.num = this.sign+this.num.split("-").join("");
        }
    }
    del(){
        if(this.sign=="-"){
            if(this.num.split("-").join("").length == 1){
                this.num = "-0";
                this.replace=true;
            }else{
                this.num = this.num.substring(0, this.num.length-1);
            }
        }else if(this.sign==""){
            if(this.num.length == 1){
                this.num = "0";
                this.replace=true;
            }else{
                this.num = this.num.substring(0, this.num.length-1);
            }
        }
    }
}
