<p>STEPS :</p>

<p>Open a terminal  where you will copy of the repo in.<br>
Clone the repo: <code>git clone https://github.com/nikhil1415926/ConsensysAcademy-Final-Project.git</code>.<br>
Move into the root directory of the project: <code>cd ConsensysAcademy-Final-Project</code>.<br>
Install ETHpm library dependencies (Open Zeppelin): <code>truffle install</code>.<br>
Start a local blockchain using truffle: <code>truffle console</code>.<br>
Inside the truffle console migrate smart contracts: <code>migrate</code>.<br>
Open a second terminal window and navigate to the root directory of the project.<br>
Install front end dependencies via npm: <code>npm install</code>.<br>
Build the front end react app and open it in the browser (at <a href="http://localhost:3000">http://localhost:3000</a>): <code>npm run start</code>.<br>
Open MetaMask and connect to the truffle blockchain via standard process (seed phrase, custom RPC - if necessary, see MetaMask + Truffle documentation).<br>
Refresh</p>


<p>Quick Version </p>
<p>truffle install<br>
truffle migrate --reset<br>
truffle test<br>
npm install<br>
npm run start</p>
