function check_prime(num){
  
    let count=0;
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==0)
    {
        console.log(num,"prime");
    }
    else
    {
        console.log(num,"not prime");
    }
  }
  check_prime(10);
  