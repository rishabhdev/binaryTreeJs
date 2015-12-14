// noprotect
function node(data)
{
  this.data=data;
  this.left=null;
  this.right=null;
  this.spaces=0;
}
function getHeight(node)
{
  if(node === null)
    {
      return 0;
    }
  else
    {
      return max(getHeight(node.left),getHeight(node.right))+1;
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
      return  max(getHeight(node.left)+getHeight(node.right)+1,getMaxDistance(node.right),getMaxDistance(node.left));
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
  //normalizeSpaces(nodeArray[0]);
  for(var j=0; j< nodeArray.length;j++)
    {
      console.log(nodeArray[j]);
    }
  printTree(nodeArray[0]);
}

function addSpaces(node)
{
  //console.log(node.data);
  
  if(node ===null)
    {
      return;
    }
  if(node.left)
    {
      node.left.spaces= node.spaces-1;
    }
  if(node.right)
    {   
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
    node=node.left;
     min=node.spaces; 
    }
  return min;
  
}

function normalizeSpaces(root)
{
  
  root.spaces-=getMinimum(root);
  console.log(getMinimum(root));
  if(root.left)
  normalizeSpaces(root.left);   
  if(root.right)
    normalizeSpaces(root.right);

}

function printTree(root)
{
  // noprotect
  console.log('printTree');
  var height=getHeight(root);
 // console.log('height',height);
  var k=0;
  while(k<height)
    {
      var nodes=getNodesAtLevel(root,k);      
      printNodeArray(nodes);
      k++;
    }
}

function getSpaces(n)
{
  var str="";
  while(n)
    {
      n=n-1;
      str+=" ";
    }
    console.log(n);
  console.log("getSpaces");
  console.log(str);
  return str;
}
function printNodeArray(nodes)
{
  var str="";
  for (var i in nodes)
    {
      str+=getSpaces(nodes[i].spaces);
      str+=nodes[i].data;
    }
  console.log(str);
}

function getNodesAtLevel(root,k)
{
if(k===0 && root)
    {
      return [root];
    }
  
  var left=[];
  var right=[];
if(root.left)
    {
left=getNodesAtLevel(root.left,k-1);
    }
  if(root.right)
    {
 right=getNodesAtLevel(root.right,k-1);
    }
  
  
  if(root.data===0)
    {
    //console.log('****getNodesAtLevel**');

  //console.log(k);
  //console.log(left.concat(right));
    }
  
  return left.concat(right);
  
}


driverFunction();