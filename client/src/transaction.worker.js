
import IOTAapi from 'iota.lib.js';

// self.onmessage = ({ data: { text } }) => {

// 	console.log('Message received from main script');

// 	self.postMessage({ text: "This is the result: " + text });
	
 //    const tangle = new IOTAapi({
	//   provider: 'https://field.carriota.com:443'
	// });

 //    tangle.api.findTransactionObjects({'addresses': [e.data]}, (err, data) => {
    	
	//     if (err) {
	//     	postMessage(0);
	//       	return
	//     };

	//     var txHash = [];
	//     var txState = [];
	//     var listContributions = [];

	//     data.forEach((transaction)=> {
	//       // console.log(transaction.hash); this gives txHashes
	//       txHash.push(transaction.hash);
	//     });

	//     tangle.api.getLatestInclusion(txHash, (e, states) => {
	      
	//       if (e) {
	//       	postMessage(0);
	//         return
	//       }
	//       else {

	//         states.forEach((state) => {

	//           if (state == true){
	//             txState.push(state);
	//           }
	//         });

	//         postMessage(txState.length);

	//         // this.setState({
 //         //    	backers: txState.length
 //         //  	});
	//       }
	//     });
	// });

// };





const workercode = () => {

    let onmessage = (e) => {

        console.log('Message received from main script');

        const tangle = IOTAapi({
		  provider: 'https://field.carriota.com:443'
		});

        tangle.api.findTransactionObjects({'addresses': [e.data]}, (err, data) => {

		    if (err) {
		    	postMessage(0);
		      	return
		    };

		    var txHash = [];
		    var txState = [];
		    var listContributions = [];

		    data.forEach((transaction)=> {
		      // console.log(transaction.hash); this gives txHashes
		      txHash.push(transaction.hash);
		    });

		    tangle.api.getLatestInclusion(txHash, (e, states) => {
		      
		      if (e) {
		      	postMessage(0);
		        return
		      }
		      else {

		        states.forEach((state) => {

		          if (state == true){
		            txState.push(state);
		          }
		        });

		        postMessage(txState.length);

		        // this.setState({
	         //    	backers: txState.length
	         //  	});
		      }
		    });
		});

        // var workerResult = 'Received from main: ' + (e.data);
        // console.log('Posting message back to main script');
    }
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

export default worker_script;