const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
const mongoose=require("mongoose");

dotenv.config();
const {Schema}=mongoose;
const productShema=new Schema(
    {
    icon:{type:String, required:true},
    title:{type:String, required:true},
    about:{type:String, required:true},

},
{timestamps:true}
)
const Products=mongoose.model("Products", productShema)
const app=express()

app.use(cors())
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>")
})

//ALL PRODUCTS
app.get("/products", (req,res)=>{
    Products.find({},(err, docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})


//PRODUCT BY ID
app.get("/products/:id",(req,res)=>{
    const {id}=req.params
    Products.findById(id,(err,doc)=>{
        if(!err){
           if(doc){
            res.send(doc)

           }else{
            res.status(404).json({message:"NOT FOUND"})
           }
        }else{
            res.status(500).json({message:err})
        }
    })
})

//DELETE PRODUCT
app.delete("/products/:id",(req,res)=>{

    const {id}=req.params
    Products.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("Deleted data")
            
        }else{
            res.status(404).json({message:err})
        }
    })
})

//ADD PRODUCT
app.post("/products",(req,res)=>{
    const product=new Products({
        icon:req.body.icon,
        title:req.body.title,
        about:req.body.about,
        
    })
    product.save()
    res.send({message:" Created"})
})


const PORT=process.env.PORT
const url=process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
    console.log("DB connect");
        app.listen(PORT,()=>{
            console.log("Server start");
        })
    }
})