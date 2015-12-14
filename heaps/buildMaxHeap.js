var arr=['',2,23,0,5,3,32,2123,2323,233,19];
function leftChild(i)
{
  return 2*i;
}
function rightChild(i)
{
  return 2*i+1;
  
}
function parent(i)
{
  return Math.floor(i/2);
}

function heapify(i,arr)
{
  var largest=i;
  //console.log(i);
  if(arr[largest]<arr[leftChild(i)])
    {
      largest=leftChild(i);
    }
  if(arr[largest]<arr[rightChild(i)])
    {
      largest=rightChild(i);
    }
  
  
  if(largest !== i && largest<arr.length)
  
  {
    var temp;
    temp=arr[i];
    arr[i]=arr[largest];
    arr[largest]=temp;
    heapify(largest,arr);
  }
  
}

function buildMaxHeap(arr)
{
  for(var i=Math.floor(arr.length/2);i>=1;i--)
    {
      heapify(i,arr);
     // console.log(arr);
    }
  console.log(arr);
}
buildMaxHeap(arr);