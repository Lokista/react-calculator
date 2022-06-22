import React , { useState } from 'react'
import '../App.css'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import TextField  from '@mui/material/TextField'

// Wow I finally made it pog!

export default function Calculator() {
    const [temporaryResult , setTemporaryResult ] = useState("") // our result
    const [temporaryNumber , setTemporaryNumber ] = useState("0"); // our number
    const [temporarySign , setTemporarySign] = useState("") // our sign
    const [isTempR , setIsTempR] = useState(false) // it checking if sign was called first time it should call isSignFirstTime but it was easier for me to write due to interpretion while writing like  is temporary Result first time changed
    const [isTempN , setIsTempN] = useState(false) // its checking if number was input first time
    const [isDecimal , setIsDecimal] = useState(false); // checking if decimal was called already
    const [isEqual , setIsEqual] = useState(false); // program know when we use equal so he addapt

    const reset = () => { // its reseting everything to default
        setIsTempN(false)
        setTemporarySign("")
        setTemporaryNumber("0")
        setTemporaryResult("")
        setIsDecimal(false)
        setIsTempR(false)
    }

   const deleteNum = () => { //deleting last character from number
     if(temporaryNumber.charAt(temporaryNumber.length-1) === "."){ //deleting last character if its decimal and make chance to make new decimal
        setIsDecimal(false)
        setTemporaryNumber(temporaryNumber.substring(0, temporaryNumber.length - 1))


    }else if(temporaryNumber === "0" && isTempR === false){ // checking if its default starting value then it make it from 0 to empty
            setTemporaryResult(temporaryNumber);
            setTemporaryNumber("");
            setIsTempR(true)

        }else if(temporaryNumber === "" && temporarySign !== "" && temporaryResult.indexOf(".") !== -1){ //cvhecking sign if number is empty and sign is not empty and result has decimal
            setTemporarySign("") // remving sing
            setTemporaryNumber(temporaryResult) // changing result to number
            setTemporaryResult("")      //changing result to 0 cuz no we are operating on temporary number
            setIsDecimal(true) // decinal true so we can't use decimal cuz its already here
            setIsTempR(false) // we clear sign so we need to reset it to make calculator work corectly
            
        }else if(temporaryNumber === "" && temporarySign !== ""){  // checking if numberr is empty and sign is not empty then it will remove sign change result with temporary number and as always if we remove sign we want to make tempR false
            setTemporarySign("")
            setTemporaryNumber(temporaryResult)
            setTemporaryResult("")
            setIsTempR(false)
        }else if(temporaryNumber !== ""){ // checking if number is not empty then delete last character
            setTemporaryNumber(temporaryNumber.substring(0, temporaryNumber.length - 1))   
    }
}
    const declareNum = (num) => { // we are declaring value to our number
        // let xd = temporaryNumber;
        // console.log(num)
        // console.log(xd)
        if(isTempN === false && num !== "."){ // checking if its render first time and if its not decimal
            setTemporaryNumber("") // making empty from 0(default value)
            setTemporaryNumber((prev) => prev.concat(num)) // its connecting string so we have new number
            setIsTempN(true) // declaring that we already render it first time
            }else if(isDecimal === false && num === "." && temporaryNumber === "" ){ //its preventing from decimal to be first character
                console.log("Decimal can't be first")
                }else if(isDecimal === false && num === "." && temporaryNumber === "-" ){ //its preventing from decimal to be first character after -
                    console.log("Decimal can't be first")
                    }else if(isDecimal === false && num === "." && temporaryNumber !== "" ){ // if decimal is not used and our number is decimal also number is not empty  we are adding "." and declaring that decimal is used
            setTemporaryNumber((prev) => prev.concat(num))
            setIsTempN(true)
            setIsDecimal(true)
            }else if(isDecimal === true && num === "."){ // its preventing for putting multiple "." inside number
                console.log("i can't put another decimal in")
            }else if(temporaryResult !== "" && temporarySign === "" && isEqual === true){ // after equal its going to make reset and take input variable into number
                setTemporaryResult("")
                setIsTempR(false)
                setIsDecimal(false)
                setIsEqual(false)
                setTemporaryNumber((prev) => prev.concat(num)) 

            }else{ // poprostu dodaje do stringa zmienna
                setTemporaryNumber((prev) => prev.concat(num))
            }
    }
    let num1 = parseFloat(temporaryResult) // we are setting our results(string) as number
    let num2 = parseFloat(temporaryNumber) // we are setting our number(string) as number
    const equal = () => { // its like switch case if something is + then we are adding and if - then we are minus number from result etc.
        if(temporarySign === "+" && temporaryNumber !== ""){ // if sign is + and number is something
            setTemporaryResult((num1+num2).toString()) //we are adding here to result
            setTemporaryNumber("") // reseting number to empty
            setTemporarySign("") // reseting sign
            setIsDecimal(false) // setting decimal to false
            setIsEqual(true) // setting equal to true so program know that everything is after equal

        }
        if(temporarySign === "-" && temporaryNumber !== ""){
            setTemporaryResult((num1-num2).toString())
            setTemporaryNumber("")
            setTemporarySign("")
            setIsDecimal(false)
            setIsEqual(true)
        }
        if(temporarySign === "*" && temporaryNumber !== ""){
            setTemporaryResult((num1*num2).toString())
            setTemporaryNumber("")
            setTemporarySign("")
            setIsDecimal(false)
            setIsEqual(true)
        }
        if(temporarySign === "/" && temporaryNumber !== ""){
            setTemporaryResult((num1/num2).toString())
            setTemporaryNumber("")
            setTemporarySign("")
            setIsDecimal(false)
            setIsEqual(true)
        }
        if(temporarySign === "%" && temporaryNumber !== ""){
            setTemporaryResult((num1%num2).toString())
            setTemporaryNumber("")
            setTemporarySign("")
            setIsDecimal(false)
            setIsEqual(true)
        }

    }
    const add = () => { // here we are adding
        if(temporarySign === ""){ // if there is no sign
            if(isTempR === false){ // if its first time we are using sign
                setTemporaryResult(temporaryNumber); // we are swapping number with result
                setTemporaryNumber(""); // we are setting number to empty
                setTemporarySign("+") // we are setting our sign to +
                setIsTempR(true); // we are telling program that we used first time already our sign
                setIsDecimal(false) // we are setting decimal to false cuz we are saving our result
            } else{
             setTemporarySign("+") // we are setting our sign to be +
            }
        } else{
            if(temporaryResult !== "" && temporaryNumber !== "" && temporarySign === "+"){ // if result is not empty and number too and sign is + 
                setTemporaryResult((num1+num2).toString()) // we are adding to result , result + number
                setIsDecimal(false) // we are setting decimal to false cuz we are saving our result
                setTemporaryNumber("") // we are setting number to empty
                setTemporarySign("+") // we are setting our sign to be + again
            }else{
                if(temporarySign === "-"){ // if sign was minus we are calculating numbers for minus and then we say sign is +
                    minus()
                    setTemporarySign("+")
                }
                if(temporarySign === "*"){
                    times()
                    setTemporarySign("+")
                }
                if(temporarySign === "%"){
                    restDivide()
                    setTemporarySign("+")
                }
            }

        }
    }
    const minus = () => { // everething expect first if its same as add only diffrence is tha i change + to minus
        if(isTempN === false){ // if our number is called first time we are settinig minus as first character
            setTemporaryNumber("")
            setTemporaryNumber("-")
            setIsTempN(true)
        }else if(temporarySign === ""){
            if(isTempR === false){
                setTemporaryResult(temporaryNumber);
                setTemporaryNumber("");
                setTemporarySign("-")
                setIsTempR(true);
                setIsDecimal(false)
            } else{
             setTemporarySign("-")
            }
        } else{
            if(temporaryResult !== "" && temporaryNumber !== "" && temporarySign === "-"){
                setTemporaryResult((num1-num2).toString())
                setIsDecimal(false)
                setTemporaryNumber("")
                setTemporarySign("-")
            }else{
                if(temporarySign === "+"){
                    add()
                    setTemporarySign("-")
                }
                if(temporarySign === "/"){
                    divide()
                    setTemporarySign("-")
                }
                if(temporarySign === "*"){
                    times()
                    setTemporarySign("-")
                }
                if(temporarySign === "%"){
                    restDivide()
                    setTemporarySign("-")
                }
            }

        }
    }
    const divide = () => { // everything is same as add expect one thing that i change sign from + to /
        if(temporarySign === ""){
            if(isTempR === false){
                setTemporaryResult(temporaryNumber);
                setTemporaryNumber("");
                setTemporarySign("/")
                setIsTempR(true);
                setIsDecimal(false)
            } else{
             setTemporarySign("/")
            }
        } else{
            if(temporaryResult !== "" && temporaryNumber !== "" && temporarySign === "/"){
                setTemporaryResult((num1/num2).toString())
                setIsDecimal(false)
                setTemporaryNumber("")
                setTemporarySign("/")
            }else{
                if(temporarySign === "+"){
                    add()
                    setTemporarySign("/")
                }
                if(temporarySign === "-"){
                    minus()
                    setTemporarySign("/")
                }
                if(temporarySign === "*"){
                    times()
                    setTemporarySign("/")
                }
                if(temporarySign === "%"){
                    restDivide()
                    setTemporarySign("/")
                }
            }

        }

    }
    const times  = () => {  // everything is same as add expect one thing that i change sign from + to *
        if(temporarySign === ""){
            if(isTempR === false){
                setTemporaryResult(temporaryNumber);
                setTemporaryNumber("");
                setTemporarySign("*")
                setIsTempR(true);
                setIsDecimal(false)
            } else{
             setTemporarySign("*")
            }
        } else{
            if(temporaryResult !== "" && temporaryNumber !== "" && temporarySign === "*"){
                setTemporaryResult((num1*num2).toString())
                setIsDecimal(false)
                setTemporaryNumber("")
                setTemporarySign("*")
            }else{
                if(temporarySign === "+"){
                    add()
                    setTemporarySign("*")
                }
                if(temporarySign === "-"){
                    minus()
                    setTemporarySign("*")
                }
                if(temporarySign === "/"){
                    divide()
                    setTemporarySign("*")
                }
                if(temporarySign === "%"){
                    restDivide()
                    setTemporarySign("*")
                }
            
            }

        }
    }
    const restDivide  = () => { // fidning rest from divide
        if(temporarySign === ""){
            if(isTempR === false){ // checking if sign is called first time and then change temporary number to temporary result
                setTemporaryResult(temporaryNumber);
                setTemporaryNumber("");
                setTemporarySign("%")
                setIsTempR(true);
                setIsDecimal(false)
            } else{ // if sign isn't called first time just changing sign
             setTemporarySign("%")
            }
        } else{
            if(temporaryResult !== "" && temporaryNumber !== "" && temporarySign === "%"){ // checking if result is diffrent from empty and Number from empty and if sign is %
                setTemporaryResult((num1%num2).toString()) // its doing math
                setIsDecimal(false) // changing the decimal to false so its like you can use decimal in future
                setTemporaryNumber("") // temporary number equal 0 cuz we do math to result already
                setTemporarySign("%") // sign equals to %
            }else{ // its like switch 
                if(temporarySign === "+"){
                    add()
                    setTemporarySign("%")
                }
                if(temporarySign === "-"){
                    minus()
                    setTemporarySign("%")
                }
                if(temporarySign === "/"){
                    divide()
                    setTemporarySign("%")
                }
            
            }

        }
    }
    return (
        <div className="Calculator">
            <div className="Monitor"> 
            <TextField value={`${temporaryResult} ${temporarySign} ${temporaryNumber}`}></TextField>
            </div>
            <div className="Buttons">
            <ButtonGroup> 
            <Button className="numberButton" size="small" variant="contained" onClick={() =>  declareNum("1")}  >1</Button>
            <Button className="numberButton" size="small" variant="contained" onClick={() =>  declareNum("2")}>2</Button>
            <Button className="numberButton" size="small" variant="contained" onClick={() =>  declareNum("3")}>3</Button>
            <Button className="numberButton" size="small" variant="contained"  onClick={() => reset()}>CE</Button>
            </ButtonGroup><br/>
            <ButtonGroup>
            <Button className="numberButton" size="small" variant="contained" onClick={() =>  declareNum("4")} >4</Button>
            <Button className="numberButton" size="small" variant="contained" onClick={() =>  declareNum("5")} >5</Button>
            <Button className="numberButton" size="small" variant="contained" onClick={() =>  declareNum("6")} >6</Button>
            <Button className="numberButton" size="small" variant="contained" onClick={() => divide()}  >/</Button>
            </ButtonGroup><br/>
            <ButtonGroup>
            <Button className="numberButton" size="small" variant="contained" onClick={() =>  declareNum("7")} >7</Button>
            <Button className="numberButton" size="small" variant="contained" onClick={() =>  declareNum("8")} >8</Button>
            <Button className="numberButton" size="small" variant="contained" onClick={() =>  declareNum("9")} >9</Button>
            <Button className="numberButton" size="small" variant="contained" onClick={() => times()}>*</Button>
            </ButtonGroup><br/>
            <ButtonGroup>
            <Button className="numberButton" size="small" variant="contained" onClick={() =>  declareNum("0")} >0</Button>
            <Button className="numberButton" size="small" variant="contained"  onClick={() =>  declareNum(".")}>.</Button>
            <Button className="numberButton" size="small" variant="contained"  onClick={() => minus()}>-</Button>
            <Button className="numberButton" size="small" variant="contained"  onClick={() => equal()}>=</Button>
            <Button className="numberButton" size="small" variant="contained"  onClick={() => add()} >+</Button>
            <Button className="numberButton" size="small" variant="contained"  onClick={() => restDivide()} >%</Button>
            <Button className="numberButton" size="small" variant="contained"  onClick={() => deleteNum()} >DEL</Button>
            </ButtonGroup><br/>
            </div>
        </div>
    )
}
