const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
app.post("/bhfl",(req,res)=>{
    const {data}=req.body;
    const numbers=[];
    const alphabets=[];
    let highest_alphabet=[];
    data.forEach(item=>{
        if(!isNaN(item)){
            numbers.push(item);
        }else if(typeof item === 'string'){
            alphabets.push(item);
            
        }
    })
    if(alphabets.length>0){
        alphabets.sort();
        highest_alphabet=[alphabets[alphabets.length-1]];
    }
    res.json({
        is_success:true,
        user_id:"HarshPahwa_29112004",
        email:"2236803.cse.cec@cgc.edu.in",
        roll_number:"2236803",
        numbers,
        alphabets,
        highest_alphabet
    });
});
app.get("/bhfl",(req,res)=>{
    res.json({operation_code:1});
});
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});