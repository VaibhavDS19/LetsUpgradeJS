let p =[
   {
   name : "John",
   age : 50,
   country : "America",
   hobbies : ["Singing","Dancing"] 
   },
   {
      name : "Sherlock",
      age : 37,
      country : "England",
      hobbies : ["Singing","Violin"] 
   }
]

function displayObjects(p){
   for(let i=0;i<p.length;i++)
   {
   console.log("Person "+(i+1))
   console.log(p[i].name)
   console.log(p[i].age)
   console.log(p[i].country)
   for(let j=0;j<p[i].hobbies.length;j++)
      console.log(p[i].hobbies[j])
   console.log("\n")
   }
}

function isIndia(p){
   for(let i=0;i<p.length;i++)
   {
      if(p[i].country.toLowerCase()=="India")
      {
         console.log("Indian")
         console.log(p[i].name)
         console.log(p[i].age)
         console.log(p[i].country)
         for(let j=0;j<p[i].hobbies.length;j++)
            console.log(p[i].hobbies[j])
         console.log("\n")
      }
   }
}

function is30(p){
   for(let i=0;i<p.length;i++)
   {
      if(p[i].age<30)
      {
         console.log("Person "+(i+1))
         console.log(p[i].name)
         console.log(p[i].age)
         console.log(p[i].country)
         for(let j=0;j<p[i].hobbies.length;j++)
            console.log(p[i].hobbies[j])
         console.log("\n")
      }
   }
}

function P4(p)
{
   is30(p)
   isIndia(p)
}

function isIndia(p){
   for(let i=0;i<p.length;i++)
   {
      if(p[i].country.toLowerCase()=="India")
      {
         console.log("Person "+(i+1))
         console.log(p[i].name)
         console.log(p[i].age)
         console.log(p[i].country)
         for(let j=0;j<p[i].hobbies.length;j++)
            console.log(p[i].hobbies[j])
         console.log("\n")
      }
   }
}

window.onload=P4(p)