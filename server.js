import express from 'express';
const app=express() ;
const PORT=3000 ;


app.use((req,res,next)=>{
    var data=new Date() ;
    if (data.getDay()==0||data.getDay()==6||data.getHours()<9||data.getHours()>17)
        {
            res.status(403).end("We are only available from Monday to Friday, from 9h to 17h")
        }
        else { return next()}
})

app.use(express.static("dossier"))
app.listen(PORT,(err)=>{
    err ? console.log(err) : console.log('server is running')
})

