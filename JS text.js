let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {

    arr.map((x) => {
      if(x.profession == "developer"){
        console.log(x)
      }
    })
    //Write your code here , just console.log
  }
  
  function addData() {
    //Write your code here, just console.log
    const addDataa = {
      id : 4, 
      name: "susan",
      age : 20,
      profession: "intern"
    }

    const afteradd = arr.push(addDataa)
    console.log(arr)
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((x) => {
      if(x.profession != 'admin'){
        console.log(x)
      }
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
      { id:4, name:"rahul kumar", age: 25, profession:"graphic designer" },
      { id:5, name:"sundar lal", age: 20, profession:"mistri" },
      { id:6, name:"pankaj", age: 29, profession:"actor" }
    ]
    let newsign = arr.concat(arr2)

    console.log(newsign)
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }