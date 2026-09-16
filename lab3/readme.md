localhost -URL
127.0.0.1 -IP address

control+c for stop the server
every request from client have a pair of {request,response}
npm = node package manager 
## Node Pacakage Manager 
used to install,run,unstall ant program/project and pacakage 
-npm install <pacakageName>
-npm unistall<pacckageName>
to use npm,the project must be npm project,
to create npm project we can use 

-npm init -y
-it creates a package.json file automatically 
pacakage.json holds all the information realted to intall
pacakage from npm
-update pacakage.json,set type = 'module'
-it also create a folder node_modules automatically
-node_modules holds the pacakage/library files
-generally we ignore the node_module by .gitignore

Nodemon - it restart the server automatically when file changes,to install
>npm i nodemon -D
Note- -D flag will install this package as develop dependency
-to execute any program,update the package.json file then start the server as
<b>npm run dev </b>

-start -> it will execute the app on deployment 
-dev-> ir will start server in development phase(only for developer)
-res: it will return content (json/html/plain) to the user /client 
-req: ir will retrive the information from client to the server
- server send also statusCodes to the client , that indicate the error /success
message
## Status Code
-200->ok
-201->Created
-400->Bad Request
-402 -> Unauthorized
-403 -> forbidden
-404 -> not found
-500 -> internal server error

## content type
-text/plain
-text/html
-appication/json
-text/css
the content type and status code can be send back to client by two ways
1. res.writeHead
2. res.setHeader
3. res.statusCode

## send html file to clint
1. html file
  .read html file using creatReadStream
  .pipe it with res object

2. html content
   . send any html tags/contant by using
   . res.end('<any html tag>')
## json
. server return data only html content because html content will be retun by frontent developer. the data is in json format
. json always stores data in key value pairs enclose by curly bracket{} array can be stored by square bracket[].
. one pair of curly bracket reoresents one object and its properties will be seprated by comma,
...
{
    id:1,
    name:'mobile',
    price:25000,
    rating:4.5,
    review:200
}
...