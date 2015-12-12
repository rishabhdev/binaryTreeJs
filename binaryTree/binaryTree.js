function node(data)
{
  this.data=data;
  this.left=null;
  this.right=null;
  this.spaces=0;
}
function height(node)
{
  if(node == null)
    {
      return 1;
    }
  else
    {
      return max(height(root.left,root.right))+1;
    }
}

function getMaxDistance(node)
{
  if(node==null)
    {
      return 0;
    }
  else 
    {
      return  max(height(node.left)+height(node.right)+1,getMaxDistance(node.right),getMaxDistance(node.left));
    }
}
function max(a,b)
{
  if(a>b)
    {
      return a;
    }
  else
    {
      return b;
    }
}


function driverFunction()
{
  var nodeArray=[];
  for(var i=0;i<10;i++)
    {
      nodeArray.push(new node(i)); 
    }
  
  nodeArray[0].left=nodeArray[1];
  nodeArray[0].right=nodeArray[2];
  nodeArray[1].left=nodeArray[3];
  nodeArray[1].right=nodeArray[4];
  nodeArray[2].left=nodeArray[5];
  nodeArray[2].right=nodeArray[6];
  nodeArray[3].left=nodeArray[7];
  nodeArray[3].right=nodeArray[8];
  nodeArray[4].left=nodeArray[9];
  
  addSpaces(nodeArray[0]);
  normalizeSpaces(nodeArray[0]);
  console.log(nodeArray);
}

function addSpaces(node)
{
  console.log(node.data);
  if(node.left)
    {
      console.log('left');
      node.left.spaces= node.spaces-1;
    }
  if(node.right)
    {   
      console.log('right');
      node.right.spaces+=node.spaces+1;
    }
  if(node.left)
    {
  addSpaces(node.left);
    }
  if(node.right)
    {
  addSpaces(node.right);
    }
  
  //console.log(node.spaces);
  return node.spaces;
}

function getMinimum(root)
{
  var min=root.spaces;
  var node=root;
  while(node.left)
    {
      min=node.spaces; 
      node=node.left;
    }
  return min;
  
}

function normalizeSpaces(root)
{
  
  root.spaces-=getMinimum(root);
  if(root.left)
  normalizeSpaces(root.left);   
  if(root.right)
    normalizeSpaces(root.right);

}

driverFunction();