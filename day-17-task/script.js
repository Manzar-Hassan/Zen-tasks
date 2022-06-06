let counter = document.getElementById('count');

setTimeout(()=>{
  counter.innerText = '10';
  setTimeout(()=>{
    counter.innerText = '9';
    setTimeout(()=>{
      counter.innerText = '8';
      setTimeout(()=>{
        counter.innerText = '7';
        setTimeout(()=>{
          counter.innerText = '6';
          setTimeout(()=>{
            counter.innerText = '5';
            setTimeout(()=> {
              counter.innerText = '4';
              setTimeout(()=>{
                counter.innerText = '3';
                setTimeout(()=>{
                  counter.innerText = '2';
                  setTimeout(()=>{
                    counter.innerText = '1';
                    setTimeout(()=>{
                      counter.style.fontSize = '48px';
                      counter.style.fontWeight = '300';
                      counter.innerText = 'Happy Independence Day';
                    },1000)
                  },1000)
                },1000)
              },1000)
            },1000)
          },1000)
        },1000)
      },1000)
    },1000)
  },1000)
},1000)