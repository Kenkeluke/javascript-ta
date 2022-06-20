// complete the function
function prime (num) {
  // code goes here
  let result;

  if( num <= 1 )
    {
      result = false;
    }

  if(num == 2)
    {
      result = true;
    }

   
  for(let a = 2; a < num; a++)
  {
    if (num % a === 0)
    {
      result = false;
      break;
     }

    else 
    {
      result = true;
    }
  }
  return(result);
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
