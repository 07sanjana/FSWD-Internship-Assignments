const { application } = require('express');
const http=require('http');
const server=http.createServer((req,res)=>{
    
    // res.write("Welcome to our first node server app");
    // res.end();
    /*
    if(req.url==='/')
    {
        res.write("Home Page");
    }
    else if(req.url==='/about')
    {
        res.write("About Page");
    }
    else if(req.url==='/contact')
    {
        res.write("Contact Page");
    }
    else
    {
        res.write("Page Not Found");
    }
    res.end();
    */

    res.writeHead(200, {"Content-Type": "application/json"});
    const data={
        name:"Sanjana",
        role:"Software Engineer",
        skills:["JavaScript","Node.js","React"]
    }
    res.write(JSON.stringify(data));
    res.end();
});
server.listen(3000,()=>{
    console.log("Server is running on port 3000 successfully");
});
