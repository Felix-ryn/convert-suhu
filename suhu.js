app.get("/celcius/:suhu", (req,res) => { 
    let suhu =  Number(req.params.suhu)
    let reamur = 4/5 * suhu
    let kelvin = suhu + 273 
    let fahrenheit = 9/5 * suhu  + 32
    
    
    let response = {
      celcius: suhu,
      result: {
          reamur : reamur,
          kelvin : kelvin,
          fahrenheit : fahrenheit
  
      },
  
    }
  
      res.json(response)
     })
  
  
     
   app.get("/reamur/:suhu", (req,res) => { 
      let suhu =  Number(req.params.suhu)
      let celcius = 5/4 * suhu
      let kelvin = 5/4 * suhu + 273
      let fahrenheit = 9/4 * suhu + 32
      
      
      let response = {
        reamur: suhu,
        result: {
            celcius : celcius,
            kelvin : kelvin,
            fahrenheit : fahrenheit
    
        },
    
      }
    
        res.json(response)
       })
  
       app.get("/kelvin/:suhu", (req,res) => { 
          let suhu =  Number(req.params.suhu)
          let celcius = suhu - 273
          let reamur = 4/5 * (suhu - 273) 
          let fahrenheit = 9/5 * (suhu - 273 )+32
          
          
          let response = {
            kelvin: suhu,
            result: {
                celcius : celcius,
                reamur : reamur,
                fahrenheit : fahrenheit
        
            },
        
          }
        
            res.json(response)
           })
  
           
       app.get("/fahrenheit/:suhu", (req,res) => { 
          let suhu =  Number(req.params.suhu)
          let celcius = 5/9 * (suhu-32)
          let reamur = 4/9 * (suhu -32)
          let kelvin = 5/9 * (suhu - 32 )+273
          
          
          let response = {
            fahrenheit : suhu,
            result: {
                celcius : celcius,
                reamur : reamur,
                remamur : reamur 
        
            },
        
          }
        
            res.json(response)
           })